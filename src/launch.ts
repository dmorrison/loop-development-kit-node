import { Controller } from './controller';
import ControllerPlugin from './controllerPlugin';
import { Sensor } from './sensor';
import SensorPlugin from './sensorPlugin';

/**
 * Takes a controller implementation and launches the plugin.
 * @param controller
 */
export function launchControllerPlugin(controller: Controller): void {
  const plugin = new ControllerPlugin(controller);
  plugin.serve();
}

/**
 * Takes a sensor implementation and launches the plugin.
 * @param sensor
 */
export function launchSensorPlugin(sensor: Sensor): void {
  const plugin = new SensorPlugin(sensor);
  plugin.serve();
}
