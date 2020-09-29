import { ProcessClient as ProcessGRPCClient } from '../grpc/process_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { ProcessService, ProcessListResponse, ProcessStreamResponse } from './processService';
import { StoppableStream } from './stoppableStream';
export declare class ProcessClient extends GRPCClient<ProcessGRPCClient> implements ProcessService {
    protected generateClient(): GRPCClientConstructor<ProcessGRPCClient>;
    queryProcesses(): Promise<ProcessListResponse>;
    streamProcesses(): StoppableStream<ProcessStreamResponse>;
}
