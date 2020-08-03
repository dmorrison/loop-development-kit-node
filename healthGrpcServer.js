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
      call.on('data', () => {
        const msg = new HealthCheckResponse();
        msg.setStatus(HealthCheckResponse.SERVING);
        call.write(msg);
      });

      call.on('end', () => {
        call.end();
      });
    };
  }

  watch() {
    return (call) => {
      call.on('data', () => {
        const msg = new HealthCheckResponse();
        msg.setStatus(HealthCheckResponse.SERVING);
        call.write(msg);
      });

      call.on('end', () => {
        call.end();
      });
    };
  }
}

module.exports = HealthGrpcServer;
