import { WhisperHost } from './hostClients/whisperHost';
import { StorageHost } from './hostClients/storageHost';
import { KeyboardHost } from './hostClients/keyboardHost';

export interface HostServices {
  whisperClient: WhisperHost;
  storageClient: StorageHost;
  keyboardClient: KeyboardHost;
}
