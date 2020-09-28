import { ConnInfo } from './grpc/broker_pb';
import { HostServices } from './hostServices';
import WhisperHostClient from './hostClients/whisperHostClient';
import StorageHostClient from './hostClients/storageHostClient';
import KeyboardSensorClient from './hostClients/keyboardSensorClient';
import { ClipboardSensorClient } from './hostClients/clipboardSensorClient';
import { CursorHostClient } from './hostClients/cursorHostClient';
import { HoverSensorClient } from './hostClients/hoverSensorClient';
import { FileSystemHostClient } from './hostClients/fileSystemHostClient';
import { ProcessSensorClient } from './hostClients/processSensorClient';
export default class HostClientFacade implements HostServices {
    whisperClient: WhisperHostClient;
    storageClient: StorageHostClient;
    keyboardClient: KeyboardSensorClient;
    clipboardClient: ClipboardSensorClient;
    cursorClient: CursorHostClient;
    hoverClient: HoverSensorClient;
    fileSystemClient: FileSystemHostClient;
    processClient: ProcessSensorClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
