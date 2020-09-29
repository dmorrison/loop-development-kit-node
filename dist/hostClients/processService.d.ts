import { StoppableStream, StreamListener } from './stoppableStream';
export declare enum ProcessStreamAction {
    Unknown = "unknown",
    Started = "started",
    Stopped = "stopped"
}
export interface ProcessInfoResponse {
    pid: number;
    command: string;
    arguments: string;
}
export interface ProcessStreamResponse {
    process: ProcessInfoResponse;
    action: ProcessStreamAction;
}
export interface ProcessListResponse {
    processes: ProcessInfoResponse[];
}
export interface ProcessService {
    queryProcesses(): Promise<ProcessListResponse>;
    streamProcesses(listener: StreamListener<ProcessStreamResponse>): StoppableStream<ProcessStreamResponse>;
}
