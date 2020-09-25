import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { grpc, KeyboardClient } from '../proto/keyboard_grpc_pb';
import messages from '../proto/keyboard_pb';
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
import Constructable = jest.Constructable;

const transformTextStream: StreamTransformer<
  messages.KeyboardTextStreamResponse,
  TextStream
> = (message) => {
  let modifiers: KeyboardModifiers | null = null;
  if (message.hasModifiers()) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const mods = message.getModifiers()!.toObject();
    modifiers = {
      ctrlL: mods.ctrll,
      ctrlR: mods.ctrlr,
      altL: mods.altl,
      altR: mods.altr,
      shiftL: mods.shiftl,
      shiftR: mods.shiftr,
      metaL: mods.metal,
      metaR: mods.metar,
    };
  }
  return {
    text: message.getText(),
    modifiers,
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
    const modifiers = new messages.KeyboardModifiers();
    modifiers.setAltl(keyRequest.modifiers.altL ?? false);
    modifiers.setAltr(keyRequest.modifiers.altR ?? false);
    modifiers.setCtrll(keyRequest.modifiers.ctrlL ?? false);
    modifiers.setCtrlr(keyRequest.modifiers.ctrlR ?? false);
    modifiers.setShiftl(keyRequest.modifiers.shiftL ?? false);
    modifiers.setShiftr(keyRequest.modifiers.shiftR ?? false);
    modifiers.setMetal(keyRequest.modifiers.metaL ?? false);
    modifiers.setMetar(keyRequest.modifiers.metaR ?? false);
    request.setScancode(keyRequest.scanCode);
    request.setModifiers(modifiers);
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
  hotKeyStream(
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

  textChunks(): ReadableStream<string> {
    return new TransformingStream(
      this.client.keyboardTextChunkStream(new Empty()),
      (response) => response.getText(),
    );
  }

  textStream(
    listener: (input: TextStream) => void,
  ): ReadableStream<TextStream> {
    return new TransformingStream(
      this.client.keyboardTextStream(new Empty()),
      transformTextStream,
      listener,
    );
  }

  scanCodeStream(
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
