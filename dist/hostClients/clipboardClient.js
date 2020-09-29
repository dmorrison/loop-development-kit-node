"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardClient = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const baseClient_1 = __importDefault(require("./baseClient"));
const clipboard_grpc_pb_1 = require("../grpc/clipboard_grpc_pb");
const clipboard_pb_1 = __importDefault(require("../grpc/clipboard_pb"));
const transformingStream_1 = require("./transformingStream");
const clipboardTransformer = (message) => {
    return message.getText();
};
class ClipboardClient extends baseClient_1.default {
    generateClient() {
        return clipboard_grpc_pb_1.ClipboardClient;
    }
    queryClipboard() {
        return this.buildQuery((message, callback) => this.client.clipboardRead(message, callback), () => new empty_pb_1.Empty(), clipboardTransformer);
    }
    streamClipboard(listener) {
        return new transformingStream_1.TransformingStream(this.client.clipboardReadStream(new empty_pb_1.Empty()), clipboardTransformer, listener);
    }
    writeClipboard(text) {
        return this.buildQuery((message, callback) => {
            this.client.clipboardWrite(message, callback);
        }, () => new clipboard_pb_1.default.ClipboardWriteRequest().setText(text), 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => { });
    }
}
exports.ClipboardClient = ClipboardClient;
