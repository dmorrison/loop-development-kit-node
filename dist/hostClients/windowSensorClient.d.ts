import { WindowClient } from '../grpc/window_grpc_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { WindowHost, WindowInfoResponse, WindowInfoStreamResponse } from './windowHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class WindowSensorClient extends HostClient<WindowClient> implements WindowHost {
    protected generateClient(): GRPCClientConstructor<WindowClient>;
    queryActiveWindow(): Promise<WindowInfoResponse>;
    queryWindows(): Promise<WindowInfoResponse[]>;
    streamActiveWindow(listener: StreamListener<WindowInfoResponse>): StoppableStream<WindowInfoResponse>;
    streamWindows(listener: StreamListener<WindowInfoStreamResponse>): StoppableStream<WindowInfoStreamResponse>;
}
