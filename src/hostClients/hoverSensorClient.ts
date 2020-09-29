import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { HoverClient } from '../grpc/hover_grpc_pb';
import messages from '../grpc/hover_pb';
import { HoverHost, HoverReadRequest, HoverResponse } from './hoverHost';
import { StoppableStream, StreamListener } from './stoppableStream';
import { TransformingStream } from './transformingStream';

/**
 * @param request
 * @param message
 */
function updateRequest<
  T extends messages.HoverReadRequest | messages.HoverReadStreamRequest
>(request: HoverReadRequest, message: T): T {
  return message
    .setXfromcenter(request.xFromCenter)
    .setYfromcenter(request.yFromCenter) as T;
}

export class HoverSensorClient
  extends GRPCClient<HoverClient>
  implements HoverHost {
  protected generateClient(): GRPCClientConstructor<HoverClient> {
    return HoverClient;
  }

  queryHover(params: HoverReadRequest): Promise<HoverResponse> {
    return this.buildQuery<
      messages.HoverReadRequest,
      messages.HoverReadResponse,
      HoverResponse
    >(
      (message, callback) => {
        this.client.hoverRead(message, callback);
      },
      () => updateRequest(params, new messages.HoverReadRequest()),
      (response) => ({ text: response.getText() }),
    );
  }

  streamHover(
    params: HoverReadRequest,
    listener: StreamListener<HoverResponse>,
  ): StoppableStream<HoverResponse> {
    const message = updateRequest(
      params,
      new messages.HoverReadStreamRequest(),
    );
    return new TransformingStream(
      this.client.hoverReadStream(message),
      (response) => ({ text: response.getText() }),
      listener,
    );
  }
}
