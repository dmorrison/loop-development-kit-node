import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { HoverClient as HoverGRPCClient } from '../grpc/hover_grpc_pb';
import { HoverService, HoverReadRequest, HoverResponse } from './hoverService';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class HoverClient extends GRPCClient<HoverGRPCClient> implements HoverService {
    protected generateClient(): GRPCClientConstructor<HoverGRPCClient>;
    queryHover(params: HoverReadRequest): Promise<HoverResponse>;
    streamHover(params: HoverReadRequest, listener: StreamListener<HoverResponse>): StoppableStream<HoverResponse>;
}
