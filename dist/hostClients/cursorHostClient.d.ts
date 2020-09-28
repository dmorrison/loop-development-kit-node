import HostClient, { GRPCClientConstructor } from './hostClient';
import { CursorClient } from '../grpc/cursor_grpc_pb';
import { CursorHost, CursorResponse } from './cursorHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class CursorHostClient extends HostClient<CursorClient> implements CursorHost {
    protected generateClient(): GRPCClientConstructor<CursorClient>;
    queryCursorPosition(): Promise<CursorResponse>;
    streamCursorPosition(listener: StreamListener<CursorResponse>): StoppableStream<CursorResponse>;
}
