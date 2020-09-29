import { StoppableStream, StreamListener } from './stoppableStream';

export interface WindowInfoResponse {
  title: string;
  path: string;
  pid: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// eslint-disable-next-line no-shadow
export enum WindowStreamAction {
  Unknown = 'unknown',
  Focused = 'focused',
  Unfocused = 'unfocused',
  Opened = 'opened',
  Closed = 'closed',
}

export interface WindowInfoStreamResponse {
  window: WindowInfoResponse;
  action: WindowStreamAction;
}

export interface WindowService {
  queryActiveWindow(): Promise<WindowInfoResponse>;

  queryWindows(): Promise<WindowInfoResponse[]>;

  streamActiveWindow(
    listener: StreamListener<WindowInfoResponse>,
  ): StoppableStream<WindowInfoResponse>;

  streamWindows(
    listener: StreamListener<WindowInfoStreamResponse>,
  ): StoppableStream<WindowInfoStreamResponse>;
}
