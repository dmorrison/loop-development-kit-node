import { WhisperHost } from './whisperHost';
import { HostServices } from './hostServices';

/**
 * Your Controllers must implement this interface.
 *
 * Here's an example implementation:
 * ```
 * const { Logger } = require('ldk');
 * const { name } = require('./package');
 *
 * class Controller {
 *   constructor() {
 *     this.logger = new Logger(name);
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
 *
 *   onEvent(event) {
 *     // ignore any non-text events
 *     if (!event.data.text) {
 *       this.logger.info('ignored an event');
 *       return;
 *     }
 *
 *     this.logger.debug('Got a text event!');
 *     this.host.emitWhisper({
 *       icon: 'bathtub',
 *       label: 'Example',
 *       markdown: event.data.text,
 *     });
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
