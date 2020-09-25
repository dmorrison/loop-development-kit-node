import { KeyboardClient } from '../proto/keyboard_grpc_pb';
import GrpcHostClient from './grpcHostClient';
import { ReadableStream } from './readableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardHost, ScanCodeEvent, TextStream } from './keyboardHost';
export default class KeyboardGrpcHostClient extends GrpcHostClient<KeyboardClient> implements KeyboardHost {
    hotKeyStream(hotKeys: HotKeyRequest[], listener: (input: HotKeyEvent) => void): ReadableStream<HotKeyEvent>;
    textChunks(): ReadableStream<string>;
    textStream(listener: (input: TextStream) => void): ReadableStream<TextStream>;
    scanCodeStream(listener: (input: ScanCodeEvent) => void): ReadableStream<ScanCodeEvent>;
    protected generateClient(address: string): KeyboardClient;
}
