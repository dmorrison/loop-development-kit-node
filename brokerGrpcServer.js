// const messages = require('./proto/broker_pb');
const services = require('./proto/broker_grpc_pb');

class BrokerGrpcServer {
  constructor(server) {
    let connInfoCallback;
    this.connInfoPromise = new Promise((resolve) => {
      connInfoCallback = (connInfo) => {
        resolve(connInfo);
      };
    });

    server.addService(services.GRPCBrokerService, {
      startStream: this.startStream(connInfoCallback),
    });
  }

  startStream(connInfoCallback) {
    return (call) => {
      call.on('data', (msg) => {
        const connInfo = {
          address: msg.getAddress(),
          serviceId: msg.getServiceId(),
          network: msg.getNetwork(),
        };
        connInfoCallback(connInfo);
      });
      call.on('end', () => {
        call.end();
      });
    };
  }

  getConnInfo() {
    return this.connInfoPromise;
  }
}

module.exports = BrokerGrpcServer;
