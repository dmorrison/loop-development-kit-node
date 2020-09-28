import { KeyboardClient } from '../grpc/keyboard_grpc_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { ReadableStream, StreamListener } from './readableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardHost, ScanCodeEvent, TextStream } from './keyboardHost';
export default class KeyboardSensorClient extends HostClient<KeyboardClient> implements KeyboardHost {
    streamHotKey(hotKeys: HotKeyRequest[], listener: StreamListener<HotKeyEvent>): ReadableStream<HotKeyEvent>;
    streamText(): ReadableStream<string>;
    streamChar(listener: StreamListener<TextStream>): ReadableStream<TextStream>;
    streamScanCode(listener: StreamListener<ScanCodeEvent>): ReadableStream<ScanCodeEvent>;
    protected generateClient(): GRPCClientConstructor<KeyboardClient>;
}
