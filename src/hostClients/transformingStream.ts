import { grpc } from '../grpc/keyboard_grpc_pb';
import { ReadableStream } from './readableStream';

export type StreamTransformer<TInput, TOutput> = (input: TInput) => TOutput;

/**
 * The TransformingStream is a wrapper class that abstracts the grpc.ClientReadableStream interface away from the
 * user and transforms the input from the grpc format to Node objects.
 *
 * This is used when the Library sensor is providing a stream of events, instead of a one-time response.
 */
export class TransformingStream<TInput, TOutput>
  implements ReadableStream<TOutput> {
  private stream: grpc.ClientReadableStream<TInput>;

  private transformer: StreamTransformer<TInput, TOutput>;

  private listener: ((input: TOutput) => void) | undefined;

  /**
   * @param stream - the stream object
   * @param transformer - a transformer function that converts the grpc input to the desired output.
   * @param listener - the listener function provided by the consumer that is called whenever events are outputted.
   */
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
