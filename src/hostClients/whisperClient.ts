import { Whisper } from './whisper';
import messages from '../grpc/whisper_pb';
import { WhisperClient as WhisperGRPCClient } from '../grpc/whisper_grpc_pb';
import { WhisperService } from './whisperService';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';

/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
class WhisperClient
  extends GRPCClient<WhisperGRPCClient>
  implements WhisperService {
  /**
   * Send a Whisper to the host process.
   *
   * @async
   * @param whisper - An object defining the contents of the Whisper.
   * @returns Promise resolving when the server responds to the command.
   */
  emitWhisper(whisper: Whisper): Promise<Error | string> {
    return new Promise((resolve, reject) => {
      const request = new messages.WhisperNewRequest();

      const style = new messages.WhisperStyle();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
        style.setPrimarycolor(whisper.style.primaryColor || '#666');
        style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
      } else {
        style.setBackgroundcolor('#fff');
        style.setPrimarycolor('#666');
        style.setHighlightcolor('#651fff');
      }

      const whisperMsg = new messages.WhisperMsg();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);

      this.client.whisperNew(request, (err, response) => {
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
        return reject(new Error('missing required property id'));
      }

      const request = new messages.WhisperUpdateRequest();

      const style = new messages.WhisperStyle();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
        style.setPrimarycolor(whisper.style.primaryColor || '#666');
        style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
      } else {
        style.setBackgroundcolor('#fff');
        style.setPrimarycolor('#666');
        style.setHighlightcolor('#651fff');
      }

      const whisperMsg = new messages.WhisperMsg();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);
      request.setId(id);

      return this.client.whisperUpdate(request, (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }

  protected generateClient(): GRPCClientConstructor<WhisperGRPCClient> {
    return WhisperGRPCClient;
  }
}

export default WhisperClient;