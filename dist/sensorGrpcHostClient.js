"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldk_pb_1 = __importDefault(require("./proto/ldk_pb"));
const ldk_grpc_pb_1 = require("./proto/ldk_grpc_pb");
const grpcHostClient_1 = __importDefault(require("./grpcHostClient"));
/**
 * Class used by the sensor implementation to interact with the host process.
 *
 * @internal
 */
class SensorGrpcHostClient extends grpcHostClient_1.default {
    /**
     * Send an event to the host process.
     *
     * @param event - An object containing host process connection information.
     */
    emitEvent(event) {
        return new Promise((resolve, reject) => {
            const request = new ldk_pb_1.default.EmitEventRequest();
            Object.entries(event.data).forEach(([key, value]) => {
                request.getDataMap().set(key, JSON.stringify(value));
            });
            this.client.emitEvent(request, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    generateClient(address) {
        return new ldk_grpc_pb_1.SensorHostClient(address, ldk_grpc_pb_1.grpc.credentials.createInsecure());
    }
}
exports.default = SensorGrpcHostClient;
