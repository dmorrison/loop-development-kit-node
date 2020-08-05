const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');
const { categories } = require('./categories');

const SensorGrpcHostClient = require('./sensorGrpcHostClient');

/**
 * @typedef sensorImplementation
 * @type {object}
 * @property {Function} start - Executed when the host starts the plugin.
 * The plugin should not do anything before this is called.
 * @param {SensorGrpcHostClient} host
 * @property {Function} stop - Executed by the host to stop the plugin.
 * All plugin activity should stop when this is called.
 * @property {Function} onEvent - The host will send events to the plugin by calling this function.
 * @param {event} event
 */

/** Class used by the host process to interact with the sensor implementation. */
class SensorGRPCServer {
  /**
   * Create a SensorGRPCServer.
   *
   * @param {object} server - The GRPC server instance.
   * @param {sensorImplementation} impl - The sensor implementation.
   * @param {BrokerGrpcServer} broker - The GRPC broker server instance.
   * @example
   * SensorGRPCServer(server, mySensor, broker);
   */
  constructor(server, impl, broker) {
    this.broker = broker;
    server.addService(services.SensorService, {
      start: this.start(impl),
      stop: this.stop(impl),
      onEvent: this.onEvent(impl),
    });
  }

  /**
   * Called by the host to start the sensor implementation.
   *
   * @async
   * @param {sensorImplementation} impl - The implementation of the sensor.
   * @returns {void}
   */
  start(impl) {
    return async (call, callback) => {
      // TODO: Figure out why I don't need this
      // const host = call.request.getHost();

      const connInfo = await this.broker.getConnInfo();

      const hostClient = new SensorGrpcHostClient();
      await hostClient.connect(connInfo).catch((err) => {
        throw err;
      });
      await impl.start(hostClient);

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  /**
   * Called by the host to stop the sensor implementation.
   *
   * @async
   * @param {sensorImplementation} impl - The implementation of the sensor.
   * @returns {void}
   */
  stop(impl) {
    return async (call, callback) => {
      await impl.stop();

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  /**
   * Called by the host to broadcast events to the sensor implementation.
   *
   * @async
   * @param {sensorImplementation} impl - The implementation of the sensor.
   * @returns {void}
   */
  onEvent(impl) {
    return async ({ request }, callback) => {
      const event = {
        data: request.getDataMap().toObject().reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {}),
        source: {
          id: request.getSource().getId(),
          category: categories[request.getSource().getCategory()],
          name: request.getSource().getName(),
          author: request.getSource().getAuthor(),
          organization: request.getSource().getOrganization(),
          version: request.getSource().getVersion(),
        },
      };

      await impl.onEvent(event);

      const response = new messages.Empty();
      callback(null, response);
    };
  }
}

module.exports = SensorGRPCServer;
