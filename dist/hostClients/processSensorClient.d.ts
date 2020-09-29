import { ProcessClient } from '../grpc/process_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { ProcessHost, ProcessListResponse, ProcessStreamResponse } from './processHost';
import { StoppableStream } from './stoppableStream';
export declare class ProcessSensorClient extends GRPCClient<ProcessClient> implements ProcessHost {
    protected generateClient(): GRPCClientConstructor<ProcessClient>;
    queryProcesses(): Promise<ProcessListResponse>;
    streamProcesses(): StoppableStream<ProcessStreamResponse>;
}
