const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

class HarvesterGrpcHostClient {
  connect(connInfo) {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
        address = connInfo.address;
      }

      this.client = new services.HarvesterHostClient(
        address,
        services.grpc.credentials.createInsecure()
      );

      // set a 5 second deadline
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      this.client.waitForReady(deadline, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  }

  emitEvent(event) {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitEventRequest();

      Object.entries(event.data)
        .forEach(([key, value]) => {
          request.getDataMap().set(key, value);
        });

      this.client.emitEvent(request, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
}

module.exports = HarvesterGrpcHostClient;
