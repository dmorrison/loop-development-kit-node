import { WindowClient as WindowGRPCClient } from '../grpc/window_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { WindowService, WindowInfoResponse, WindowInfoStreamResponse } from './windowService';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class WindowClient extends GRPCClient<WindowGRPCClient> implements WindowService {
    protected generateClient(): GRPCClientConstructor<WindowGRPCClient>;
    queryActiveWindow(): Promise<WindowInfoResponse>;
    queryWindows(): Promise<WindowInfoResponse[]>;
    streamActiveWindow(listener: StreamListener<WindowInfoResponse>): StoppableStream<WindowInfoResponse>;
    streamWindows(listener: StreamListener<WindowInfoStreamResponse>): StoppableStream<WindowInfoStreamResponse>;
}
