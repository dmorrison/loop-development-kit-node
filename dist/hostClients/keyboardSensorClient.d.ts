import { KeyboardClient } from '../grpc/keyboard_grpc_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { ReadableStream } from './readableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardHost, ScanCodeEvent, TextStream } from './keyboardHost';
export default class KeyboardSensorClient extends HostClient<KeyboardClient> implements KeyboardHost {
    hotKeyStream(hotKeys: HotKeyRequest[], listener: (input: HotKeyEvent) => void): ReadableStream<HotKeyEvent>;
    textChunks(): ReadableStream<string>;
    textStream(listener: (input: TextStream) => void): ReadableStream<TextStream>;
    scanCodeStream(listener: (input: ScanCodeEvent) => void): ReadableStream<ScanCodeEvent>;
    protected generateClient(): GRPCClientConstructor<KeyboardClient>;
}
