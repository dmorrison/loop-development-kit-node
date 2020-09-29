import { ProcessClient as ProcessGRPCClient } from '../grpc/process_grpc_pb';
import BaseClient, { GRPCClientConstructor } from './baseClient';
import { ProcessService, ProcessListResponse, ProcessStreamResponse } from './processService';
import { StoppableStream } from './stoppableStream';
export declare class ProcessClient extends BaseClient<ProcessGRPCClient> implements ProcessService {
    protected generateClient(): GRPCClientConstructor<ProcessGRPCClient>;
    queryProcesses(): Promise<ProcessListResponse>;
    streamProcesses(): StoppableStream<ProcessStreamResponse>;
}
