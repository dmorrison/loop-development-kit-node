import ControllerGrpcHostClient from './controllerGrpcHostClient';

/**
 * @typedef Controller
 * @type {object}
 * @property {Function} start - Executed when the host starts the plugin.
 * The plugin should not do anything before this is called.
 * @param {ControllerGrpcHostClient} host
 * @property {Function} stop - Executed by the host to stop the plugin.
 * All plugin activity should stop when this is called.
 * @property {Function} onEvent - The host will send events to the plugin by calling this function.
 * @param {event} event
 * @example
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
 */
export interface Controller {
  start(host: ControllerGrpcHostClient): void;
  stop(): void;
  onEvent(event: event): void;
}
