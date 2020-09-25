import BrokerGrpcServer from './brokerGrpcServer';
import { Loop } from './loop';
import services from './grpc/loop_grpc_pb';
import { prepareLogging } from './logging';
import { HealthGrpcServer, HealthService } from './healthGrpcServer';
import { StdioGrpcServer, StdioService } from './stdioGrpcServer';
import GRPCServer from './grpcServer';

/** Class used to setup the GRPC server and host the controller service. */
class Plugin {
  private server: services.grpc.Server;

  private broker: BrokerGrpcServer;

  private controller: GRPCServer;

  /**
   * Create a ControllerPlugin.
   *
   * @param impl - The implementation of the controller.
   * ```
   * new ControllerPlugin(myController);
   * ```
   */
  constructor(impl: Loop) {
    this.server = new services.grpc.Server();
    this.broker = new BrokerGrpcServer(this.server);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    this.server.addService(HealthService, new HealthGrpcServer() as any);
    this.server.addService(StdioService, new StdioGrpcServer() as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */
    this.controller = new GRPCServer(this.server, this.broker, impl);
  }

  /**
   * Run the GRPC server and write connection information to stdout.
   *
   * @returns Promise resolving when the server starts.
   */
  serve(): Promise<void> {
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

export default Plugin;
