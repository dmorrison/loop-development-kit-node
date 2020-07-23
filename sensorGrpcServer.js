const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

const SensorGrpcHostClient = require('./sensorGrpcHostClient');

const categories = ['Unknown', 'Intelligence', 'Controller', 'Sensor', 'Sidekick'];

class SensorGRPCServer {
  constructor(server, impl, broker) {
    this.broker = broker;
    server.addService(services.SensorService, {
      start: this.start(impl),
      stop: this.stop(impl),
      config: this.config(impl),
      setConfig: this.setConfig(impl),
      onEvent: this.onEvent(impl),
    });
  }

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

  stop(impl) {
    return async (call, callback) => {
      await impl.stop();

      const response = new messages.Empty();
      callback(null, response);
    };
  }

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
