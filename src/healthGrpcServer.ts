import * as grpc from '@grpc/grpc-js';
import { HealthCheckResponse, HealthCheckRequest } from './proto/health_pb';
import { HealthService } from './proto/health_grpc_pb';

/**
 * Class used to implement the GRPC health service.
 *
 * @internal
 */
class HealthGrpcServer {
  private _statusMap: { [key: string]: HealthCheckResponse.ServingStatus };

  /**
   * Create a HealthGrpcServer.
   *
   * ```
   * new HealthGrpcServer();
   * ```
   */
  constructor() {
    this._statusMap = {
      plugin: HealthCheckResponse.ServingStatus.SERVING,
      '': HealthCheckResponse.ServingStatus.NOT_SERVING,
    };
  }

  /**
   * Called by the host to check the health status of the server.
   *
   * @async
   * @param call - Called service
   * @param callback - Callback method to invoke with message.
   */
  check(
    call: grpc.ServerUnaryCall<HealthCheckRequest, HealthCheckResponse>,
    callback: grpc.sendUnaryData<HealthCheckResponse>,
  ): void {
    const reqService = call?.request?.getService();
    const status =
      this._statusMap[reqService || 'unknown'] ||
      HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
    const msg = new HealthCheckResponse();
    msg.setStatus(status);
    callback(null, msg);
  }

  /**
   * Called by the host to establish a health event stream.
   * Currently unused.
   */
  watch(): void {
    // Nothing to do
  }
}

export { HealthGrpcServer, HealthCheckResponse, HealthService };
