import * as grpc from '@grpc/grpc-js';
import { Deadline } from '@grpc/grpc-js';
import * as Messages from './proto/ldk_pb';

export type Request<
  TRequestType = Messages.Empty,
  TResponseType = Messages.Empty
> = (
  request: TRequestType,
  callback: (error: grpc.ServiceError | null, response: TResponseType) => void,
) => void;

/**
 * @internal
 */
export interface CommonHostServer {
  waitForReady(deadline: Deadline, callback: (error?: Error) => void): void;

  storageDelete: Request<Messages.StorageDeleteRequest>;
  storageDeleteAll: Request;
  storageHasKey: Request<
    Messages.StorageHasKeyRequest,
    Messages.StorageHasKeyResponse
  >;
  storageKeys: Request<Messages.Empty, Messages.StorageKeysResponse>;
  storageRead: Request<
    Messages.StorageReadRequest,
    Messages.StorageReadResponse
  >;
  storageReadAll: Request<Messages.Empty, Messages.StorageReadAllResponse>;
  storageWrite: Request<Messages.StorageWriteRequest>;
}
