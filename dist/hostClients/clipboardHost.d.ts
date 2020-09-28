import { StoppableStream, StreamListener } from './stoppableStream';
export interface ClipboardHost {
    queryClipboard(): Promise<string>;
    streamClipboard(listener: StreamListener<string>): StoppableStream<string>;
    writeClipboard(text: string): Promise<void>;
}
