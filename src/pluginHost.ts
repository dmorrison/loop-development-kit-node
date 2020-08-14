export interface PluginHost {
  /**
   * @param key - Key of the item to delete from storage.
   * @return Promise that resolves when the deletion completes.
   */
  storageDelete(key: string): Promise<void>;

  /**
   * @returns Promise that resolves when all the values are deleted from storage.
   */
  storageDeleteAll(): Promise<void>;

  /**
   * @param key - Key to check for presence.
   * @return Promise resolve with whether the storage has the key (true) or not (false).
   */
  storageHasKey(key: string): Promise<boolean>;

  /**
   * @return An array of all the keys currently present in storage.
   */
  storageKeys(): Promise<string[]>;

  /**
   * Reads the value from storage and returns it in a promise.
   * @param key - Key to read from storage.
   * @return Resolves with the value of the key.
   */
  storageRead(key: string): Promise<string>;

  /**
   * Reads all keys in storage.
   * @return A promise resolving with an array of all the keys.
   */
  storageReadAll(): Promise<{ [index: string]: string }>;

  /**
   * Writes a value to storage.
   * @param key Key to write value to.
   * @param value The value being written.
   * @return Resolves when write is complete.
   */
  storageWrite(key: string, value: string): Promise<void>;
}
