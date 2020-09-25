import { grpc } from '../proto/keyboard_grpc_pb';
import { ReadableStream } from './readableStream';

export type StreamTransformer<TInput, TOutput> = (input: TInput) => TOutput;

export class TransformingStreamer<TInput, TOutput>
  implements ReadableStream<TOutput> {
  private stream: grpc.ClientReadableStream<TInput>;

  private transformer: StreamTransformer<TInput, TOutput>;

  private listener: ((input: TOutput) => void) | undefined;

  constructor(
    stream: grpc.ClientReadableStream<TInput>,
    transformer: StreamTransformer<TInput, TOutput>,
    listener?: (input: TOutput) => void,
  ) {
    this.stream = stream;
    this.transformer = transformer;
    this.listener = listener;
    this.stream.addListener('data', this.streamWatcher);
  }

  setListener(callback: (input: TOutput) => void): void {
    this.listener = callback;
  }

  streamWatcher = (stream: TInput): void => {
    if (this.listener) {
      this.listener(this.transformer(stream));
    }
  };

  stop(): void {
    this.stream.cancel();
    this.stream.removeAllListeners('data');
  }
}
