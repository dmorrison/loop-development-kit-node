import SensorGrpcHostClient from './sensorGrpcHostClient';
import { Event } from './event';

/**
 * @typedef Sensor
 * @type {object}
 * @property {Function} start - Executed when the host starts the plugin.
 * The plugin should not do anything before this is called.
 * @param {SensorGrpcHostClient} host
 * @property {Function} stop - Executed by the host to stop the plugin.
 * All plugin activity should stop when this is called.
 * @property {Function} onEvent - The host will send events to the plugin by calling this function.
 * @param {event} Event
 * @example
 * const { Logger } = require('ldk');
 * const { name } = require('./package');
 *
 * class Sensor {
 *   constructor() {
 *     this.logger = new Logger(name);
 *   }
 *
 *   start(host) {
 *     this.host = host;
 *
 *     this.loop = setInterval(() => {
 *       this.host.emitEvent({
 *         data: {
 *           text: `Event from example Node sensor: ${new Date()}`,
 *         },
 *       });
 *     }, 1000);
 *     this.logger.info('started');
 *   }
 *
 *   stop() {
 *     clearInterval(this.loop);
 *     this.logger.info('stopped');
 *   }
 *
 *   onEvent() {
 *     this.logger.info('ignored an event');
 *   }
 * }
 */
export interface Sensor {
  start(host: SensorGrpcHostClient): void;
  stop(): void;
  onEvent(event: Event): void;
}
