"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const brokerGrpcServer_1 = __importDefault(require("./brokerGrpcServer"));
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
        this.server = new grpc.Server();
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
            this.server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (err, port) => {
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
