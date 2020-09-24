import { WhisperHost } from './whisperHost';
import { StorageHost } from './storageHost';

export interface HostServices {
  whisperClient: WhisperHost;
  storageClient: StorageHost;
}
