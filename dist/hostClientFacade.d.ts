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
    whisperClient: WhisperClient;
    storageClient: StorageClient;
    keyboardClient: KeyboardClient;
    clipboardClient: ClipboardClient;
    cursorClient: CursorClient;
    hoverClient: HoverClient;
    fileSystemClient: FileSystemClient;
    processClient: ProcessClient;
    windowClient: WindowClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
