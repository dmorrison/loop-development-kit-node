import grpc from '@grpc/grpc-js';
import { ReadableStream, StreamListener } from './readableStream';
export declare type StreamTransformer<TInput, TOutput> = (input: TInput) => TOutput;
export declare type MessageWithError = {
    getError(): string;
};
/**
 * The TransformingStream is a wrapper class that abstracts the grpc.ClientReadableStream interface away from the
 * user and transforms the input from the grpc format to Node objects.
 *
 * This is used when the Library sensor is providing a stream of events, instead of a one-time response.
 */
export declare class TransformingStream<TInput extends MessageWithError, TOutput> implements ReadableStream<TOutput> {
    private stream;
    private transformer;
    private listener;
    /**
     * @param stream - the stream object
     * @param transformer - a transformer function that converts the grpc input to the desired output.
     * @param listener - the listener function provided by the consumer that is called whenever events are outputted.
     */
    constructor(stream: grpc.ClientReadableStream<TInput>, transformer: StreamTransformer<TInput, TOutput>, listener?: StreamListener<TOutput>);
    setListener(callback: StreamListener<TOutput>): void;
    streamWatcher: (stream: TInput) => void;
    stop(): void;
}
