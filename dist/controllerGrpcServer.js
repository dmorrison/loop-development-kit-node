"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');
const { categories } = require('./categories');
const BrokerGrpcServer = require('./brokerGrpcServer');
const Controller = require('./controller');
const ControllerGrpcHostClient = require('./controllerGrpcHostClient');
/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @private
 */
class ControllerGrpcServer {
    /**
     * Create a ControllerGrpcServer.
     *
     * @param {object} server - The GRPC server instance.
     * @param {Controller} impl - The controller implementation.
     * @param {BrokerGrpcServer} broker - The GRPC broker server instance.
     * @example
     * ControllerGrpcServer(server, myController, broker);
     */
    constructor(server, impl, broker) {
        this.broker = broker;
        server.addService(services.ControllerService, {
            start: this.start(impl),
            stop: this.stop(impl),
            onEvent: this.onEvent(impl),
        });
    }
    /**
     * Called by the host to start the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    start(impl) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            // TODO: Figure out why I don't need this
            // const host = call.request.getHost();
            const connInfo = yield this.broker.getConnInfo();
            const hostClient = new ControllerGrpcHostClient();
            yield hostClient.connect(connInfo).catch((err) => {
                throw err;
            });
            yield impl.start(hostClient);
            const response = new messages.Empty();
            callback(null, response);
        });
    }
    /**
     * Called by the host to stop the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    stop(impl) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            yield impl.stop();
            const response = new messages.Empty();
            callback(null, response);
        });
    }
    /**
     * Called by the host to broadcast events to the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    onEvent(impl) {
        return ({ request }, callback) => __awaiter(this, void 0, void 0, function* () {
            const event = {
                data: request.getDataMap().toObject().reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {}),
                source: {
                    id: request.getSource().getId(),
                    category: categories[request.getSource().getCategory()],
                    name: request.getSource().getName(),
                    author: request.getSource().getAuthor(),
                    organization: request.getSource().getOrganization(),
                    version: request.getSource().getVersion(),
                },
            };
            yield impl.onEvent(event);
            const response = new messages.Empty();
            callback(null, response);
        });
    }
}
module.exports = ControllerGrpcServer;
