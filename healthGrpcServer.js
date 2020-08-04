const { HealthCheckResponse } = require('./proto/health_pb');
const { HealthService } = require('./proto/health_grpc_pb');

class HealthGrpcServer {
  constructor() {
    this._statusMap = {
      plugin: HealthCheckResponse.ServingStatus.SERVING,
      '': HealthCheckResponse.ServingStatus.NOT_SERVING,
    };
  }

  check(call, callback) {
    const reqService = call.request.getService();
    const status = this._statusMap[reqService] || HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
    const msg = new HealthCheckResponse();
    msg.setStatus(status);
    callback(null, msg);
  }

  watch() {
    // Nothing to do
  }
}

module.exports = {
  HealthGrpcServer,
  HealthService,
};
