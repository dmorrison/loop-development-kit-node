import {Whisper} from './whisper';
import {PluginHost} from "./pluginHost";

export interface ControllerHost extends PluginHost {
  emitWhisper(whisper: Whisper): Promise<Error | string>;
  updateWhisper(whisper: Whisper, id: string): Promise<Error | void>;
}
