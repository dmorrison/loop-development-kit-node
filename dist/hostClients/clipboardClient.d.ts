import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { ClipboardClient as ClipboardGRPCClient } from '../grpc/clipboard_grpc_pb';
import { ClipboardService } from './clipboardService';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class ClipboardClient extends GRPCClient<ClipboardGRPCClient> implements ClipboardService {
    protected generateClient(): GRPCClientConstructor<ClipboardGRPCClient>;
    queryClipboard(): Promise<string>;
    streamClipboard(listener: StreamListener<string>): StoppableStream<string>;
    writeClipboard(text: string): Promise<void>;
}
