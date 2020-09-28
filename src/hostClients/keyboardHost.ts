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
}

export interface ScanCodeEvent {
  scanCode: number;
  direction: 'up' | 'down';
}

export interface KeyboardHost {
  streamText(listener: (input: string) => void): ReadableStream<string>;

  streamChar(listener: (input: TextStream) => void): ReadableStream<TextStream>;

  streamScanCode(
    listener: (input: ScanCodeEvent) => void,
  ): ReadableStream<ScanCodeEvent>;

  streamHotKey(
    hotKeys: HotKeyRequest[],
    listener: (input: HotKeyEvent) => void,
  ): ReadableStream<HotKeyEvent>;
}
