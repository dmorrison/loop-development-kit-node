// const { StdioData } = require('./proto/stdio_pb');
const { GRPCStdioService } = require('./proto/stdio_grpc_pb');

class StdioGrpcServer {
  constructor(server) {
    server.addService(GRPCStdioService, {
      streamStdio: this.streamStdio(),
    });
  }

  streamStdio() {
    return () => {
      // This appears to be used in Go, but we're not quite sure how to use
      // it in JS.
    };
  }
}

module.exports = StdioGrpcServer;
