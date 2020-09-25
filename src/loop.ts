import { HostServices } from './hostServices';

/**
 * Your Loops must implement this interface.
 *
 * Here's an example implementation:
 * ```
 * const { Logger } = require('ldk');
 *
 * class Controller {
 *   constructor() {
 *     this.logger = new Logger('my-loop');
 *   }
 *
 *   start(host) {
 *     this.host = host;
 *     this.logger.info('started');
 *   }
 *
 *   stop() {
 *     this.host = null;
 *     this.logger.info('stopped');
 *   }
 * }
 * ```
 */
export interface Loop {
  /**
   * Executed when the host starts the plugin.
   * The plugin should not do anything before this is called.
   *
   * @param host - The host controller. You should assign this as an instance property for use by the Controller.
   */
  start(host: HostServices): void;
  /**
   * Executed by the host to stop the plugin.
   * All plugin activity should stop when this is called.
   */
  stop(): void;
}
