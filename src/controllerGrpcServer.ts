import BrokerGrpcServer from './brokerGrpcServer';
import { Controller } from './controller';
import ControllerGrpcHostClient from './controllerGrpcHostClient';
import { categories } from './categories';
import messages from './proto/ldk_pb';
import services, { IControllerServer } from './proto/ldk_grpc_pb';

/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @private
 */
class ControllerGrpcServer {
  private broker: BrokerGrpcServer;

  /**
   * Create a ControllerGrpcServer.
   *
   * @param {services.grpc.Server} server - The GRPC server instance.
   * @param {Controller} impl - The controller implementation.
   * @param {BrokerGrpcServer} broker - The GRPC broker server instance.
   * @example
   * ControllerGrpcServer(server, myController, broker);
   */
  constructor(
    server: services.grpc.Server,
    impl: Controller,
    broker: BrokerGrpcServer,
  ) {
    this.broker = broker;
    server.addService(services.ControllerService, ({
      start: this.start(impl),
      stop: this.stop(impl),
      onEvent: this.onEvent(impl),
      // Returning any as the server expects an untyped implementation.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as IControllerServer) as any);
  }

  /**
   * Called by the host to start the controller implementation.
   *
   * @async
   * @param {Controller} impl - The implementation of the controller.
   * @returns {void}
   */
  start(
    impl: Controller,
  ): services.grpc.handleUnaryCall<messages.StartRequest, messages.Empty> {
    return async (call, callback) => {
      // TODO: Figure out why I don't need this
      // const host = call.request.getHost();

      const connInfo = await this.broker.getConnInfo();

      const hostClient = new ControllerGrpcHostClient();
      await hostClient.connect(connInfo).catch((err) => {
        throw err;
      });
      await impl.start(hostClient);

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  /**
   * Called by the host to stop the controller implementation.
   *
   * @async
   * @param {Controller} impl - The implementation of the controller.
   * @returns {void}
   */
  stop(
    impl: Controller,
  ): services.grpc.handleUnaryCall<messages.Empty, messages.Empty> {
    return async (call, callback) => {
      await impl.stop();

      const response = new messages.Empty();
      callback(null, response);
    };
  }

  /**
   * Called by the host to broadcast events to the controller implementation.
   *
   * @async
   * @param {Controller} impl - The implementation of the controller.
   * @returns {void}
   */
  onEvent(
    impl: Controller,
  ): services.grpc.handleUnaryCall<messages.OnEventRequest, messages.Empty> {
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

export default ControllerGrpcServer;
