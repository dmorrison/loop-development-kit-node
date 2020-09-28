import { StoppableStream, StreamListener } from './stoppableStream';

export interface CursorResponse {
  x: number;
  y: number;
  screen: number;
}

export interface CursorHost {
  queryCursorPosition(): Promise<CursorResponse>;
  streamCursorPosition(
    listener: StreamListener<CursorResponse>,
  ): StoppableStream<CursorResponse>;
}
