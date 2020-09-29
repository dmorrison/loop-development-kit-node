import { KeyboardClient as KeyboardGRPCClient } from '../grpc/keyboard_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { StoppableStream, StreamListener } from './stoppableStream';
import { HotKeyEvent, HotKeyRequest, KeyboardService, ScanCodeEvent, TextStream } from './keyboardService';
export default class KeyboardClient extends GRPCClient<KeyboardGRPCClient> implements KeyboardService {
    streamHotKey(hotKeys: HotKeyRequest[], listener: StreamListener<HotKeyEvent>): StoppableStream<HotKeyEvent>;
    streamText(): StoppableStream<string>;
    streamChar(listener: StreamListener<TextStream>): StoppableStream<TextStream>;
    streamScanCode(listener: StreamListener<ScanCodeEvent>): StoppableStream<ScanCodeEvent>;
    protected generateClient(): GRPCClientConstructor<KeyboardGRPCClient>;
}
