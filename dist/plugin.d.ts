import { Loop } from './loop';
/** Class used to setup the GRPC server and host the controller service. */
declare class Plugin {
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
    constructor(impl: Loop);
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @returns Promise resolving when the server starts.
     */
    serve(): Promise<void>;
}
export default Plugin;
