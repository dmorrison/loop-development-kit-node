import { KeyboardClient } from '../grpc/keyboard_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { StoppableStream, StreamListener } from './stoppableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardHost, ScanCodeEvent, TextStream } from './keyboardHost';
export default class KeyboardSensorClient extends GRPCClient<KeyboardClient> implements KeyboardHost {
    streamHotKey(hotKeys: HotKeyRequest[], listener: StreamListener<HotKeyEvent>): StoppableStream<HotKeyEvent>;
    streamText(): StoppableStream<string>;
    streamChar(listener: StreamListener<TextStream>): StoppableStream<TextStream>;
    streamScanCode(listener: StreamListener<ScanCodeEvent>): StoppableStream<ScanCodeEvent>;
    protected generateClient(): GRPCClientConstructor<KeyboardClient>;
}
