import { Controller } from './controller';
/** Class used to setup the GRPC server and host the controller service. */
declare class ControllerPlugin {
    private server;
    private broker;
    private controller;
    /**
     * Create a ControllerPlugin.
     *
     * @param {Controller} impl - The implementation of the controller.
     * @example
     * ControllerPlugin(myController);
     */
    constructor(impl: Controller);
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @async
     * @returns {void}
     */
    serve(): Promise<unknown>;
}
export default ControllerPlugin;
