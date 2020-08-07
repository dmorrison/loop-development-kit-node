import { HealthCheckResponse } from './proto/health_pb';
import { HealthService } from './proto/health_grpc_pb';
/**
 * Class used to implement the GRPC health service.
 *
 * @private
 */
declare class HealthGrpcServer {
    private _statusMap;
    /**
     * Create a HealthGrpcServer.
     *
     * @example
     * HealthGrpcServer();
     */
    constructor();
    /**
     * Called by the host to check the health status of the server.
     *
     * @async
     * @param {object} call
     * @param {Function} callback
     * @returns {void}
     */
    check(call: any, callback: any): void;
    /**
     * Called by the host to establish a health event stream.
     * Currently unused.
     *
     * @async
     * @returns {void}
     */
    watch(): void;
}
export { HealthGrpcServer, HealthCheckResponse, HealthService, };
