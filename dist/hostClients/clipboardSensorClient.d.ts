import HostClient, { GRPCClientConstructor } from './hostClient';
import { ClipboardClient } from '../proto/clipboard_grpc_pb';
import { ClipboardHost } from './clipboardHost';
import { ReadableStream } from './readableStream';
export declare class ClipboardSensorClient extends HostClient<ClipboardClient> implements ClipboardHost {
    protected generateClient(): GRPCClientConstructor<ClipboardClient>;
    queryClipboard(): Promise<string>;
    streamClipboard(listener: (text: string) => void): ReadableStream<string>;
    writeClipboard(text: string): Promise<void>;
}
