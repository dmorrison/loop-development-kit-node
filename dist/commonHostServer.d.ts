import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from '@grpc/grpc-js';
import { Deadline } from '@grpc/grpc-js';
import * as Messages from './grpc/storage_pb';
export declare type Request<TRequestType = Empty, TResponseType = Empty> = (request: TRequestType, callback: (error: grpc.ServiceError | null, response: TResponseType) => void) => void;
/**
 * @internal
 */
export interface CommonHostServer {
    waitForReady(deadline: Deadline, callback: (error?: Error) => void): void;
}
export interface StorageHostServer {
    storageDelete: Request<Messages.StorageDeleteRequest>;
    storageDeleteAll: Request;
    storageHasKey: Request<Messages.StorageHasKeyRequest, Messages.StorageHasKeyResponse>;
    storageKeys: Request<Empty, Messages.StorageKeysResponse>;
    storageRead: Request<Messages.StorageReadRequest, Messages.StorageReadResponse>;
    storageReadAll: Request<Empty, Messages.StorageReadAllResponse>;
    storageWrite: Request<Messages.StorageWriteRequest>;
}
