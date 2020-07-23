const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

const ControllerGrpcHostClient = require('./controllerGrpcHostClient');

const categories = ['Unknown', 'Intelligence', 'Controller', 'Sensor', 'Sidekick'];

class ControllerGrpcServer {
  constructor(server, impl, broker) {
    this.broker = broker;
    server.addService(services.ControllerService, {
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

      const hostClient = new ControllerGrpcHostClient();
      await hostClient.connect(connInfo).catch((err) => {
        throw err;
      });
      impl.start(hostClient);

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  stop(impl) {
    return (call, callback) => {
      impl.stop();

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  config(impl) {
    return (call, callback) => {
      const response = new messages.ConfigResponse();

      const configData = impl.config();

      Object.entries(configData)
        .forEach(([key, value]) => {
          response.getConfigMap().set(key, JSON.stringify(value));
        });

      callback(null, response);
    };
  }

  setConfig(impl) {
    return ({ request }, callback) => {
      const configData = request.getConfigMap().toObject().reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

      impl.setConfig(configData);

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  onEvent(impl) {
    return ({ request }, callback) => {
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

      impl.onEvent(event);

      const response = new messages.Empty();
      callback(null, response);
    };
  }
}

module.exports = ControllerGrpcServer;
