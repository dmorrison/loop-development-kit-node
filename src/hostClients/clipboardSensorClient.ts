import HostClient, { GRPCClientConstructor } from './hostClient';
import { ClipboardClient } from '../proto/clipboard_grpc_pb';

export class ClipboardSensorClient extends HostClient<ClipboardClient> {
  protected generateClient(): GRPCClientConstructor<ClipboardClient> {
    return ClipboardClient;
  }
}
