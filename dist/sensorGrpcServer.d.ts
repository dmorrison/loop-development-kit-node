import BrokerGrpcServer from './brokerGrpcServer';
import services, { grpc } from './proto/ldk_grpc_pb';
import { Sensor } from './sensor';
/**
 * Class used by the host process to interact with the sensor implementation.
 *
 * @private
 */
declare class SensorGRPCServer {
    private broker;
    /**
     * Create a SensorGRPCServer.
     *
     * @param {object} server - The GRPC server instance.
     * @param {Sensor} impl - The sensor implementation.
     * @param {BrokerGrpcServer} broker - The GRPC broker server instance.
     * @example
     * SensorGRPCServer(server, mySensor, broker);
     */
    constructor(server: services.grpc.Server, impl: Sensor, broker: BrokerGrpcServer);
    /**
     * Called by the host to start the sensor implementation.
     *
     * @async
     * @param {Sensor} impl - The implementation of the sensor.
     * @returns {void}
     */
    start(impl: Sensor): grpc.handleUnaryCall<any, any>;
    /**
     * Called by the host to stop the sensor implementation.
     *
     * @async
     * @param {Sensor} impl - The implementation of the sensor.
     * @returns {void}
     */
    stop(impl: Sensor): (call: any, callback: any) => Promise<void>;
    /**
     * Called by the host to broadcast events to the sensor implementation.
     *
     * @async
     * @param {Sensor} impl - The implementation of the sensor.
     * @returns {void}
     */
    onEvent(impl: Sensor): ({ request }: {
        request: any;
    }, callback: any) => Promise<void>;
}
export default SensorGRPCServer;
