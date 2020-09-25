import { ConnInfo } from '../grpc/broker_pb';
import { CommonHostServer } from '../commonHostServer';
import { CommonHostClient } from './commonHostClient';
import { grpc } from '../grpc/broker_grpc_pb';
export interface GRPCClientConstructor<T> {
    new (address: string, credentials: grpc.ChannelCredentials, options?: object): T;
}
/**
 * HostClient classes are responsible for connecting to, and making requests to client services (storage, sending whispers, sensors).
 *
 * They handle the abstraction of the services provided by Helps and hide the implementation details of how the LDK communicates with Helps.
 *
 * @internal
 */
export default abstract class HostClient<THost extends CommonHostServer> implements CommonHostClient {
    private _client;
    protected abstract generateClient(): GRPCClientConstructor<THost>;
    /**
     * Establish a connection to the host process.
     *
     * @async
     * @param connInfo - An object containing host process connection information.
     */
    connect(connInfo: ConnInfo.AsObject): Promise<void>;
    protected get client(): THost;
    protected set client(client: THost);
}
