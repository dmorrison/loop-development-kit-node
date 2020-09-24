import { Loop } from './loop';
import ControllerPlugin from './controllerPlugin';

/**
 * Takes a controller implementation and launches the plugin.
 *
 * @param controller - The controller implementation.
 */
export function serveControllerPlugin(controller: Loop): void {
  const plugin = new ControllerPlugin(controller);
  plugin.serve();
}
