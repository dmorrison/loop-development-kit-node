const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

const errMissingRequiredKey = new Error('key is required');
const errMissingRequiredValue = new Error('value is required');

/**
 * @typedef connInfo
 * @type {object}
 * @property {string} address - The server or socket address.
 * @property {string} serviceId - An identifier for the service.
 * @property {string} network - The network type.
 */

/**
 * @typedef style
 * @type {object}
 * @property {string} backgroundColor - The background color of the whisper card.
 * @property {string} highlightColor - The color of important text in the whisper card.
 * @property {string} primaryColor - The color of normal text in the whisper card.
 */

/**
 * @typedef event
 * @type {object}
 * @property {object} data - The content of the event.
 * @example
 * {
 *   data: {
 *     text: "this is an example event with just a text field"
 *   },
 * }
 * @example
 * {
 *   data: {
 *     x: 100,
 *     y: 525,
 *   },
 * }
 * @example
 * {
 *   data: {
 *     process: "chrome.exe",
 *   },
 * }
 */

/** Class used by the sensor implementation to interact with the host process. */
class SensorGrpcHostClient {
  /**
   * Establish a connection to the host process.
   *
   * @param {connInfo} connInfo - An object containing host process connection information.
   * @returns {Promise.<void>} - Promise resolves when the connection is established.
   */
  connect(connInfo) {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
        address = connInfo.address;
      }

      this.client = new services.SensorHostClient(
        address,
        services.grpc.credentials.createInsecure()
      );

      // set a 5 second deadline
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      this.client.waitForReady(deadline, (err, value) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(value);
      });
    });
  }

  /**
   * Send an event to the host process.
   *
   * @param {event} event - An object containing host process connection information.
   * @returns {Promise.<void>}
   * - Promise resolves after the host confirms having received the whisper.
   */
  emitEvent(event) {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitEventRequest();

      Object.entries(event.data)
        .forEach(([key, value]) => {
          request.getDataMap().set(key, JSON.stringify(value));
        });

      this.client.emitEvent(request, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  /**
   * Delete a key from storage.
   *
   * @param {string} key - The name of the key in storage.
   * @returns {Promise.<void>}
   * - Promise resolves after the host confirms the key was deleted.
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
   * @returns {Promise.<void>}
   * - Promise resolves after the host confirms all keys have been deleted.
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
   * @param {string} key - The name of the key in storage.
   * @returns {Promise.<boolean>} - Promise resolves to true if the key has a defined value.
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
   * @returns {Promise.<string[]>} - Promise resolves to an array of keys.
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
   * @param {string} key - The name of the key in storage.
   * @returns {Promise.<string>} - Promise resolves to the value of the key.
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
   * @returns {Promise.<object>} - Promise resolves to an object of key value pairs.
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
   * @param {string} key - The name of the key in storage.
   * @param {string} value - The value to assign to the key in storage.
   * @returns {Promise.<void>}
   * - Promise resolves after the host confirms the value was written to the key.
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

module.exports = SensorGrpcHostClient;
