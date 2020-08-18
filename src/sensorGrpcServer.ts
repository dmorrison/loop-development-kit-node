import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/ldk_pb';
import services, { grpc } from './proto/ldk_grpc_pb';
import { categories } from './categories';
import SensorGrpcHostClient from './sensorGrpcHostClient';
import { Sensor } from './sensor';

/**
 * Class used by the host process to interact with the sensor implementation.
 *
 * @internal
 */
class SensorGRPCServer {
  private broker: BrokerGrpcServer;

  /**
   * Create a SensorGRPCServer.
   *
   * @param server - The GRPC server instance.
   * @param impl - The sensor implementation.
   * @param broker - The GRPC broker server instance.
   * @example
   * ```
   * new SensorGRPCServer(server, mySensor, broker);
   * ```
   */
  constructor(
    server: services.grpc.Server,
    impl: Sensor,
    broker: BrokerGrpcServer,
  ) {
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
   * @param impl - The implementation of the sensor.
   */
  start(
    impl: Sensor,
  ): grpc.handleUnaryCall<messages.StartRequest, messages.Empty> {
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
   * @param impl - The implementation of the sensor.
   */
  stop(impl: Sensor): grpc.handleUnaryCall<messages.Empty, messages.Empty> {
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
   * @param impl - The implementation of the sensor.
   * @returns
   */
  onEvent(
    impl: Sensor,
  ): grpc.handleUnaryCall<messages.OnEventRequest, messages.Empty> {
    return async ({ request }, callback) => {
      const source = request?.getSource();
      if (request && source) {
        const event = {
          data: request
            .getDataMap()
            .toObject()
            .reduce((acc: { [index: string]: string }, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {}),
          source: {
            id: source.getId(),
            category: categories[source.getCategory()],
            name: source.getName(),
            author: source.getAuthor(),
            organization: source.getOrganization(),
            version: source.getVersion(),
          },
        };
        await impl.onEvent(event);
      }

      const response = new messages.Empty();
      callback(null, response);
    };
  }
}

export default SensorGRPCServer;
