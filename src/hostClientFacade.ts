import { ConnInfo } from './grpc/broker_pb';
import { HostServices } from './hostServices';
import WhisperClient from './hostClients/whisperClient';
import StorageClient from './hostClients/storageClient';
import KeyboardClient from './hostClients/keyboardClient';
import { ClipboardClient } from './hostClients/clipboardClient';
import { CursorClient } from './hostClients/cursorClient';
import { HoverClient } from './hostClients/hoverClient';
import { FileSystemClient } from './hostClients/fileSystemClient';
import { ProcessClient } from './hostClients/processClient';
import { WindowClient } from './hostClients/windowClient';

export default class HostClientFacade implements HostServices {
  public whisperClient: WhisperClient = new WhisperClient();

  public storageClient: StorageClient = new StorageClient();

  public keyboardClient: KeyboardClient = new KeyboardClient();

  public clipboardClient: ClipboardClient = new ClipboardClient();

  public cursorClient: CursorClient = new CursorClient();

  public hoverClient: HoverClient = new HoverClient();

  public fileSystemClient: FileSystemClient = new FileSystemClient();

  public processClient: ProcessClient = new ProcessClient();

  public windowClient: WindowClient = new WindowClient();

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
