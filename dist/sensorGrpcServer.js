"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldk_grpc_pb_1 = __importDefault(require("./proto/ldk_grpc_pb"));
const sensorGrpcHostClient_1 = __importDefault(require("./sensorGrpcHostClient"));
const grpcServer_1 = __importDefault(require("./grpcServer"));
/**
 * Class used by the host process to interact with the sensor implementation.
 *
 * @internal
 */
class SensorGRPCServer extends grpcServer_1.default {
    /**
     * Create a SensorGRPCServer.
     *
     * @param server - The GRPC server instance.
     * @param impl - The sensor implementation.
     * @param broker - The GRPC broker server instance.
     * @example
     * ```
     * new SensorGRPCServer(server, mySensor, broker);
     * ```
     */
    constructor(server, impl, broker) {
        super(server, broker, impl, ldk_grpc_pb_1.default.SensorService);
    }
    createHost() {
        return new sensorGrpcHostClient_1.default();
    }
}
exports.default = SensorGRPCServer;
