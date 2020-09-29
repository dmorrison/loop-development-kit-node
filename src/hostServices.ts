import { WhisperService } from './hostClients/whisperService';
import { StorageService } from './hostClients/storageService';
import { KeyboardService } from './hostClients/keyboardService';
import { ClipboardService } from './hostClients/clipboardService';
import { CursorService } from './hostClients/cursorService';
import { HoverService } from './hostClients/hoverService';
import { FileSystemService } from './hostClients/fileSystemService';
import { ProcessService } from './hostClients/processService';
import { WindowService } from './hostClients/windowService';

export interface HostServices {
  whisperClient: WhisperService;
  storageClient: StorageService;
  keyboardClient: KeyboardService;
  clipboardClient: ClipboardService;
  cursorClient: CursorService;
  hoverClient: HoverService;
  fileSystemClient: FileSystemService;
  processClient: ProcessService;
  windowClient: WindowService;
}
