import { Whisper } from './whisper';
import { ControllerHostClient } from './proto/ldk_grpc_pb';
import { ControllerHost } from './controllerHost';
import GrpcHostClient from './grpcHostClient';
/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
declare class ControllerGrpcHostClient extends GrpcHostClient<ControllerHostClient> implements ControllerHost {
    /**
     * Send a Whisper to the host process.
     *
     * @async
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    emitWhisper(whisper: Whisper): Promise<Error | void>;
    protected generateClient(address: string): ControllerHostClient;
}
export default ControllerGrpcHostClient;
