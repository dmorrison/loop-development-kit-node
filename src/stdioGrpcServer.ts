import { GRPCStdioService } from './proto/stdio_grpc_pb';

class StdioGrpcServer {
  streamStdio(): void {
    // This appears to be used in Go, but we're not quite sure how to use
    // it in JS.
  }
}

export { GRPCStdioService as StdioService, StdioGrpcServer };