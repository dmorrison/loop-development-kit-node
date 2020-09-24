import { WhisperHost } from './whisperHost';
import { StorageHost } from './storageHost';
import { KeyboardHost } from './keyboardHost';
export interface HostServices {
    whisperClient: WhisperHost;
    storageClient: StorageHost;
    keyboardClient: KeyboardHost;
}
