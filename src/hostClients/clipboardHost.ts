import { ReadableStream, StreamListener } from './readableStream';

export interface ClipboardHost {
  queryClipboard(): Promise<string>;

  streamClipboard(listener: StreamListener<string>): ReadableStream<string>;

  writeClipboard(text: string): Promise<void>;
}
