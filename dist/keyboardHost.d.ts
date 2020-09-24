import { ReadableStream } from './readableStream';
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
    modifiers: KeyboardModifiers | null;
}
export interface ScanCodeEvent {
    scanCode: number;
    direction: 'up' | 'down';
}
export interface KeyboardHost {
    textChunks(listener: (input: string) => void): ReadableStream<string>;
    textStream(listener: (input: TextStream) => void): ReadableStream<TextStream>;
    scanCodeStream(listener: (input: ScanCodeEvent) => void): ReadableStream<ScanCodeEvent>;
    hotKeyStream(hotKeys: HotKeyRequest[], listener: (input: HotKeyEvent) => void): ReadableStream<HotKeyEvent>;
}
