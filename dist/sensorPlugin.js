"use strict";
/** @module sensorPlugin */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldk_grpc_pb_1 = __importDefault(require("./proto/ldk_grpc_pb"));
const logging_1 = require("./logging");
const brokerGrpcServer_1 = __importDefault(require("./brokerGrpcServer"));
const healthGrpcServer_1 = require("./healthGrpcServer");
const sensorGrpcServer_1 = __importDefault(require("./sensorGrpcServer"));
const stdioGrpcServer_1 = require("./stdioGrpcServer");
/** Class used to setup the GRPC server and host the sensor service. */
class SensorPlugin {
    /**
     * Create a SensorPlugin.
     *
     * @param impl - The implementation of the sensor.
     * ```
     * new SensorPlugin(mySensor);
     * ```
     */
    constructor(impl) {
        this.server = new ldk_grpc_pb_1.default.grpc.Server();
        this.broker = new brokerGrpcServer_1.default(this.server);
        /* eslint-disable @typescript-eslint/no-explicit-any */
        // services.grpc.Server expects UntypedServiceImplementation,
        this.server.addService(healthGrpcServer_1.HealthService, new healthGrpcServer_1.HealthGrpcServer());
        this.server.addService(stdioGrpcServer_1.StdioService, new stdioGrpcServer_1.StdioGrpcServer());
        /* eslint-enable @typescript-eslint/no-explicit-any */
        this.sensor = new sensorGrpcServer_1.default(this.server, impl, this.broker);
    }
    /**
     * Run the GRPC server and write connection information to stdout.
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
exports.default = SensorPlugin;
