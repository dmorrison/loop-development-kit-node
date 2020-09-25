import HostClient, { GRPCClientConstructor } from './hostClient';
import { ClipboardClient } from '../proto/clipboard_grpc_pb';
export declare class ClipboardSensorClient extends HostClient<ClipboardClient> {
    protected generateClient(): GRPCClientConstructor<ClipboardClient>;
}
