import { StoppableStream, StreamListener } from './stoppableStream';

// eslint-disable-next-line no-shadow
export enum ProcessStreamAction {
  Unknown = 'unknown',
  Started = 'started',
  Stopped = 'stopped',
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

export interface ProcessHost {
  queryProcesses(): Promise<ProcessListResponse>;
  streamProcesses(
    listener: StreamListener<ProcessStreamResponse>,
  ): StoppableStream<ProcessStreamResponse>;
}
