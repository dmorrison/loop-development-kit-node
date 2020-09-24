import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { grpc, KeyboardClient } from './proto/keyboard_grpc_pb';
import messages from './proto/keyboard_pb';
import GrpcHostClient from './grpcHostClient';
import {
  StreamTransformer,
  TransformingStreamer,
} from './transformingStreamer';
import { ReadableStream } from './readableStream';
import {
  HotKeyEvent,
  HotKeyRequest,
  KeyboardHost,
  KeyboardModifiers,
  ScanCodeEvent,
  TextStream,
} from './keyboardHost';

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
 * @param keys
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

export default class KeyboardGrpcHostClient
  extends GrpcHostClient<KeyboardClient>
  implements KeyboardHost {
  hotKeyStream(
    hotKeys: HotKeyRequest[],
    listener: (input: HotKeyEvent) => void,
  ): ReadableStream<HotKeyEvent> {
    const message = generateHotkeyStreamRequest(hotKeys);
    return new TransformingStreamer(
      this.client.keyboardHotkeyStream(message),
      transformHotKeyEvent,
      listener,
    );
  }

  textChunks(): ReadableStream<string> {
    return new TransformingStreamer(
      this.client.keyboardTextChunkStream(new Empty()),
      (response) => response.getText(),
    );
  }

  textStream(
    listener: (input: TextStream) => void,
  ): ReadableStream<TextStream> {
    return new TransformingStreamer(
      this.client.keyboardTextStream(new Empty()),
      transformTextStream,
      listener,
    );
  }

  scanCodeStream(
    listener: (input: ScanCodeEvent) => void,
  ): ReadableStream<ScanCodeEvent> {
    return new TransformingStreamer(
      this.client.keyboardScancodeStream(new Empty()),
      transformScanCodeStream,
      listener,
    );
  }

  protected generateClient(address: string): KeyboardClient {
    return new KeyboardClient(address, grpc.credentials.createInsecure());
  }
}
