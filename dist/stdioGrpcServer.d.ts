import { GRPCStdioService } from './proto/stdio_grpc_pb';
declare class StdioGrpcServer {
    streamStdio(): void;
}
export { GRPCStdioService as StdioService, StdioGrpcServer, };
