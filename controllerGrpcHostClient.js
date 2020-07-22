const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

class ControllerGrpcHostClient {
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

      this.client.waitForReady(deadline, (err, value) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(value);
      });
    });
  }

  emitWhisper(whisper) {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitWhisperRequest();

      const style = new messages.Style();
      if (whisper.style) {
        style.setBackgroundcolor(whisper.style.backgroundColor || "#fff");
        style.setPrimarycolor(whisper.style.primaryColor || "#666");
        style.setHighlightcolor(whisper.style.highlightColor || "#651fff");
      } else {
        style.setBackgroundcolor("#fff");
        style.setPrimarycolor("#666");
        style.setHighlightcolor("#651fff");
      }

      const whisperMsg = new messages.Whisper();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);

      this.client.emitWhisper(request, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
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

module.exports = ControllerGrpcHostClient;
