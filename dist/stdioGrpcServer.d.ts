import { GRPCStdioService } from './proto/stdio_grpc_pb';
/**
 * @internal
 */
declare class StdioGrpcServer {
    streamStdio(): void;
}
export { GRPCStdioService as StdioService, StdioGrpcServer };
