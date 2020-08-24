"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveSensorPlugin = exports.serveControllerPlugin = void 0;
const controllerPlugin_1 = __importDefault(require("./controllerPlugin"));
const sensorPlugin_1 = __importDefault(require("./sensorPlugin"));
/**
 * Takes a controller implementation and launches the plugin.
 *
 * @param controller - The controller implementation.
 */
function serveControllerPlugin(controller) {
    const plugin = new controllerPlugin_1.default(controller);
    plugin.serve();
}
exports.serveControllerPlugin = serveControllerPlugin;
/**
 * Takes a sensor implementation and launches the plugin.
 *
 * @param sensor - The sensor implementation.
 */
function serveSensorPlugin(sensor) {
    const plugin = new sensorPlugin_1.default(sensor);
    plugin.serve();
}
exports.serveSensorPlugin = serveSensorPlugin;
