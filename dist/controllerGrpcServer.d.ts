import BrokerGrpcServer from './brokerGrpcServer';
import { Controller } from './controller';
import messages from './proto/ldk_pb';
import services from './proto/ldk_grpc_pb';
/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @internal
 */
declare class ControllerGrpcServer {
    private broker;
    /**
     * Create a ControllerGrpcServer.
     *
     * @param server - The GRPC server instance.
     * @param impl - The controller implementation.
     * @param broker - The GRPC broker server instance.
     * @example
     * ```
     * ControllerGrpcServer(server, myController, broker);
     * ```
     */
    constructor(server: services.grpc.Server, impl: Controller, broker: BrokerGrpcServer);
    /**
     * Called by the host to start the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    start(impl: Controller): services.grpc.handleUnaryCall<messages.StartRequest, messages.Empty>;
    /**
     * Called by the host to stop the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    stop(impl: Controller): services.grpc.handleUnaryCall<messages.Empty, messages.Empty>;
    /**
     * Called by the host to broadcast events to the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    onEvent(impl: Controller): services.grpc.handleUnaryCall<messages.OnEventRequest, messages.Empty>;
}
export default ControllerGrpcServer;
