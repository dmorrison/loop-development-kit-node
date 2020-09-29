"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverClient = void 0;
const GRPCClient_1 = __importDefault(require("./GRPCClient"));
const hover_grpc_pb_1 = require("../grpc/hover_grpc_pb");
const hover_pb_1 = __importDefault(require("../grpc/hover_pb"));
const transformingStream_1 = require("./transformingStream");
/**
 * @param request
 * @param message
 */
function updateRequest(request, message) {
    return message
        .setXfromcenter(request.xFromCenter)
        .setYfromcenter(request.yFromCenter);
}
class HoverClient extends GRPCClient_1.default {
    generateClient() {
        return hover_grpc_pb_1.HoverClient;
    }
    queryHover(params) {
        return this.buildQuery((message, callback) => {
            this.client.hoverRead(message, callback);
        }, () => updateRequest(params, new hover_pb_1.default.HoverReadRequest()), (response) => ({ text: response.getText() }));
    }
    streamHover(params, listener) {
        const message = updateRequest(params, new hover_pb_1.default.HoverReadStreamRequest());
        return new transformingStream_1.TransformingStream(this.client.hoverReadStream(message), (response) => ({ text: response.getText() }), listener);
    }
}
exports.HoverClient = HoverClient;
