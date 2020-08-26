import { ServiceDefinition } from '@grpc/grpc-js';
import services, { grpc } from './proto/ldk_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/ldk_pb';
import { LoopPlugin } from './loopPlugin';
import { CommonHostClient } from './commonHostClient';
/**
 * @internal
 */
export default abstract class GRPCServer<THostClient extends CommonHostClient, TImplementation extends LoopPlugin<THostClient>> {
    protected broker: BrokerGrpcServer;
    constructor(server: services.grpc.Server, broker: BrokerGrpcServer, impl: TImplementation, definition: ServiceDefinition);
    /**
     * Called by the host to start the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    start(impl: TImplementation): grpc.handleUnaryCall<messages.StartRequest, messages.Empty>;
    /**
     * Called by the host to stop the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    stop(impl: TImplementation): grpc.handleUnaryCall<messages.Empty, messages.Empty>;
    /**
     * Called by the host to broadcast events to the sensor implementation.
     *
     * @async
     * @param impl - The implementation of the sensor.
     */
    onEvent(impl: TImplementation): grpc.handleUnaryCall<messages.OnEventRequest, messages.Empty>;
    /**
     * Implementations should return a new instance of THostClient.
     *
     * @protected
     * @abstract
     */
    protected abstract createHost(): THostClient;
}
