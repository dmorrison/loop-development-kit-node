import { Whisper } from './whisper';

export interface WhisperService {
  /**
   * @returns - Promise resolving with the unique ID of the generated whisper.
   */
  emitWhisper(whisper: Whisper): Promise<Error | string>;
  updateWhisper(id: string, whisper: Whisper): Promise<Error | void>;
}
