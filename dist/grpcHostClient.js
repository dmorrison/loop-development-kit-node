"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldk_pb_1 = __importDefault(require("./proto/ldk_pb"));
const errMissingRequiredKey = new Error('key is required');
const errMissingRequiredValue = new Error('value is required');
/**
 * @internal
 */
class GrpcHostClient {
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
    /**
     * Delete a key from storage.
     *
     * @async
     * @param key - The name of the key in storage.
     */
    storageDelete(key) {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject(errMissingRequiredKey);
                return;
            }
            const request = new ldk_pb_1.default.StorageDeleteRequest();
            request.setKey(key);
            this.client.storageDelete(request, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }
    /**
     * Delete all keys from storage.
     */
    storageDeleteAll() {
        return new Promise((resolve, reject) => {
            const request = new ldk_pb_1.default.Empty();
            this.client.storageDeleteAll(request, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }
    /**
     * Check if a key has a value defined in storage.
     *
     * @async
     * @param key - The name of the key in storage.
     * @returns Returns true if the key has a defined value.
     */
    storageHasKey(key) {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject(errMissingRequiredKey);
                return;
            }
            const request = new ldk_pb_1.default.StorageHasKeyRequest();
            request.setKey(key);
            this.client.storageHasKey(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                const hasKey = response.getHaskey();
                return resolve(hasKey);
            });
        });
    }
    /**
     * Return a list of all keys.
     *
     * @async
     * @returns {string[]} - An array of the keys.
     */
    storageKeys() {
        return new Promise((resolve, reject) => {
            const request = new ldk_pb_1.default.Empty();
            this.client.storageKeys(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                const keys = response.getKeysList();
                return resolve(keys);
            });
        });
    }
    /**
     * Get the value of a key in storage.
     *
     * @param key - The name of the key in storage.
     * @returns Promise resolving with the value of the key in storage.
     */
    storageRead(key) {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject(errMissingRequiredKey);
                return;
            }
            const request = new ldk_pb_1.default.StorageReadRequest();
            request.setKey(key);
            this.client.storageRead(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                const value = response.getValue();
                return resolve(value);
            });
        });
    }
    /**
     * Get an object of key value pairs in storage.
     *
     * @async
     * @returns Returns the storage object. Each key in the object
     * is a key in storage and the value of the key is the value in storage.
     */
    storageReadAll() {
        return new Promise((resolve, reject) => {
            const request = new ldk_pb_1.default.Empty();
            this.client.storageReadAll(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                const entries = response
                    .getEntriesMap()
                    .toObject()
                    .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
                return resolve(entries);
            });
        });
    }
    /**
     * Get the value of a key in storage.
     *
     * @async
     * @param key - The name of the key in storage.
     * @param value - The value to assign to the key in storage.
     */
    storageWrite(key, value) {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject(errMissingRequiredKey);
                return;
            }
            if (!value) {
                reject(errMissingRequiredValue);
                return;
            }
            const request = new ldk_pb_1.default.StorageWriteRequest();
            request.setKey(key);
            request.setValue(value);
            this.client.storageWrite(request, (err) => {
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
exports.default = GrpcHostClient;
