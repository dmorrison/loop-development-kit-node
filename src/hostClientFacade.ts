import { ConnInfo } from './grpc/broker_pb';
import { HostServices } from './hostServices';
import WhisperHostClient from './hostClients/whisperHostClient';
import StorageHostClient from './hostClients/storageHostClient';
import KeyboardSensorClient from './hostClients/keyboardSensorClient';
import { ClipboardSensorClient } from './hostClients/clipboardSensorClient';
import { CursorHostClient } from './hostClients/cursorHostClient';
import { HoverSensorClient } from './hostClients/hoverSensorClient';

export default class HostClientFacade implements HostServices {
  public whisperClient: WhisperHostClient = new WhisperHostClient();

  public storageClient: StorageHostClient = new StorageHostClient();

  public keyboardClient: KeyboardSensorClient = new KeyboardSensorClient();

  public clipboardClient: ClipboardSensorClient = new ClipboardSensorClient();

  public cursorClient: CursorHostClient = new CursorHostClient();

  public hoverClient: HoverSensorClient = new HoverSensorClient();

  connect(connInfo: ConnInfo.AsObject): Promise<void[]> {
    return Promise.all([
      this.whisperClient.connect(connInfo),
      this.storageClient.connect(connInfo),
      this.keyboardClient.connect(connInfo),
      this.clipboardClient.connect(connInfo),
      this.cursorClient.connect(connInfo),
      this.hoverClient.connect(connInfo),
    ]);
  }
}
