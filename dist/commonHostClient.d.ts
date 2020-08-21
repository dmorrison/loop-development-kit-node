import { ConnInfo } from './proto/broker_pb';
/**
 * @internal
 */
export interface CommonHostClient {
    connect(conn: ConnInfo.AsObject): Promise<void>;
}
