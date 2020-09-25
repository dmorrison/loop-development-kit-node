"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            this.client = this.generateClient(address);
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
