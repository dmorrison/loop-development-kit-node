import { Controller } from './controller';
/** Class used to setup the GRPC server and host the controller service. */
declare class ControllerPlugin {
    private server;
    private broker;
    private controller;
    /**
     * Create a ControllerPlugin.
     *
     * @param impl - The implementation of the controller.
     * ```
     * new ControllerPlugin(myController);
     * ```
     */
    constructor(impl: Controller);
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @returns Promise resolving when the server starts.
     */
    serve(): Promise<void>;
}
export default ControllerPlugin;
