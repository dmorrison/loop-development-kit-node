import HostClient, { GRPCClientConstructor } from './hostClient';
import { ClipboardClient } from '../grpc/clipboard_grpc_pb';
import { ClipboardHost } from './clipboardHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class ClipboardSensorClient extends HostClient<ClipboardClient> implements ClipboardHost {
    protected generateClient(): GRPCClientConstructor<ClipboardClient>;
    queryClipboard(): Promise<string>;
    streamClipboard(listener: StreamListener<string>): StoppableStream<string>;
    writeClipboard(text: string): Promise<void>;
}
