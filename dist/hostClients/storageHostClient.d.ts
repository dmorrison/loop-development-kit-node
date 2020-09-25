import HostClient, { GRPCClientConstructor } from './hostClient';
import { StorageClient } from '../proto/storage_grpc_pb';
import { StorageHost } from './storageHost';
export default class StorageHostClient extends HostClient<StorageClient> implements StorageHost {
    /**
     * Delete a key from storage.
     *
     * @async
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
     * @async
     * @param key - The name of the key in storage.
     * @returns Returns true if the key has a defined value.
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
     * @returns Promise resolving with the value of the key in storage.
     */
    storageRead(key: string): Promise<string>;
    /**
     * Get an object of key value pairs in storage.
     *
     * @async
     * @returns Returns the storage object. Each key in the object
     * is a key in storage and the value of the key is the value in storage.
     */
    storageReadAll(): Promise<{
        [index: string]: string;
    }>;
    /**
     * Get the value of a key in storage.
     *
     * @async
     * @param key - The name of the key in storage.
     * @param value - The value to assign to the key in storage.
     */
    storageWrite(key: string, value: string): Promise<void>;
    protected generateClient(): GRPCClientConstructor<StorageClient>;
}
