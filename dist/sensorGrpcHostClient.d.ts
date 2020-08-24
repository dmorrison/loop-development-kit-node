/** @module sensorGrpcHostClient */
import { ConnInfo } from './proto/broker_pb';
import { PluginEvent } from './pluginEvent';
import { SensorHost } from './sensorHost';
/**
 * Class used by the sensor implementation to interact with the host process.
 *
 * @internal
 */
declare class SensorGrpcHostClient implements SensorHost {
    private _client;
    /**
     * Establish a connection to the host process.
     *
     * @async
     * @param connInfo - An object containing host process connection information.
     * @returns Promise resolves when the connection is established.
     */
    connect(connInfo: ConnInfo.AsObject): Promise<void>;
    /**
     * Send an event to the host process.
     *
     * @param event - An object containing host process connection information.
     */
    emitEvent(event: PluginEvent): Promise<void>;
    /**
     * Delete a key from storage.
     *
     * @param key - The name of the key in storage.
     */
    storageDelete(key: string): Promise<void>;
    /**
     * Delete all keys from storage.
     */
    storageDeleteAll(): Promise<void>;
    /**
     * Check if a key has a value defined in storage.
     *
     * @param key - The name of the key in storage.
     * @returns Resolves with true if the key has a defined value.
     */
    storageHasKey(key: string): Promise<boolean>;
    /**
     * Return a list of all keys.
     *
     * @async
     * @returns {string[]} - An array of the keys.
     */
    storageKeys(): Promise<string[]>;
    /**
     * Get the value of a key in storage.
     *
     * @param key - The name of the key in storage.
     * @returns Returns the value of the key in storage.
     */
    storageRead(key: string): Promise<string>;
    /**
     * Get an object of key value pairs in storage.
     *
     * @returns Returns the storage object. Each key in the object
     * is a key in storage and the value of the key is the value in storage.
     */
    storageReadAll(): Promise<{
        [index: string]: string;
    }>;
    /**
     * Get the value of a key in storage.
     *
     * @param key - The name of the key in storage.
     * @param value - The value to assign to the key in storage.
     */
    storageWrite(key: string, value: string): Promise<void>;
    private get client();
    private set client(value);
}
export default SensorGrpcHostClient;
