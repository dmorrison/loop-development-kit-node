import { ConnInfo } from './grpc/broker_pb';
import { HostServices } from './hostServices';
import WhisperHostClient from './hostClients/whisperHostClient';
import StorageHostClient from './hostClients/storageHostClient';
import KeyboardSensorClient from './hostClients/keyboardSensorClient';

export default class HostClientFacade implements HostServices {
  public whisperClient: WhisperHostClient = new WhisperHostClient();

  public storageClient: StorageHostClient = new StorageHostClient();

  public keyboardClient: KeyboardSensorClient = new KeyboardSensorClient();

  connect(connInfo: ConnInfo.AsObject): Promise<void[]> {
    return Promise.all([
      this.whisperClient.connect(connInfo),
      this.storageClient.connect(connInfo),
      this.keyboardClient.connect(connInfo),
    ]);
  }
}
