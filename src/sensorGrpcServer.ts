import BrokerGrpcServer from './brokerGrpcServer';
import { grpc, SensorService } from './proto/ldk_grpc_pb';
import SensorGrpcHostClient from './sensorGrpcHostClient';
import { Sensor } from './sensor';
import GRPCServer from './grpcServer';

/**
 * Class used by the host process to interact with the sensor implementation.
 *
 * @internal
 */
class SensorGRPCServer extends GRPCServer<SensorGrpcHostClient, Sensor> {
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
  constructor(server: grpc.Server, impl: Sensor, broker: BrokerGrpcServer) {
    super(server, broker, impl, SensorService);
  }

  protected createHost(): SensorGrpcHostClient {
    return new SensorGrpcHostClient();
  }
}

export default SensorGRPCServer;
