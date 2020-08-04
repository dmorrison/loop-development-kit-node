const services = require('./proto/ldk_grpc_pb');

const ControllerGRPCServer = require('./controllerGrpcServer');
const BrokerGrpcServer = require('./brokerGrpcServer');
const {
  HealthGrpcServer,
  HealthService,
} = require('./healthGrpcServer');

class ControllerPlugin {
  constructor(impl) {
    this.server = new services.grpc.Server();
    this.broker = new BrokerGrpcServer(this.server);
    this.server.addService(HealthService, new HealthGrpcServer());
    this.controller = new ControllerGRPCServer(this.server, impl, this.broker);
  }

  serve() {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        '127.0.0.1:0',
        services.grpc.ServerCredentials.createInsecure(),
        (err, port) => {
          if (err) {
            reject(err);
          }
          this.server.start();
          process.stdout.write(`1|1|tcp|127.0.0.1:${port}|grpc\n`);
          resolve();
        }
      );
    });
  }
}

module.exports = ControllerPlugin;
