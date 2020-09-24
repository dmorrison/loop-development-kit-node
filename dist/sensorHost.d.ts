import { PluginEvent } from './pluginEvent';
import { PluginHost } from './pluginHost';
export interface SensorHost extends PluginHost {
    /**
     * Emits an event to Olive Helps.
     *
     * @param event - The event to emit.
     */
    emitEvent(event: PluginEvent): Promise<void>;
}
