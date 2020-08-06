/** @module controllerGrpcHostClient */

import { Whisper } from './whisper';
import messages from './proto/ldk_pb';
import services from './proto/ldk_grpc_pb';

const errMissingRequiredKey = new Error('key is required');
const errMissingRequiredValue = new Error('value is required');

type Request<TRequest = any, TResponse = any> =
  (request: TRequest, callback: (error, response: TResponse) => void) => void;

interface ControllerHostClient {
  waitForReady: Request<Date>
  emitWhisper: Request;
  storageDeleteAll: Request;
  storageDelete: Request;
  storageHasKey: Request;
  storageKeys: Request;
  storageRead: Request;
  storageReadAll: Request;
  storageWrite: Request;
}

/**
 * Class used by the controller implementation to interact with the host process.
 */
class ControllerGrpcHostClient {
  private client: ControllerHostClient;

  /**
   * Establish a connection to the host process.
   *
   * @async
   * @param {connInfo} connInfo - An object containing host process connection information.
   * @returns {void}
   */
  connect(connInfo) {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
        address = connInfo.address;
      }

      this.client = new services.ControllerHostClient(
        address,
        services.grpc.credentials.createInsecure()
      ) as any;

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
   * Send a Whisper to the host process.
   *
   * @async
   * @param {Whisper} whisper - An object defining the contents of the Whisper.
   * @returns {void}
   */
  emitWhisper(whisper: Whisper) {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitWhisperRequest();

      const style = new messages.Style();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
        style.setPrimarycolor(whisper.style.primaryColor || '#666');
        style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
      } else {
        style.setBackgroundcolor('#fff');
        style.setPrimarycolor('#666');
        style.setHighlightcolor('#651fff');
      }

      const whisperMsg = new messages.Whisper();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);

      this.client.emitWhisper(request, (err) => {
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
   * @param {string} key - The name of the key in storage.
   * @returns {void}
   */
  storageDelete(key) {
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
   *
   * @async
   * @returns {void}
   */
  storageDeleteAll() {
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
   * @param {string} key - The name of the key in storage.
   * @returns {boolean} - Returns true if the key has a defined value.
   */
  storageHasKey(key) {
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
  storageKeys() {
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
   * @async
   * @param {string} key - The name of the key in storage.
   * @returns {string} - Returns the value of the key in storage.
   */
  storageRead(key) {
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
  storageReadAll() {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

      this.client.storageReadAll(request, (err, response) => {
        if (err) {
          return reject(err);
        }
        const entries = response.getEntriesMap().toObject().reduce((acc, [key, value]) => {
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
   * @param {string} key - The name of the key in storage.
   * @param {string} value - The value to assign to the key in storage.
   * @returns {void}
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
}

export default ControllerGrpcHostClient;
