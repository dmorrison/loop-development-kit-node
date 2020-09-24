import { ConnInfo } from './proto/broker_pb';
import { CommonHostServer } from './commonHostServer';
import { CommonHostClient } from './commonHostClient';
/**
 * @internal
 */
export default abstract class GrpcHostClient<THost extends CommonHostServer> implements CommonHostClient {
    private _client;
    protected abstract generateClient(address: string): THost;
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
