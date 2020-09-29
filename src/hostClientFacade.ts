import { ConnInfo } from './grpc/broker_pb';
import { HostServices } from './hostServices';
import WhisperHostClient from './hostClients/whisperHostClient';
import StorageHostClient from './hostClients/storageHostClient';
import KeyboardSensorClient from './hostClients/keyboardSensorClient';
import { ClipboardClient } from './hostClients/clipboardClient';
import { CursorHostClient } from './hostClients/cursorHostClient';
import { HoverSensorClient } from './hostClients/hoverSensorClient';
import { FileSystemHostClient } from './hostClients/fileSystemHostClient';
import { ProcessSensorClient } from './hostClients/processSensorClient';
import { WindowSensorClient } from './hostClients/windowSensorClient';

export default class HostClientFacade implements HostServices {
  public whisperClient: WhisperHostClient = new WhisperHostClient();

  public storageClient: StorageHostClient = new StorageHostClient();

  public keyboardClient: KeyboardSensorClient = new KeyboardSensorClient();

  public clipboardClient: ClipboardClient = new ClipboardClient();

  public cursorClient: CursorHostClient = new CursorHostClient();

  public hoverClient: HoverSensorClient = new HoverSensorClient();

  public fileSystemClient: FileSystemHostClient = new FileSystemHostClient();

  public processClient: ProcessSensorClient = new ProcessSensorClient();

  public windowClient: WindowSensorClient = new WindowSensorClient();

  connect(connInfo: ConnInfo.AsObject): Promise<void[]> {
    return Promise.all([
      this.whisperClient.connect(connInfo),
      this.storageClient.connect(connInfo),
      this.keyboardClient.connect(connInfo),
      this.clipboardClient.connect(connInfo),
      this.cursorClient.connect(connInfo),
      this.hoverClient.connect(connInfo),
      this.fileSystemClient.connect(connInfo),
      this.processClient.connect(connInfo),
      this.windowClient.connect(connInfo),
    ]);
  }
}
