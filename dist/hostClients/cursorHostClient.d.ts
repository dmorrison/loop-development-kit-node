import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { CursorClient } from '../grpc/cursor_grpc_pb';
import { CursorHost, CursorResponse } from './cursorHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class CursorHostClient extends GRPCClient<CursorClient> implements CursorHost {
    protected generateClient(): GRPCClientConstructor<CursorClient>;
    queryCursorPosition(): Promise<CursorResponse>;
    streamCursorPosition(listener: StreamListener<CursorResponse>): StoppableStream<CursorResponse>;
}
