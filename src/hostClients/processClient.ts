import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { ProcessClient as ProcessGRPCClient } from '../grpc/process_grpc_pb';
import Messages, { ProcessAction } from '../grpc/process_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import {
  ProcessService,
  ProcessInfoResponse,
  ProcessListResponse,
  ProcessStreamAction,
  ProcessStreamResponse,
} from './processService';
import { StoppableStream } from './stoppableStream';
import { TransformingStream } from './transformingStream';

/**
 * @param info
 */
function parseProcessInfo(info: Messages.ProcessInfo): ProcessInfoResponse {
  return info.toObject();
}

/**
 * @param action
 */
function parseProcessAction(
  action: Messages.ProcessAction,
): ProcessStreamAction {
  switch (action) {
    case ProcessAction.PROCESS_ACTION_STARTED:
      return ProcessStreamAction.Started;
    case ProcessAction.PROCESS_ACTION_STOPPED:
      return ProcessStreamAction.Stopped;
    case ProcessAction.PROCESS_ACTION_UNKNOWN:
    default:
      return ProcessStreamAction.Unknown;
  }
}

export class ProcessClient
  extends GRPCClient<ProcessGRPCClient>
  implements ProcessService {
  protected generateClient(): GRPCClientConstructor<ProcessGRPCClient> {
    return ProcessGRPCClient;
  }

  queryProcesses(): Promise<ProcessListResponse> {
    return this.buildQuery<
      Empty,
      Messages.ProcessStateResponse,
      ProcessListResponse
    >(
      (message, callback) => {
        this.client.processState(message, callback);
      },
      () => new Empty(),
      (response) => ({
        processes: response
          .getProcessesList()
          .map((processInfo) => parseProcessInfo(processInfo)),
      }),
    );
  }

  streamProcesses(): StoppableStream<ProcessStreamResponse> {
    return new TransformingStream<
      Messages.ProcessStateStreamResponse,
      ProcessStreamResponse
    >(this.client.processStateStream(new Empty()), (message) => {
      const processRaw = message.getProcess();
      if (processRaw == null) {
        return undefined;
      }
      return {
        process: parseProcessInfo(processRaw),
        action: parseProcessAction(message.getAction()),
      };
    });
  }
}
