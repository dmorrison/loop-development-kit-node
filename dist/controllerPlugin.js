"use strict";
/** @module controllerPlugin */
const services = require('./proto/ldk_grpc_pb');
const { prepareLogging } = require('./logging');
const BrokerGrpcServer = require('./brokerGrpcServer');
const ControllerGrpcServer = require('./controllerGrpcServer');
const { HealthGrpcServer, HealthService, } = require('./healthGrpcServer');
const { StdioGrpcServer, StdioService, } = require('./stdioGrpcServer');
const Controller = require('./controller');
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
        this.server = new services.grpc.Server();
        this.broker = new BrokerGrpcServer(this.server);
        this.server.addService(HealthService, new HealthGrpcServer());
        this.server.addService(StdioService, new StdioGrpcServer());
        this.controller = new ControllerGrpcServer(this.server, impl, this.broker);
    }
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @async
     * @returns {void}
     */
    serve() {
        return new Promise((resolve, reject) => {
            this.server.bindAsync('127.0.0.1:0', services.grpc.ServerCredentials.createInsecure(), (err, port) => {
                if (err) {
                    reject(err);
                }
                this.server.start();
                process.stdout.write(`1|1|tcp|127.0.0.1:${port}|grpc\n`);
                prepareLogging();
                resolve();
            });
        });
    }
}
module.exports = ControllerPlugin;
