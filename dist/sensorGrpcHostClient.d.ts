/** @module sensorGrpcHostClient */
import { ConnInfo } from './proto/broker_pb';
/**
 * Class used by the sensor implementation to interact with the host process.
 */
declare class SensorGrpcHostClient {
    private client;
    /**
     * Establish a connection to the host process.
     *
     * @async
     * @param {ConnInfo.AsObject} connInfo - An object containing host process connection information.
     * @returns {Promise.<void>} - Promise resolves when the connection is established.
     */
    connect(connInfo: ConnInfo.AsObject): Promise<void>;
    /**
     * Send an event to the host process.
     *
     * @async
     * @param {event} event - An object containing host process connection information.
     * @returns {void}
     */
    emitEvent(event: any): Promise<unknown>;
    /**
     * Delete a key from storage.
     *
     * @async
     * @param {string} key - The name of the key in storage.
     * @returns {void}
     */
    storageDelete(key: any): Promise<unknown>;
    /**
     * Delete all keys from storage.
     *
     * @async
     * @returns {void}
     */
    storageDeleteAll(): Promise<unknown>;
    /**
     * Check if a key has a value defined in storage.
     *
     * @async
     * @param {string} key - The name of the key in storage.
     * @returns {boolean} - Returns true if the key has a defined value.
     */
    storageHasKey(key: any): Promise<unknown>;
    /**
     * Return a list of all keys.
     *
     * @async
     * @returns {string[]} - An array of the keys.
     */
    storageKeys(): Promise<unknown>;
    /**
     * Get the value of a key in storage.
     *
     * @async
     * @param {string} key - The name of the key in storage.
     * @returns {string} - Returns the value of the key in storage.
     */
    storageRead(key: any): Promise<unknown>;
    /**
     * Get an object of key value pairs in storage.
     *
     * @async
     * @returns {object} - Returns the storage object. Each key in the object
     * is a key in storage and the value of the key is the value in storage.
     */
    storageReadAll(): Promise<unknown>;
    /**
     * Get the value of a key in storage.
     *
     * @async
     * @param {string} key - The name of the key in storage.
     * @param {string} value - The value to assign to the key in storage.
     * @returns {void}
     */
    storageWrite(key: any, value: any): Promise<unknown>;
}
export default SensorGrpcHostClient;
