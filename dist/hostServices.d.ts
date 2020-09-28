import { WhisperHost } from './hostClients/whisperHost';
import { StorageHost } from './hostClients/storageHost';
import { KeyboardHost } from './hostClients/keyboardHost';
import { ClipboardHost } from './hostClients/clipboardHost';
import { CursorHost } from './hostClients/cursorHost';
import { HoverHost } from './hostClients/hoverHost';
import { FileSystemHost } from './hostClients/filesystemHost';
export interface HostServices {
    whisperClient: WhisperHost;
    storageClient: StorageHost;
    keyboardClient: KeyboardHost;
    clipboardClient: ClipboardHost;
    cursorClient: CursorHost;
    hoverClient: HoverHost;
    fileSystemClient: FileSystemHost;
}
