"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveControllerPlugin = void 0;
const plugin_1 = __importDefault(require("./plugin"));
/**
 * Takes a controller implementation and launches the plugin.
 *
 * @param controller - The controller implementation.
 */
function serveControllerPlugin(controller) {
    const plugin = new plugin_1.default(controller);
    plugin.serve();
}
exports.serveControllerPlugin = serveControllerPlugin;
