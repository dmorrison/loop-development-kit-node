import { grpc } from './proto/ldk_grpc_pb';
import { ConnInfo } from './proto/broker_pb';
/**
 * Class used to interact with the broker GRPC service.
 *
 * @private
 */
export default class BrokerGrpcServer {
    private connInfoPromise;
    /**
     * Create a BrokerGrpcServer.
     *
     * @param server - The GRPC server instance.
     * @example
     * BrokerGrpcServer(server);
     */
    constructor(server: grpc.Server);
    /**
     * This callback is called when connection info is received from the host process.
     *
     * @callback BrokerGrpcServer~connInfoCallback
     * @param {connInfo} connInfo - An object containing host process connection information.
     */
    /**
     * Start a connection info stream from the host process.
     *
     * @param {BrokerGrpcServer~connInfoCallback} connInfoCallback
     * - The callback that handles receiving connection info.
     * @returns {void}
     */
    startStream(connInfoCallback: any): (call: any) => void;
    /**
     * Returns a promise which resolves to the connection information for the host process.
     *
     * @returns {Promise.<connInfo>} - Promise object represents connection information
     */
    getConnInfo(): Promise<ConnInfo.AsObject>;
}
