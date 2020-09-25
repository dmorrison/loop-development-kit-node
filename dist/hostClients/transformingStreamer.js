"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformingStreamer = void 0;
class TransformingStreamer {
    constructor(stream, transformer, listener) {
        this.streamWatcher = (stream) => {
            if (this.listener) {
                this.listener(this.transformer(stream));
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
exports.TransformingStreamer = TransformingStreamer;
