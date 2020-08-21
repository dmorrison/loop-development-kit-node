import BrokerGrpcServer from './brokerGrpcServer';
import { Controller } from './controller';
import ControllerGrpcHostClient from './controllerGrpcHostClient';
import services from './proto/ldk_grpc_pb';
import GRPCServer from './grpcServer';

/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @internal
 */
class ControllerGrpcServer extends GRPCServer<
  ControllerGrpcHostClient,
  Controller
> {
  constructor(
    server: services.grpc.Server,
    impl: Controller,
    broker: BrokerGrpcServer,
  ) {
    super(server, broker, impl, services.ControllerService);
  }

  protected createHost(): ControllerGrpcHostClient {
    return new ControllerGrpcHostClient();
  }
}

export default ControllerGrpcServer;
