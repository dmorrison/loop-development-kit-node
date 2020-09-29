import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { CursorClient } from '../grpc/cursor_grpc_pb';
import messages from '../grpc/cursor_pb';
import { CursorHost, CursorResponse } from './cursorHost';
import { StreamTransformer, TransformingStream } from './transformingStream';
import { StoppableStream, StreamListener } from './stoppableStream';

const cursorTransformer: StreamTransformer<
  messages.CursorPositionStreamResponse | messages.CursorPositionResponse,
  CursorResponse
> = (message) => {
  return {
    screen: message.getScreen(),
    x: message.getX(),
    y: message.getY(),
  };
};

export class CursorHostClient
  extends GRPCClient<CursorClient>
  implements CursorHost {
  protected generateClient(): GRPCClientConstructor<CursorClient> {
    return CursorClient;
  }

  queryCursorPosition(): Promise<CursorResponse> {
    return this.buildQuery<
      Empty,
      messages.CursorPositionResponse,
      CursorResponse
    >(
      (message, callback) => this.client.cursorPosition(message, callback),
      () => new Empty(),
      cursorTransformer,
    );
  }

  streamCursorPosition(
    listener: StreamListener<CursorResponse>,
  ): StoppableStream<CursorResponse> {
    return new TransformingStream<
      messages.CursorPositionStreamResponse,
      CursorResponse
    >(
      this.client.cursorPositionStream(new Empty()),
      cursorTransformer,
      listener,
    );
  }
}
