import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/ldk_pb';
import services, { grpc } from './proto/ldk_grpc_pb';
import { Sensor } from './sensor';
/**
 * Class used by the host process to interact with the sensor implementation.
 *
 * @internal
 */
declare class SensorGRPCServer {
    private broker;
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
    constructor(server: services.grpc.Server, impl: Sensor, broker: BrokerGrpcServer);
    /**
     * Called by the host to start the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    start(impl: Sensor): grpc.handleUnaryCall<messages.StartRequest, messages.Empty>;
    /**
     * Called by the host to stop the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    stop(impl: Sensor): grpc.handleUnaryCall<messages.Empty, messages.Empty>;
    /**
     * Called by the host to broadcast events to the sensor implementation.
     *
     * @async
     * @param impl - The implementation of the sensor.
     */
    onEvent(impl: Sensor): grpc.handleUnaryCall<messages.OnEventRequest, messages.Empty>;
}
export default SensorGRPCServer;
