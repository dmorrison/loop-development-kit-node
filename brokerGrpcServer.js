const services = require('./proto/broker_grpc_pb');

/**
 * @typedef connInfo
 * @type {object}
 * @property {string} address - The server or socket address.
 * @property {string} serviceId - An identifier for the service.
 * @property {string} network - The network type.
 */

/** Class used to interact with the broker GRPC service. */
class BrokerGrpcServer {
  /**
   * Create a BrokerGrpcServer.
   *
   * @param {object} server - The GRPC server instance.
   * @example
   * BrokerGrpcServer(server);
   */
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

  /**
   * This callback is called when connection info is received from the parent process.
   *
   * @callback BrokerGrpcServer~connInfoCallback
   * @param {connInfo} connInfo
   */
  /**
   * Start a connection info stream from the parent process.
   *
   * @param {BrokerGrpcServer~connInfoCallback} connInfoCallback
   * - The callback that handles receiving connection info.
   * @returns {void}
   */
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

  /**
   * Returns a promise which resolves to the connection information for the parent process.
   *
   * @returns {Promise.<connInfo>} - Promise object represents connection information
   */
  getConnInfo() {
    return this.connInfoPromise;
  }
}

module.exports = BrokerGrpcServer;
