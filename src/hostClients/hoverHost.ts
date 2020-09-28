import { StoppableStream, StreamListener } from './stoppableStream';

export interface HoverResponse {
  text: string;
}

export interface HoverReadRequest {
  xFromCenter: number;
  yFromCenter: number;
}

export interface HoverHost {
  queryHover(params: HoverReadRequest): Promise<HoverResponse>;

  streamHover(
    params: HoverReadRequest,
    listener: StreamListener<HoverResponse>,
  ): StoppableStream<HoverResponse>;
}
