import { Whisper } from './whisper';

export interface ControllerHost {
  emitWhisper(whisper: Whisper): Promise<Error | void>;
  storageDelete(key: string): Promise<void>;
  storageDeleteAll(): Promise<void>;
  storageHasKey(key: string): Promise<boolean>;
  storageKeys(): Promise<string[]>;
  storageRead(key: string): Promise<string>;
  storageReadAll(): Promise<{ [index: string]: string }>;
  storageWrite(key: string, value: string): Promise<void>;
}
