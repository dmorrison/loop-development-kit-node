"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @module controllerPlugin */
const controllerGrpcServer_1 = __importDefault(require("./controllerGrpcServer"));
const brokerGrpcServer_1 = __importDefault(require("./brokerGrpcServer"));
const ldk_grpc_pb_1 = __importDefault(require("./proto/ldk_grpc_pb"));
const logging_1 = require("./logging");
const healthGrpcServer_1 = require("./healthGrpcServer");
const stdioGrpcServer_1 = require("./stdioGrpcServer");
/** Class used to setup the GRPC server and host the controller service. */
class ControllerPlugin {
    /**
     * Create a ControllerPlugin.
     *
     * @param {Controller} impl - The implementation of the controller.
     * @example
     * ControllerPlugin(myController);
     */
    constructor(impl) {
        this.server = new ldk_grpc_pb_1.default.grpc.Server();
        this.broker = new brokerGrpcServer_1.default(this.server);
        this.server.addService(healthGrpcServer_1.HealthService, new healthGrpcServer_1.HealthGrpcServer());
        this.server.addService(stdioGrpcServer_1.StdioService, new stdioGrpcServer_1.StdioGrpcServer());
        this.controller = new controllerGrpcServer_1.default(this.server, impl, this.broker);
    }
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @async
     * @returns {void}
     */
    serve() {
        return new Promise((resolve, reject) => {
            this.server.bindAsync('127.0.0.1:0', ldk_grpc_pb_1.default.grpc.ServerCredentials.createInsecure(), (err, port) => {
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
exports.default = ControllerPlugin;
