"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brokerGrpcServer_1 = __importDefault(require("./brokerGrpcServer"));
const loop_grpc_pb_1 = __importDefault(require("./grpc/loop_grpc_pb"));
const logging_1 = require("./logging");
const healthGrpcServer_1 = require("./healthGrpcServer");
const stdioGrpcServer_1 = require("./stdioGrpcServer");
const grpcServer_1 = __importDefault(require("./grpcServer"));
/** Class used to setup the GRPC server and host the controller service. */
class Plugin {
    /**
     * Create a ControllerPlugin.
     *
     * @param impl - The implementation of the controller.
     * ```
     * new ControllerPlugin(myController);
     * ```
     */
    constructor(impl) {
        this.server = new loop_grpc_pb_1.default.grpc.Server();
        this.broker = new brokerGrpcServer_1.default(this.server);
        /* eslint-disable @typescript-eslint/no-explicit-any */
        this.server.addService(healthGrpcServer_1.HealthService, new healthGrpcServer_1.HealthGrpcServer());
        this.server.addService(stdioGrpcServer_1.StdioService, new stdioGrpcServer_1.StdioGrpcServer());
        /* eslint-enable @typescript-eslint/no-explicit-any */
        this.controller = new grpcServer_1.default(this.server, this.broker, impl);
    }
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @returns Promise resolving when the server starts.
     */
    serve() {
        return new Promise((resolve, reject) => {
            this.server.bindAsync('127.0.0.1:0', loop_grpc_pb_1.default.grpc.ServerCredentials.createInsecure(), (err, port) => {
                if (err) {
                    reject(err);
                }
                this.server.start();
                process.stdout.write(`1|1|tcp|127.0.0.1:${port}|grpc\n`);
                logging_1.prepareLogging();
                resolve();
            });
        });
    }
}
exports.default = Plugin;
