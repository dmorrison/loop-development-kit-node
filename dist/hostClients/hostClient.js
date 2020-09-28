"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broker_grpc_pb_1 = require("../grpc/broker_grpc_pb");
/**
 * HostClient classes are responsible for connecting to, and making requests to client services (storage, sending whispers, sensors).
 *
 * They handle the abstraction of the services provided by Helps and hide the implementation details of how the LDK communicates with Helps.
 *
 * @internal
 */
class HostClient {
    /**
     * Establish a connection to the host process.
     *
     * @async
     * @param connInfo - An object containing host process connection information.
     */
    connect(connInfo) {
        return new Promise((resolve, reject) => {
            let address;
            if (connInfo.network === 'unix') {
                address = `unix://${connInfo.address}`;
            }
            else {
                address = connInfo.address;
            }
            const ClientConstructor = this.generateClient();
            this.client = new ClientConstructor(address, broker_grpc_pb_1.grpc.credentials.createInsecure());
            // set a 5 second deadline
            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 5);
            this.client.waitForReady(deadline, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }
    /**
     * This convenience function returns a promise that resolves once the request has been completed and the response
     * converted to the desired output.
     *
     * @param clientRequest - A function that calls the client with the generated message and callback.
     * @param builder - The function that builds the message.
     * @param renderer - The function that renders the message.
     */
    buildQuery(clientRequest, builder, renderer) {
        return new Promise((resolve, reject) => {
            const message = builder();
            const callback = (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(renderer(response));
            };
            clientRequest(message, callback);
        });
    }
    get client() {
        if (this._client === undefined) {
            throw new Error('Accessing client before connected');
        }
        return this._client;
    }
    set client(client) {
        this._client = client;
    }
}
exports.default = HostClient;
