import { Whisper } from './whisper';
import { PluginHost } from './pluginHost';

export interface ControllerHost extends PluginHost {
  /**
   * @returns - Promise resolving with the unique ID of the generated whisper.
   */
  emitWhisper(whisper: Whisper): Promise<Error | string>;
  updateWhisper(id: string, whisper: Whisper): Promise<Error | void>;
}
