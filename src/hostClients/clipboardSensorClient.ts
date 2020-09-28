import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { ClipboardClient } from '../grpc/clipboard_grpc_pb';
import messages from '../grpc/clipboard_pb';
import { ClipboardHost } from './clipboardHost';
import { StreamTransformer, TransformingStream } from './transformingStream';
import { ReadableStream, StreamListener } from './readableStream';

const clipboardTransformer: StreamTransformer<
  messages.ClipboardReadResponse | messages.ClipboardReadStreamResponse,
  string
> = (message) => {
  return message.getText();
};

export class ClipboardSensorClient
  extends HostClient<ClipboardClient>
  implements ClipboardHost {
  protected generateClient(): GRPCClientConstructor<ClipboardClient> {
    return ClipboardClient;
  }

  queryClipboard(): Promise<string> {
    return Promise.resolve('');
  }

  streamClipboard(listener: StreamListener<string>): ReadableStream<string> {
    return new TransformingStream<messages.ClipboardReadStreamResponse, string>(
      this.client.clipboardReadStream(new Empty()),
      clipboardTransformer,
      listener,
    );
  }

  writeClipboard(text: string): Promise<void> {
    return Promise.resolve(undefined);
  }
}
