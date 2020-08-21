import * as grpc from '@grpc/grpc-js';
import { Deadline } from '@grpc/grpc-js';
import { ConnInfo } from './proto/broker_pb';
import messages from './proto/ldk_pb';
import * as Messages from './proto/ldk_pb';

const errMissingRequiredKey = new Error('key is required');
const errMissingRequiredValue = new Error('value is required');

type Request<TRequestType = Messages.Empty, TResponseType = Messages.Empty> = (
  request: TRequestType,
  callback: (error: grpc.ServiceError | null, response: TResponseType) => void,
) => void;

/**
 * @internal
 */
export interface CommonHostServer {
  waitForReady(deadline: Deadline, callback: (error?: Error) => void): void;
  storageDelete: Request<Messages.StorageDeleteRequest>;
  storageDeleteAll: Request;
  storageHasKey: Request<
    Messages.StorageHasKeyRequest,
    Messages.StorageHasKeyResponse
  >;
  storageKeys: Request<Messages.Empty, Messages.StorageKeysResponse>;
  storageRead: Request<
    Messages.StorageReadRequest,
    Messages.StorageReadResponse
  >;
  storageReadAll: Request<Messages.Empty, Messages.StorageReadAllResponse>;
  storageWrite: Request<Messages.StorageWriteRequest>;
}

/**
 * @internal
 */
export default abstract class GrpcHostClient<TClient extends CommonHostServer> {
  private _client: TClient | undefined;

  protected abstract generateClient(address: string): TClient;

  /**
   * Establish a connection to the host process.
   *
   * @async
   * @param connInfo - An object containing host process connection information.
   */
  connect(connInfo: ConnInfo.AsObject): Promise<void> {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
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
  storageDelete(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject(errMissingRequiredKey);
        return;
      }

      const request = new messages.StorageDeleteRequest();
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
  storageDeleteAll(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

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
  storageHasKey(key: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject(errMissingRequiredKey);
        return;
      }

      const request = new messages.StorageHasKeyRequest();
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
  storageKeys(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

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
  storageRead(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject(errMissingRequiredKey);
        return;
      }

      const request = new messages.StorageReadRequest();
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
   * @returns {object} - Returns the storage object. Each key in the object
   * is a key in storage and the value of the key is the value in storage.
   */
  storageReadAll(): Promise<{ [index: string]: string }> {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

      this.client.storageReadAll(request, (err, response) => {
        if (err) {
          return reject(err);
        }
        const entries = response
          .getEntriesMap()
          .toObject()
          .reduce((acc: { [index: string]: string }, [key, value]) => {
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
  storageWrite(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject(errMissingRequiredKey);
        return;
      }
      if (!value) {
        reject(errMissingRequiredValue);
        return;
      }

      const request = new messages.StorageWriteRequest();
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

  protected get client(): TClient {
    if (this._client === undefined) {
      throw new Error('Accessing client before connected');
    }
    return this._client;
  }

  protected set client(client: TClient) {
    this._client = client;
  }
}
