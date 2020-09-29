import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { ClipboardClient as ClipboardGRPCClient } from '../grpc/clipboard_grpc_pb';
import messages from '../grpc/clipboard_pb';
import { ClipboardHost } from './clipboardHost';
import { StreamTransformer, TransformingStream } from './transformingStream';
import { StoppableStream, StreamListener } from './stoppableStream';

const clipboardTransformer: StreamTransformer<
  messages.ClipboardReadResponse | messages.ClipboardReadStreamResponse,
  string
> = (message) => {
  return message.getText();
};

export class ClipboardClient
  extends GRPCClient<ClipboardGRPCClient>
  implements ClipboardHost {
  protected generateClient(): GRPCClientConstructor<ClipboardGRPCClient> {
    return ClipboardGRPCClient;
  }

  queryClipboard(): Promise<string> {
    return Promise.resolve('');
  }

  streamClipboard(listener: StreamListener<string>): StoppableStream<string> {
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
