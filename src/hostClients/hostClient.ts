import { ConnInfo } from '../proto/broker_pb';
import { CommonHostServer } from '../commonHostServer';
import { CommonHostClient } from './commonHostClient';
import { grpc } from '../proto/broker_grpc_pb';

export interface GRPCClientConstructor<T> {
  new (
    address: string,
    credentials: grpc.ChannelCredentials,
    // eslint-disable-next-line @typescript-eslint/ban-types
    options?: object,
  ): T;
}

/**
 * HostClient classes are responsible for connecting to, and making requests to client services (storage, sending whispers, sensors).
 *
 * They handle the abstraction of the services provided by Helps and hide the implementation details of how the LDK communicates with Helps.
 *
 * @internal
 */
export default abstract class HostClient<THost extends CommonHostServer>
  implements CommonHostClient {
  private _client: THost | undefined;

  protected abstract generateClient(): GRPCClientConstructor<THost>;

  /**
   * Establish a connection to the host process.
   *
   * @async
   * @param connInfo - An object containing host process connection information.
   */
  connect(connInfo: ConnInfo.AsObject): Promise<void> {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
        address = connInfo.address;
      }
      const ClientConstructor = this.generateClient();
      this.client = new ClientConstructor(
        address,
        grpc.credentials.createInsecure(),
      );

      // set a 5 second deadline
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      this.client.waitForReady(deadline, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }

  protected get client(): THost {
    if (this._client === undefined) {
      throw new Error('Accessing client before connected');
    }
    return this._client;
  }

  protected set client(client: THost) {
    this._client = client;
  }
}
