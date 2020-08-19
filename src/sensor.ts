import { PluginEvent } from './pluginEvent';
import { SensorHost } from './sensorHost';

/**
 * The Sensor interface should be implemented by consumers.
 *
 * ```
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
 *     this.host = null;
 *     clearInterval(this.loop);
 *     this.logger.info('stopped');
 *   }
 *
 *   onEvent() {
 *     this.logger.info('ignored an event');
 *   }
 * }
 * ```
 *
 */
export interface Sensor {
  /**
   * Called when the plugin is started.
   *
   * @param host - The host object starting the plugin. You should store this so you can call it later.
   */
  start(host: SensorHost): void;

  /**
   * Stops the service. Once this is called the plugin should stop all work its doing, and the host object should be unassigned.
   */
  stop(): void;

  /**
   * Called when the plugins is sent an event.
   *
   * @param event - The event object to consume.
   */
  onEvent(event: PluginEvent): void;
}
