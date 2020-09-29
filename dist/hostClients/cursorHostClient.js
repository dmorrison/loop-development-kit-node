"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorHostClient = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const GRPCClient_1 = __importDefault(require("./GRPCClient"));
const cursor_grpc_pb_1 = require("../grpc/cursor_grpc_pb");
const transformingStream_1 = require("./transformingStream");
const cursorTransformer = (message) => {
    return {
        screen: message.getScreen(),
        x: message.getX(),
        y: message.getY(),
    };
};
class CursorHostClient extends GRPCClient_1.default {
    generateClient() {
        return cursor_grpc_pb_1.CursorClient;
    }
    queryCursorPosition() {
        return this.buildQuery((message, callback) => this.client.cursorPosition(message, callback), () => new empty_pb_1.Empty(), cursorTransformer);
    }
    streamCursorPosition(listener) {
        return new transformingStream_1.TransformingStream(this.client.cursorPositionStream(new empty_pb_1.Empty()), cursorTransformer, listener);
    }
}
exports.CursorHostClient = CursorHostClient;
