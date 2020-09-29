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
    whisperClient: WhisperHostClient;
    storageClient: StorageHostClient;
    keyboardClient: KeyboardSensorClient;
    clipboardClient: ClipboardClient;
    cursorClient: CursorHostClient;
    hoverClient: HoverSensorClient;
    fileSystemClient: FileSystemHostClient;
    processClient: ProcessSensorClient;
    windowClient: WindowSensorClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
