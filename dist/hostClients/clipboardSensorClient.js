"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardSensorClient = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const hostClient_1 = __importDefault(require("./hostClient"));
const clipboard_grpc_pb_1 = require("../proto/clipboard_grpc_pb");
const transformingStream_1 = require("./transformingStream");
const clipboardTransformer = (message) => {
    return message.getText();
};
class ClipboardSensorClient extends hostClient_1.default {
    generateClient() {
        return clipboard_grpc_pb_1.ClipboardClient;
    }
    queryClipboard() {
        return Promise.resolve('');
    }
    streamClipboard(listener) {
        return new transformingStream_1.TransformingStream(this.client.clipboardReadStream(new empty_pb_1.Empty()), clipboardTransformer, listener);
    }
    writeClipboard(text) {
        return Promise.resolve(undefined);
    }
}
exports.ClipboardSensorClient = ClipboardSensorClient;
