import { Controller } from './controller';
/**
 * Class used by the host process to interact with the controller implementation.
 *
 * @private
 */
declare class ControllerGrpcServer {
    private broker;
    /**
     * Create a ControllerGrpcServer.
     *
     * @param {object} server - The GRPC server instance.
     * @param {Controller} impl - The controller implementation.
     * @param {BrokerGrpcServer} broker - The GRPC broker server instance.
     * @example
     * ControllerGrpcServer(server, myController, broker);
     */
    constructor(server: any, impl: Controller, broker: any);
    /**
     * Called by the host to start the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    start(impl: any): (call: any, callback: any) => Promise<void>;
    /**
     * Called by the host to stop the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    stop(impl: any): (call: any, callback: any) => Promise<void>;
    /**
     * Called by the host to broadcast events to the controller implementation.
     *
     * @async
     * @param {Controller} impl - The implementation of the controller.
     * @returns {void}
     */
    onEvent(impl: any): ({ request }: {
        request: any;
    }, callback: any) => Promise<void>;
}
export default ControllerGrpcServer;
