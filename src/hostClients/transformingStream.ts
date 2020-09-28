import grpc from '@grpc/grpc-js';
import { ReadableStream, StreamListener } from './readableStream';

export type StreamTransformer<TInput, TOutput> = (input: TInput) => TOutput;

export type MessageWithError = {
  getError(): string;
};

/**
 * The TransformingStream is a wrapper class that abstracts the grpc.ClientReadableStream interface away from the
 * user and transforms the input from the grpc format to Node objects.
 *
 * This is used when the Library sensor is providing a stream of events, instead of a one-time response.
 */
export class TransformingStream<TInput extends MessageWithError, TOutput>
  implements ReadableStream<TOutput> {
  private stream: grpc.ClientReadableStream<TInput>;

  private transformer: StreamTransformer<TInput, TOutput>;

  private listener: StreamListener<TOutput> | undefined;

  /**
   * @param stream - the stream object
   * @param transformer - a transformer function that converts the grpc input to the desired output.
   * @param listener - the listener function provided by the consumer that is called whenever events are outputted.
   */
  constructor(
    stream: grpc.ClientReadableStream<TInput>,
    transformer: StreamTransformer<TInput, TOutput>,
    listener?: StreamListener<TOutput>,
  ) {
    this.stream = stream;
    this.transformer = transformer;
    this.listener = listener;
    this.stream.addListener('data', this.streamWatcher);
  }

  setListener(callback: StreamListener<TOutput>): void {
    this.listener = callback;
  }

  streamWatcher = (stream: TInput): void => {
    if (this.listener) {
      const error = stream.getError();
      if (error !== '') {
        this.listener(error);
      } else {
        this.listener(null, this.transformer(stream));
      }
    }
  };

  stop(): void {
    this.stream.cancel();
    this.stream.removeAllListeners('data');
  }
}
