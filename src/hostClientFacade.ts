import WhisperGrpcHostClient from './whisperGrpcHostClient';
import StorageGrpcHostClient from './storageGrpcHostClient';
import { ConnInfo } from './proto/broker_pb';

export default class HostClientFacade {
  public whisperClient: WhisperGrpcHostClient = new WhisperGrpcHostClient();

  public storageClient: StorageGrpcHostClient = new StorageGrpcHostClient();

  connect(connInfo: ConnInfo.AsObject): Promise<void[]> {
    return Promise.all([
      this.whisperClient.connect(connInfo),
      this.storageClient.connect(connInfo),
    ]);
  }
}
