import { ProcessClient } from '../grpc/process_grpc_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { ProcessHost, ProcessListResponse, ProcessStreamResponse } from './processHost';
import { StoppableStream } from './stoppableStream';
export declare class ProcessSensorClient extends HostClient<ProcessClient> implements ProcessHost {
    protected generateClient(): GRPCClientConstructor<ProcessClient>;
    queryProcesses(): Promise<ProcessListResponse>;
    streamProcesses(): StoppableStream<ProcessStreamResponse>;
}
