import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { CursorClient as CursorGRPCClient } from '../grpc/cursor_grpc_pb';
import { CursorService, CursorResponse } from './cursorService';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class CursorClient extends GRPCClient<CursorGRPCClient> implements CursorService {
    protected generateClient(): GRPCClientConstructor<CursorGRPCClient>;
    queryCursorPosition(): Promise<CursorResponse>;
    streamCursorPosition(listener: StreamListener<CursorResponse>): StoppableStream<CursorResponse>;
}
