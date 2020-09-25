import { ConnInfo } from './proto/broker_pb';
import { HostServices } from './hostServices';
import WhisperGrpcHostClient from './hostClients/whisperGrpcHostClient';
import StorageGrpcHostClient from './hostClients/storageGrpcHostClient';
import KeyboardGrpcHostClient from './hostClients/keyboardGrpcHostClient';

export default class HostClientFacade implements HostServices {
  public whisperClient: WhisperGrpcHostClient = new WhisperGrpcHostClient();

  public storageClient: StorageGrpcHostClient = new StorageGrpcHostClient();

  public keyboardClient: KeyboardGrpcHostClient = new KeyboardGrpcHostClient();

  connect(connInfo: ConnInfo.AsObject): Promise<void[]> {
    return Promise.all([
      this.whisperClient.connect(connInfo),
      this.storageClient.connect(connInfo),
      this.keyboardClient.connect(connInfo),
    ]);
  }
}
