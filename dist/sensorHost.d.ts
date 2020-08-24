import { PluginEvent } from './pluginEvent';
import { PluginHost } from './pluginHost';
export interface SensorHost extends PluginHost {
    /**
     * Emits an event to Sidekick.
     *
     * @param event - The event to emit.
     */
    emitEvent(event: PluginEvent): Promise<void>;
}
