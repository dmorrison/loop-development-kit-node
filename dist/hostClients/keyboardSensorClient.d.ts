import { KeyboardClient } from '../grpc/keyboard_grpc_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { ReadableStream } from './readableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardHost, ScanCodeEvent, TextStream } from './keyboardHost';
export default class KeyboardSensorClient extends HostClient<KeyboardClient> implements KeyboardHost {
    streamHotKey(hotKeys: HotKeyRequest[], listener: (input: HotKeyEvent) => void): ReadableStream<HotKeyEvent>;
    streamText(): ReadableStream<string>;
    streamChar(listener: (input: TextStream) => void): ReadableStream<TextStream>;
    streamScanCode(listener: (input: ScanCodeEvent) => void): ReadableStream<ScanCodeEvent>;
    protected generateClient(): GRPCClientConstructor<KeyboardClient>;
}
