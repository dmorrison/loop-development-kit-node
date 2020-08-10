/** @module sensorPlugin */

import services from './proto/ldk_grpc_pb';
import { prepareLogging } from './logging';
import BrokerGrpcServer from './brokerGrpcServer';
import { HealthGrpcServer, HealthService } from './healthGrpcServer';
import SensorGRPCServer from './sensorGrpcServer';
import { StdioGrpcServer, StdioService } from './stdioGrpcServer';
import { Sensor } from './sensor';

/** Class used to setup the GRPC server and host the sensor service. */
class SensorPlugin {
  private server: services.grpc.Server;

  private sensor: SensorGRPCServer;

  private broker: BrokerGrpcServer;

  /**
   * Create a SensorPlugin.
   *
   * @param {Sensor} impl - The implementation of the sensor.
   * @example
   * SensorPlugin(mySensor);
   */
  constructor(impl: Sensor) {
    this.server = new services.grpc.Server();
    this.broker = new BrokerGrpcServer(this.server);
    this.server.addService(HealthService, new HealthGrpcServer() as any);
    this.server.addService(StdioService, new StdioGrpcServer() as any);
    this.sensor = new SensorGRPCServer(this.server, impl, this.broker);
  }

  /**
   * Run the GRPC server and write connection information to stdout.
   *
   * @async
   * @returns {void}
   */
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
        },
      );
    });
  }
}

export default SensorPlugin;
