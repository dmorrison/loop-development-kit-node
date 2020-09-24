import { ConnInfo } from './proto/broker_pb';
import { HostServices } from './hostServices';
import WhisperGrpcHostClient from './whisperGrpcHostClient';
import StorageGrpcHostClient from './storageGrpcHostClient';
import KeyboardGrpcHostClient from './keyboardGrpcHostClient';
export default class HostClientFacade implements HostServices {
    whisperClient: WhisperGrpcHostClient;
    storageClient: StorageGrpcHostClient;
    keyboardClient: KeyboardGrpcHostClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
