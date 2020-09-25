import { ReadableStream } from './readableStream';
export interface ClipboardHost {
    queryClipboard(): Promise<string>;
    streamClipboard(listener: (text: string) => void): ReadableStream<string>;
    writeClipboard(text: string): Promise<void>;
}
