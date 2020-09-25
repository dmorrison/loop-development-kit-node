"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardSensorClient = void 0;
const hostClient_1 = __importDefault(require("./hostClient"));
const clipboard_grpc_pb_1 = require("../proto/clipboard_grpc_pb");
class ClipboardSensorClient extends hostClient_1.default {
    generateClient() {
        return clipboard_grpc_pb_1.ClipboardClient;
    }
}
exports.ClipboardSensorClient = ClipboardSensorClient;
