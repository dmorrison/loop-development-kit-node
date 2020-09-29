import { StoppableStream, StreamListener } from './stoppableStream';
export interface HoverResponse {
    text: string;
}
export interface HoverReadRequest {
    xFromCenter: number;
    yFromCenter: number;
}
export interface HoverService {
    queryHover(params: HoverReadRequest): Promise<HoverResponse>;
    streamHover(params: HoverReadRequest, listener: StreamListener<HoverResponse>): StoppableStream<HoverResponse>;
}
