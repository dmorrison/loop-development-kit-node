import { Whisper } from './whisper';
import { WhisperClient } from '../proto/whisper_grpc_pb';
import { WhisperHost } from './whisperHost';
import GrpcHostClient from './grpcHostClient';
/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
declare class WhisperGrpcHostClient extends GrpcHostClient<WhisperClient> implements WhisperHost {
    /**
     * Send a Whisper to the host process.
     *
     * @async
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    emitWhisper(whisper: Whisper): Promise<Error | string>;
    /**
     * Update a Whisper that has already been sent to the host process.
     *
     * @async
     * @param id - The id of an existing Whisper that should be updated.
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    updateWhisper(id: string, whisper: Whisper): Promise<Error | void>;
    protected generateClient(address: string): WhisperClient;
}
export default WhisperGrpcHostClient;
