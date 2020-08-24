"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllerGrpcHostClient_1 = __importDefault(require("./controllerGrpcHostClient"));
const ldk_grpc_pb_1 = __importDefault(require("./proto/ldk_grpc_pb"));
const grpcServer_1 = __importDefault(require("./grpcServer"));
/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @internal
 */
class ControllerGrpcServer extends grpcServer_1.default {
    constructor(server, impl, broker) {
        super(server, broker, impl, ldk_grpc_pb_1.default.ControllerService);
    }
    createHost() {
        return new controllerGrpcHostClient_1.default();
    }
}
exports.default = ControllerGrpcServer;
