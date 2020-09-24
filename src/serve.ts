import { Loop } from './loop';
import Plugin from './plugin';

/**
 * Takes a controller implementation and launches the plugin.
 *
 * @param controller - The controller implementation.
 */
export function serveControllerPlugin(controller: Loop): void {
  const plugin = new Plugin(controller);
  plugin.serve();
}
