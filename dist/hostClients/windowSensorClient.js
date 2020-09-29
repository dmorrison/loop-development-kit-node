"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowSensorClient = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const window_pb_1 = require("../grpc/window_pb");
const window_grpc_pb_1 = require("../grpc/window_grpc_pb");
const hostClient_1 = __importDefault(require("./hostClient"));
const windowHost_1 = require("./windowHost");
const transformingStream_1 = require("./transformingStream");
/**
 * @param action
 */
function parseWindowAction(action) {
    switch (action) {
        case window_pb_1.WindowAction.WINDOW_ACTION_FOCUSED:
            return windowHost_1.WindowStreamAction.Focused;
        case window_pb_1.WindowAction.WINDOW_ACTION_UNFOCUSED:
            return windowHost_1.WindowStreamAction.Unfocused;
        case window_pb_1.WindowAction.WINDOW_ACTION_OPENED:
            return windowHost_1.WindowStreamAction.Opened;
        case window_pb_1.WindowAction.WINDOW_ACTION_CLOSED:
            return windowHost_1.WindowStreamAction.Closed;
        case window_pb_1.WindowAction.WINDOW_ACTION_UNKNOWN:
        default:
            return windowHost_1.WindowStreamAction.Unknown;
    }
}
class WindowSensorClient extends hostClient_1.default {
    generateClient() {
        return window_grpc_pb_1.WindowClient;
    }
    queryActiveWindow() {
        return this.buildQuery((message, callback) => this.client.windowActiveWindow(message, callback), () => new empty_pb_1.Empty(), (response) => {
            return response.toObject().window;
        });
    }
    queryWindows() {
        return this.buildQuery((message, callback) => this.client.windowState(message, callback), () => new empty_pb_1.Empty(), (response) => response.toObject().windowList);
    }
    streamActiveWindow(listener) {
        return new transformingStream_1.TransformingStream(this.client.windowActiveWindowStream(new empty_pb_1.Empty()), (response) => response.toObject().window, listener);
    }
    streamWindows(listener) {
        return new transformingStream_1.TransformingStream(this.client.windowStateStream(new empty_pb_1.Empty()), (response) => {
            const window = response.getWindow();
            if (window == null) {
                return undefined;
            }
            return {
                window: window.toObject(),
                action: parseWindowAction(response.getAction()),
            };
        }, listener);
    }
}
exports.WindowSensorClient = WindowSensorClient;