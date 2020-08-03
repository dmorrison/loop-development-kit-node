const { HealthCheckResponse } = require('./proto/health_pb');
const { HealthService } = require('./proto/health_grpc_pb');

class HealthGrpcServer {
  constructor(server) {
    server.addService(HealthService, {
      check: this.check(),
      watch: this.watch(),
    });
  }

  check() {
    return (call) => {
      const msg = new HealthCheckResponse();
      msg.setStatus(HealthCheckResponse.SERVING);
      call.write(msg);
    };
  }

  watch() {
    return (call) => {
      const msg = new HealthCheckResponse();
      msg.setStatus(HealthCheckResponse.SERVING);
      call.write(msg);
    };
  }
}

module.exports = HealthGrpcServer;
