import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { KeyboardClient } from '../grpc/keyboard_grpc_pb';
import messages from '../grpc/keyboard_pb';
import HostClient, { GRPCClientConstructor } from './hostClient';
import { StreamTransformer, TransformingStream } from './transformingStream';
import { ReadableStream } from './readableStream';
import {
  HotKeyEvent,
  HotKeyRequest,
  KeyboardHost,
  KeyboardModifiers,
  ScanCodeEvent,
  TextStream,
} from './keyboardHost';

const generateModifierFlag = (
  modifiers: Partial<KeyboardModifiers>,
): number => {
  return (
    (modifiers?.altL ? 1 : 0) +
    (modifiers?.altR ? 2 : 0) +
    (modifiers?.ctrlL ? 4 : 0) +
    (modifiers?.ctrlR ? 8 : 0) +
    (modifiers?.metaL ? 16 : 0) +
    (modifiers?.metaR ? 32 : 0) +
    (modifiers?.shiftL ? 64 : 0) +
    (modifiers?.shiftR ? 128 : 0)
  );
};

const transformTextStream: StreamTransformer<
  messages.KeyboardTextStreamResponse,
  TextStream
> = (message) => {
  return {
    text: message.getText(),
  };
};

const transformScanCodeStream: StreamTransformer<
  messages.KeyboardScancodeStreamResponse,
  ScanCodeEvent
> = (message) => {
  return {
    scanCode: message.getScancode(),
    direction: message.getPressed() ? 'down' : 'up',
  };
};

/**
 * @param keys - The hotkeys being watched.
 */
function generateHotkeyStreamRequest(
  keys: HotKeyRequest[],
): messages.KeyboardHotkeyStreamRequest {
  const keyMessages = keys.map((keyRequest) => {
    const request = new messages.KeyboardHotkey();
    request.setScancode(keyRequest.scanCode);
    request.setModifiers(generateModifierFlag(keyRequest.modifiers));
    return request;
  });
  const message = new messages.KeyboardHotkeyStreamRequest();
  message.setHotkeysList(keyMessages);
  return message;
}

const transformHotKeyEvent: StreamTransformer<
  messages.KeyboardHotkeyStreamResponse,
  HotKeyEvent
> = (message) => {
  return {
    direction: message.getPressed() ? 'down' : 'up',
  };
};

export default class KeyboardSensorClient
  extends HostClient<KeyboardClient>
  implements KeyboardHost {
  streamHotKey(
    hotKeys: HotKeyRequest[],
    listener: (input: HotKeyEvent) => void,
  ): ReadableStream<HotKeyEvent> {
    const message = generateHotkeyStreamRequest(hotKeys);
    return new TransformingStream(
      this.client.keyboardHotkeyStream(message),
      transformHotKeyEvent,
      listener,
    );
  }

  streamText(): ReadableStream<string> {
    return new TransformingStream(
      this.client.keyboardTextStream(new Empty()),
      (response) => response.getText(),
    );
  }

  streamChar(
    listener: (input: TextStream) => void,
  ): ReadableStream<TextStream> {
    return new TransformingStream(
      this.client.keyboardCharacterStream(new Empty()),
      transformTextStream,
      listener,
    );
  }

  streamScanCode(
    listener: (input: ScanCodeEvent) => void,
  ): ReadableStream<ScanCodeEvent> {
    return new TransformingStream(
      this.client.keyboardScancodeStream(new Empty()),
      transformScanCodeStream,
      listener,
    );
  }

  protected generateClient(): GRPCClientConstructor<KeyboardClient> {
    return KeyboardClient;
  }
}
