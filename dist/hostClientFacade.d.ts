import { ConnInfo } from './proto/broker_pb';
import { HostServices } from './hostServices';
import WhisperGrpcHostClient from './hostClients/whisperGrpcHostClient';
import StorageGrpcHostClient from './hostClients/storageGrpcHostClient';
import KeyboardGrpcHostClient from './hostClients/keyboardGrpcHostClient';
export default class HostClientFacade implements HostServices {
    whisperClient: WhisperGrpcHostClient;
    storageClient: StorageGrpcHostClient;
    keyboardClient: KeyboardGrpcHostClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
