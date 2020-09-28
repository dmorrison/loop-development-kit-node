"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformingStream = void 0;
/**
 * The TransformingStream is a wrapper class that abstracts the grpc.ClientReadableStream interface away from the
 * user and transforms the input from the grpc format to Node objects.
 *
 * This is used when the Library sensor is providing a stream of events, instead of a one-time response.
 */
class TransformingStream {
    /**
     * @param stream - the stream object
     * @param transformer - a transformer function that converts the grpc input to the desired output.
     * @param listener - the listener function provided by the consumer that is called whenever events are outputted.
     */
    constructor(stream, transformer, listener) {
        this.streamWatcher = (stream) => {
            if (this.listener) {
                const error = stream.getError();
                if (error !== '') {
                    this.listener(error);
                }
                else {
                    this.listener(null, this.transformer(stream));
                }
            }
        };
        this.stream = stream;
        this.transformer = transformer;
        this.listener = listener;
        this.stream.addListener('data', this.streamWatcher);
    }
    setListener(callback) {
        this.listener = callback;
    }
    stop() {
        this.stream.cancel();
        this.stream.removeAllListeners('data');
    }
}
exports.TransformingStream = TransformingStream;
