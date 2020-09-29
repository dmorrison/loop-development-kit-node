import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { HoverClient } from '../grpc/hover_grpc_pb';
import { HoverHost, HoverReadRequest, HoverResponse } from './hoverHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class HoverSensorClient extends GRPCClient<HoverClient> implements HoverHost {
    protected generateClient(): GRPCClientConstructor<HoverClient>;
    queryHover(params: HoverReadRequest): Promise<HoverResponse>;
    streamHover(params: HoverReadRequest, listener: StreamListener<HoverResponse>): StoppableStream<HoverResponse>;
}
