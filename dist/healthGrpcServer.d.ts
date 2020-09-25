import * as grpc from '@grpc/grpc-js';
import { HealthCheckResponse, HealthCheckRequest } from './grpc/health_pb';
import { HealthService } from './grpc/health_grpc_pb';
/**
 * Class used to implement the GRPC health service.
 *
 * @internal
 */
declare class HealthGrpcServer {
    private _statusMap;
    /**
     * Create a HealthGrpcServer.
     *
     * ```
     * new HealthGrpcServer();
     * ```
     */
    constructor();
    /**
     * Called by the host to check the health status of the server.
     *
     * @async
     * @param call - Called service
     * @param callback - Callback method to invoke with message.
     */
    check(call: grpc.ServerUnaryCall<HealthCheckRequest, HealthCheckResponse>, callback: grpc.sendUnaryData<HealthCheckResponse>): void;
    /**
     * Called by the host to establish a health event stream.
     * Currently unused.
     */
    watch(): void;
}
export { HealthGrpcServer, HealthCheckResponse, HealthService };
