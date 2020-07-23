const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

class SensorGrpcHostClient {
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

  storageDelete(key) {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject("key is required");
        return;
      }

      const request = new messages.StorageDeleteRequest();
      request.setKey(key);

      this.client.storageDelete(request, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  storageDeleteAll() {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

      this.client.storageDeleteAll(request, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  storageHasKey(key) {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject("key is required");
        return;
      }

      const request = new messages.StorageHasKeyRequest();
      request.setKey(key);

      this.client.storageDelete(request, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        const hasKey = response.getHaskey();
        resolve(hasKey);
      });
    });
  }

  storageKeys() {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

      this.client.storageKeys(request, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        const keys = response.getKeysList();
        resolve(keys);
      });
    });
  }

  storageRead(key) {
    return new Promise((resolve, reject) => {
      const request = new messages.StorageReadRequest();

      request.setKey(key);

      this.client.storageRead(request, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        const value = response.getValue();
        resolve(value);
      });
    });
  }

  storageReadAll() {
    return new Promise((resolve, reject) => {
      const request = new messages.Empty();

      this.client.storageReadAll(request, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        const entries = request.getEntriesMap().toObject().reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

        resolve(entries);
      });
    });
  }

  storageWrite(key, value) {
    return new Promise((resolve, reject) => {
      const request = new messages.StorageWriteRequest();

      request.setKey(key);
      request.setValue(value);

      this.client.storageWrite(request, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = SensorGrpcHostClient;
