const services = require('./proto/ldk_grpc_pb');
const { prepareLogging } = require('./logging');

const SensorGRPCServer = require('./sensorGrpcServer');
const BrokerGrpcServer = require('./brokerGrpcServer');
const StdioGrpcServer = require('./stdioGrpcServer');

class SensorPlugin {
  constructor(impl) {
    this.server = new services.grpc.Server();
    this.broker = new BrokerGrpcServer(this.server);
    this.sensor = new SensorGRPCServer(this.server, impl, this.broker);
    this.stdio = new StdioGrpcServer(this.server);
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
          prepareLogging();
          resolve();
        }
      );
    });
  }
}

module.exports = SensorPlugin;
