import { ConnInfo } from './proto/broker_pb';
import { CommonHostServer } from './commonHostServer';
import { CommonHostClient } from './commonHostClient';

/**
 * @internal
 */
export default abstract class GrpcHostClient<THost extends CommonHostServer>
  implements CommonHostClient {
  private _client: THost | undefined;

  protected abstract generateClient(address: string): THost;

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

      this.client = this.generateClient(address);

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
