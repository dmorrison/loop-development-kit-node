// const { StdioData } = require('./proto/stdio_pb');
const { GRPCStdioService } = require('../proto/stdio_grpc_pb');

class StdioGrpcServer {
  streamStdio() {
    // This appears to be used in Go, but we're not quite sure how to use
    // it in JS.
  }
}

module.exports = {
  StdioService: GRPCStdioService,
  StdioGrpcServer,
};
