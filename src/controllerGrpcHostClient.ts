import { Whisper } from './whisper';
import messages from './proto/ldk_pb';
import { ControllerHostClient, grpc } from './proto/ldk_grpc_pb';
import { ControllerHost } from './controllerHost';
import GrpcHostClient from './grpcHostClient';

/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
class ControllerGrpcHostClient extends GrpcHostClient<ControllerHostClient>
  implements ControllerHost {
  /**
   * Send a Whisper to the host process.
   *
   * @async
   * @param whisper - An object defining the contents of the Whisper.
   * @returns Promise resolving when the server responds to the command.
   */
  emitWhisper(whisper: Whisper): Promise<Error | string> {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitWhisperRequest();

      const style = new messages.Style();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
        style.setPrimarycolor(whisper.style.primaryColor || '#666');
        style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
      } else {
        style.setBackgroundcolor('#fff');
        style.setPrimarycolor('#666');
        style.setHighlightcolor('#651fff');
      }

      const whisperMsg = new messages.Whisper();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);

      this.client.emitWhisper(request, (err, response) => {
        if (err) {
          return reject(err);
        }

        const id = response.getId();
        return resolve(id);
      });
    });
  }

  /**
   * Update a Whisper that has already been sent to the host process.
   *
   * @async
   * @param id - The id of an existing Whisper that should be updated.
   * @param whisper - An object defining the contents of the Whisper.
   * @returns Promise resolving when the server responds to the command.
   */
  updateWhisper(id: string, whisper: Whisper): Promise<Error | void> {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new Error("missing required property id"));
     }

      const request = new messages.UpdateWhisperRequest();

      const style = new messages.Style();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
        style.setPrimarycolor(whisper.style.primaryColor || '#666');
        style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
      } else {
        style.setBackgroundcolor('#fff');
        style.setPrimarycolor('#666');
        style.setHighlightcolor('#651fff');
      }

      const whisperMsg = new messages.Whisper();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);
      request.setId(id);

      return this.client.updateWhisper(request, (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }

  protected generateClient(address: string): ControllerHostClient {
    return new ControllerHostClient(
      address,
      grpc.credentials.createInsecure(),
    );
  }
}

export default ControllerGrpcHostClient;
