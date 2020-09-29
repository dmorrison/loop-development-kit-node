import { WindowClient } from '../grpc/window_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { WindowHost, WindowInfoResponse, WindowInfoStreamResponse } from './windowHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class WindowSensorClient extends GRPCClient<WindowClient> implements WindowHost {
    protected generateClient(): GRPCClientConstructor<WindowClient>;
    queryActiveWindow(): Promise<WindowInfoResponse>;
    queryWindows(): Promise<WindowInfoResponse[]>;
    streamActiveWindow(listener: StreamListener<WindowInfoResponse>): StoppableStream<WindowInfoResponse>;
    streamWindows(listener: StreamListener<WindowInfoStreamResponse>): StoppableStream<WindowInfoStreamResponse>;
}
