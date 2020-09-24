import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { grpc, KeyboardClient } from './proto/keyboard_grpc_pb';
import messages from './proto/keyboard_pb';
import GrpcHostClient from './grpcHostClient';
import {
  StreamTransformer,
  TransformingStreamer,
} from './transformingStreamer';
import { ReadableStream } from './readableStream';

interface KeyboardModifiers {
  altL: boolean;
  altR: boolean;
  ctrlL: boolean;
  ctrlR: boolean;
  metaL: boolean;
  metaR: boolean;
  shiftL: boolean;
  shiftR: boolean;
}

interface TextStream {
  text: string;
  modifiers: KeyboardModifiers | null;
}

interface KeyboardHost {
  textChunks(listener: (input: string) => void): ReadableStream<string>;
  textStream(listener: (input: TextStream) => void): ReadableStream<TextStream>;
}

const transformTextStream: StreamTransformer<
  messages.KeyboardTextStreamResponse,
  TextStream
> = (message) => {
  let modifiers: KeyboardModifiers | null = null;
  if (message.hasModifiers()) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const mods = message.getModifiers()!;
    modifiers = {
      ctrlL: mods.getCtrll(),
      ctrlR: mods.getCtrlr(),
      altL: mods.getAltl(),
      altR: mods.getAltr(),
      shiftL: mods.getShiftl(),
      shiftR: mods.getShiftr(),
      metaL: mods.getMetal(),
      metaR: mods.getMetar(),
    };
  }
  return {
    text: message.getText(),
    modifiers,
  };
};

class KeyboardGrpcHostClient
  extends GrpcHostClient<KeyboardClient>
  implements KeyboardHost {
  textChunks(): ReadableStream<string> {
    return new TransformingStreamer(
      this.client.keyboardTextChunkStream(new Empty()),
      (response) => response.getText(),
    );
  }

  protected generateClient(address: string): KeyboardClient {
    return new KeyboardClient(address, grpc.credentials.createInsecure());
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
}
