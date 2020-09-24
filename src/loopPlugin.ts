import { PluginEvent } from './pluginEvent';

/**
 * Internal version of the plugin interface.
 *
 * @internal
 */
export interface LoopPlugin<THost> {
  /**
   * Executed when the host starts the plugin.
   * The plugin should not do anything before this is called.
   *
   * @param host - The host controller. You should assign this as an instance property for use by the Controller.
   */
  start(host: THost): void;
  /**
   * Executed by the host to stop the plugin.
   * All plugin activity should stop when this is called.
   */
  stop(): void;
}
