import { Controller } from './controller';
import { Sensor } from './sensor';
/**
 * Takes a controller implementation and launches the plugin.
 *
 * @param controller - The controller implementation.
 */
export declare function serveControllerPlugin(controller: Controller): void;
/**
 * Takes a sensor implementation and launches the plugin.
 *
 * @param sensor - The sensor implementation.
 */
export declare function serveSensorPlugin(sensor: Sensor): void;
