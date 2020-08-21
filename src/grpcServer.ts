import { ServiceDefinition } from '@grpc/grpc-js';
import services, { grpc } from './proto/ldk_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/ldk_pb';
import { categories } from './categories';
import { LoopPlugin } from './loopPlugin';
import {CommonHostClient} from "./commonHostClient";

/**
 * @internal
 */
export default abstract class GRPCServer<
  THostClient extends CommonHostClient,
  TImplementation extends LoopPlugin<THostClient>
> {
  protected broker: BrokerGrpcServer;

  constructor(
    server: services.grpc.Server,
    broker: BrokerGrpcServer,
    impl: TImplementation,
    definition: ServiceDefinition,
  ) {
    this.broker = broker;
    server.addService(definition, {
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
    impl: TImplementation,
  ): grpc.handleUnaryCall<messages.StartRequest, messages.Empty> {
    return async (call, callback) => {
      const connInfo = await this.broker.getConnInfo();
      const hostClient = this.createHost();

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
  stop(
    impl: TImplementation,
  ): grpc.handleUnaryCall<messages.Empty, messages.Empty> {
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
   */
  onEvent(
    impl: TImplementation,
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

  /**
   * Implementations should return a new instance of THostClient.
   *
   * @protected
   * @abstract
   */
  protected abstract createHost(): THostClient;
}
