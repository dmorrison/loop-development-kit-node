const { HealthCheckResponse } = require('./proto/health_pb');
const { HealthService } = require('./proto/health_grpc_pb');

/** Class used to implement the GRPC health service. */
class HealthGrpcServer {
  /**
   * Create a HealthGrpcServer.
   *
   * @example
   * HealthGrpcServer();
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
   * @param {object} call
   * @param {function} callback
   * @returns {void}
   */
  check(call, callback) {
    const reqService = call.request.getService();
    const status = this._statusMap[reqService] || HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
    const msg = new HealthCheckResponse();
    msg.setStatus(status);
    callback(null, msg);
  }

  /**
   * Called by the host to establish a health event stream.
   * Currently unused.
   *
   * @async
   * @returns {void}
   */
  watch() {
    // Nothing to do
  }
}

module.exports = {
  HealthGrpcServer,
  HealthService,
};
