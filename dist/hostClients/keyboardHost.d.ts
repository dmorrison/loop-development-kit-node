import { StoppableStream, StreamListener } from './stoppableStream';
export interface KeyboardModifiers {
    altL: boolean;
    altR: boolean;
    ctrlL: boolean;
    ctrlR: boolean;
    metaL: boolean;
    metaR: boolean;
    shiftL: boolean;
    shiftR: boolean;
}
export interface HotKeyRequest {
    scanCode: number;
    modifiers: Partial<KeyboardModifiers>;
}
export interface HotKeyEvent {
    direction: 'down' | 'up';
}
export interface TextStream {
    text: string;
}
export interface ScanCodeEvent {
    scanCode: number;
    direction: 'up' | 'down';
}
export interface KeyboardHost {
    streamText(listener: StreamListener<string>): StoppableStream<string>;
    streamChar(listener: StreamListener<TextStream>): StoppableStream<TextStream>;
    streamScanCode(listener: StreamListener<ScanCodeEvent>): StoppableStream<ScanCodeEvent>;
    streamHotKey(hotKeys: HotKeyRequest[], listener: StreamListener<HotKeyEvent>): StoppableStream<HotKeyEvent>;
}
