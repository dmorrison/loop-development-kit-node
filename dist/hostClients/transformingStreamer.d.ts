import { grpc } from '../proto/keyboard_grpc_pb';
import { ReadableStream } from './readableStream';
export declare type StreamTransformer<TInput, TOutput> = (input: TInput) => TOutput;
export declare class TransformingStreamer<TInput, TOutput> implements ReadableStream<TOutput> {
    private stream;
    private transformer;
    private listener;
    constructor(stream: grpc.ClientReadableStream<TInput>, transformer: StreamTransformer<TInput, TOutput>, listener?: (input: TOutput) => void);
    setListener(callback: (input: TOutput) => void): void;
    streamWatcher: (stream: TInput) => void;
    stop(): void;
}
