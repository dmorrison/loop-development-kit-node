import { Whisper } from './whisper';
import { ConnInfo } from './proto/broker_pb';
import { ControllerHost } from './controllerHost';
/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
declare class ControllerGrpcHostClient implements ControllerHost {
    private _client;
    /**
     * Establish a connection to the host process.
     *
     * @async
     * @param connInfo - An object containing host process connection information.
     */
    connect(connInfo: ConnInfo.AsObject): Promise<void>;
    /**
     * Send a Whisper to the host process.
     *
     * @async
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    emitWhisper(whisper: Whisper): Promise<Error | void>;
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
     * @returns {object} - Returns the storage object. Each key in the object
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
    private get client();
    private set client(value);
}
export default ControllerGrpcHostClient;
