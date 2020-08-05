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
 * @typedef whisper
 * @type {object}
 * @property {string} markdown - The content of the whisper in markdown.
 * @property {style} style - An object for specifying the styling of the whisper card.
 * @property {string} label - The title displayed at the top of the whisper card.
 * @property {string} icon - An icon displayed at the top of the whisper card.
 */

/** Class used by the controller implementation to interact with the host process. */
class ControllerGrpcHostClient {
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

      this.client = new services.ControllerHostClient(
        address,
        services.grpc.credentials.createInsecure()
      );

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
   * Send a whisper to the host process.
   *
   * @param {whisper} whisper - An object defining the contents of the whisper.
   * @returns {Promise.<void>}
   * - Promise resolves after the host confirms having received the whisper.
   */
  emitWhisper(whisper) {
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

module.exports = ControllerGrpcHostClient;
