// package: proto
// file: ldk.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ldk_pb from "./ldk_pb";

interface IControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    start: IControllerService_IStart;
    stop: IControllerService_IStop;
    onEvent: IControllerService_IOnEvent;
}

interface IControllerService_IStart extends grpc.MethodDefinition<ldk_pb.StartRequest, ldk_pb.Empty> {
    path: string; // "/proto.Controller/Start"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StartRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StartRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface IControllerService_IStop extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.Empty> {
    path: string; // "/proto.Controller/Stop"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface IControllerService_IOnEvent extends grpc.MethodDefinition<ldk_pb.OnEventRequest, ldk_pb.Empty> {
    path: string; // "/proto.Controller/OnEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.OnEventRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.OnEventRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}

export const ControllerService: IControllerService;

export interface IControllerServer {
    start: grpc.handleUnaryCall<ldk_pb.StartRequest, ldk_pb.Empty>;
    stop: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.Empty>;
    onEvent: grpc.handleUnaryCall<ldk_pb.OnEventRequest, ldk_pb.Empty>;
}

export interface IControllerClient {
    start(request: ldk_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ControllerClient extends grpc.Client implements IControllerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public start(request: ldk_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface ISensorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    start: ISensorService_IStart;
    stop: ISensorService_IStop;
    onEvent: ISensorService_IOnEvent;
}

interface ISensorService_IStart extends grpc.MethodDefinition<ldk_pb.StartRequest, ldk_pb.Empty> {
    path: string; // "/proto.Sensor/Start"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StartRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StartRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface ISensorService_IStop extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.Empty> {
    path: string; // "/proto.Sensor/Stop"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface ISensorService_IOnEvent extends grpc.MethodDefinition<ldk_pb.OnEventRequest, ldk_pb.Empty> {
    path: string; // "/proto.Sensor/OnEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.OnEventRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.OnEventRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}

export const SensorService: ISensorService;

export interface ISensorServer {
    start: grpc.handleUnaryCall<ldk_pb.StartRequest, ldk_pb.Empty>;
    stop: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.Empty>;
    onEvent: grpc.handleUnaryCall<ldk_pb.OnEventRequest, ldk_pb.Empty>;
}

export interface ISensorClient {
    start(request: ldk_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    stop(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SensorClient extends grpc.Client implements ISensorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public start(request: ldk_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public start(request: ldk_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public stop(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public onEvent(request: ldk_pb.OnEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface IControllerHostService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    emitWhisper: IControllerHostService_IEmitWhisper;
    storageDelete: IControllerHostService_IStorageDelete;
    storageDeleteAll: IControllerHostService_IStorageDeleteAll;
    storageHasKey: IControllerHostService_IStorageHasKey;
    storageKeys: IControllerHostService_IStorageKeys;
    storageRead: IControllerHostService_IStorageRead;
    storageReadAll: IControllerHostService_IStorageReadAll;
    storageWrite: IControllerHostService_IStorageWrite;
}

interface IControllerHostService_IEmitWhisper extends grpc.MethodDefinition<ldk_pb.EmitWhisperRequest, ldk_pb.Empty> {
    path: string; // "/proto.ControllerHost/EmitWhisper"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.EmitWhisperRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.EmitWhisperRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface IControllerHostService_IStorageDelete extends grpc.MethodDefinition<ldk_pb.StorageDeleteRequest, ldk_pb.Empty> {
    path: string; // "/proto.ControllerHost/StorageDelete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageDeleteRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageDeleteRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface IControllerHostService_IStorageDeleteAll extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.Empty> {
    path: string; // "/proto.ControllerHost/StorageDeleteAll"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface IControllerHostService_IStorageHasKey extends grpc.MethodDefinition<ldk_pb.StorageHasKeyRequest, ldk_pb.StorageHasKeyResponse> {
    path: string; // "/proto.ControllerHost/StorageHasKey"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageHasKeyRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageHasKeyRequest>;
    responseSerialize: grpc.serialize<ldk_pb.StorageHasKeyResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageHasKeyResponse>;
}
interface IControllerHostService_IStorageKeys extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.StorageKeysResponse> {
    path: string; // "/proto.ControllerHost/StorageKeys"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.StorageKeysResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageKeysResponse>;
}
interface IControllerHostService_IStorageRead extends grpc.MethodDefinition<ldk_pb.StorageReadRequest, ldk_pb.StorageReadResponse> {
    path: string; // "/proto.ControllerHost/StorageRead"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageReadRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageReadRequest>;
    responseSerialize: grpc.serialize<ldk_pb.StorageReadResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageReadResponse>;
}
interface IControllerHostService_IStorageReadAll extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.StorageReadAllResponse> {
    path: string; // "/proto.ControllerHost/StorageReadAll"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.StorageReadAllResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageReadAllResponse>;
}
interface IControllerHostService_IStorageWrite extends grpc.MethodDefinition<ldk_pb.StorageWriteRequest, ldk_pb.Empty> {
    path: string; // "/proto.ControllerHost/StorageWrite"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageWriteRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageWriteRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}

export const ControllerHostService: IControllerHostService;

export interface IControllerHostServer {
    emitWhisper: grpc.handleUnaryCall<ldk_pb.EmitWhisperRequest, ldk_pb.Empty>;
    storageDelete: grpc.handleUnaryCall<ldk_pb.StorageDeleteRequest, ldk_pb.Empty>;
    storageDeleteAll: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.Empty>;
    storageHasKey: grpc.handleUnaryCall<ldk_pb.StorageHasKeyRequest, ldk_pb.StorageHasKeyResponse>;
    storageKeys: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.StorageKeysResponse>;
    storageRead: grpc.handleUnaryCall<ldk_pb.StorageReadRequest, ldk_pb.StorageReadResponse>;
    storageReadAll: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.StorageReadAllResponse>;
    storageWrite: grpc.handleUnaryCall<ldk_pb.StorageWriteRequest, ldk_pb.Empty>;
}

export interface IControllerHostClient {
    emitWhisper(request: ldk_pb.EmitWhisperRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    emitWhisper(request: ldk_pb.EmitWhisperRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    emitWhisper(request: ldk_pb.EmitWhisperRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ControllerHostClient extends grpc.Client implements IControllerHostClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public emitWhisper(request: ldk_pb.EmitWhisperRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public emitWhisper(request: ldk_pb.EmitWhisperRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public emitWhisper(request: ldk_pb.EmitWhisperRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface ISensorHostService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    emitEvent: ISensorHostService_IEmitEvent;
    storageDelete: ISensorHostService_IStorageDelete;
    storageDeleteAll: ISensorHostService_IStorageDeleteAll;
    storageHasKey: ISensorHostService_IStorageHasKey;
    storageKeys: ISensorHostService_IStorageKeys;
    storageRead: ISensorHostService_IStorageRead;
    storageReadAll: ISensorHostService_IStorageReadAll;
    storageWrite: ISensorHostService_IStorageWrite;
}

interface ISensorHostService_IEmitEvent extends grpc.MethodDefinition<ldk_pb.EmitEventRequest, ldk_pb.Empty> {
    path: string; // "/proto.SensorHost/EmitEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.EmitEventRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.EmitEventRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface ISensorHostService_IStorageDelete extends grpc.MethodDefinition<ldk_pb.StorageDeleteRequest, ldk_pb.Empty> {
    path: string; // "/proto.SensorHost/StorageDelete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageDeleteRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageDeleteRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface ISensorHostService_IStorageDeleteAll extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.Empty> {
    path: string; // "/proto.SensorHost/StorageDeleteAll"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}
interface ISensorHostService_IStorageHasKey extends grpc.MethodDefinition<ldk_pb.StorageHasKeyRequest, ldk_pb.StorageHasKeyResponse> {
    path: string; // "/proto.SensorHost/StorageHasKey"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageHasKeyRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageHasKeyRequest>;
    responseSerialize: grpc.serialize<ldk_pb.StorageHasKeyResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageHasKeyResponse>;
}
interface ISensorHostService_IStorageKeys extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.StorageKeysResponse> {
    path: string; // "/proto.SensorHost/StorageKeys"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.StorageKeysResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageKeysResponse>;
}
interface ISensorHostService_IStorageRead extends grpc.MethodDefinition<ldk_pb.StorageReadRequest, ldk_pb.StorageReadResponse> {
    path: string; // "/proto.SensorHost/StorageRead"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageReadRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageReadRequest>;
    responseSerialize: grpc.serialize<ldk_pb.StorageReadResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageReadResponse>;
}
interface ISensorHostService_IStorageReadAll extends grpc.MethodDefinition<ldk_pb.Empty, ldk_pb.StorageReadAllResponse> {
    path: string; // "/proto.SensorHost/StorageReadAll"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.Empty>;
    requestDeserialize: grpc.deserialize<ldk_pb.Empty>;
    responseSerialize: grpc.serialize<ldk_pb.StorageReadAllResponse>;
    responseDeserialize: grpc.deserialize<ldk_pb.StorageReadAllResponse>;
}
interface ISensorHostService_IStorageWrite extends grpc.MethodDefinition<ldk_pb.StorageWriteRequest, ldk_pb.Empty> {
    path: string; // "/proto.SensorHost/StorageWrite"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ldk_pb.StorageWriteRequest>;
    requestDeserialize: grpc.deserialize<ldk_pb.StorageWriteRequest>;
    responseSerialize: grpc.serialize<ldk_pb.Empty>;
    responseDeserialize: grpc.deserialize<ldk_pb.Empty>;
}

export const SensorHostService: ISensorHostService;

export interface ISensorHostServer {
    emitEvent: grpc.handleUnaryCall<ldk_pb.EmitEventRequest, ldk_pb.Empty>;
    storageDelete: grpc.handleUnaryCall<ldk_pb.StorageDeleteRequest, ldk_pb.Empty>;
    storageDeleteAll: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.Empty>;
    storageHasKey: grpc.handleUnaryCall<ldk_pb.StorageHasKeyRequest, ldk_pb.StorageHasKeyResponse>;
    storageKeys: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.StorageKeysResponse>;
    storageRead: grpc.handleUnaryCall<ldk_pb.StorageReadRequest, ldk_pb.StorageReadResponse>;
    storageReadAll: grpc.handleUnaryCall<ldk_pb.Empty, ldk_pb.StorageReadAllResponse>;
    storageWrite: grpc.handleUnaryCall<ldk_pb.StorageWriteRequest, ldk_pb.Empty>;
}

export interface ISensorHostClient {
    emitEvent(request: ldk_pb.EmitEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    emitEvent(request: ldk_pb.EmitEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    emitEvent(request: ldk_pb.EmitEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SensorHostClient extends grpc.Client implements ISensorHostClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public emitEvent(request: ldk_pb.EmitEventRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public emitEvent(request: ldk_pb.EmitEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public emitEvent(request: ldk_pb.EmitEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDelete(request: ldk_pb.StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageDeleteAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageHasKey(request: ldk_pb.StorageHasKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageHasKeyResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageKeys(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageKeysResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageRead(request: ldk_pb.StorageReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageReadAll(request: ldk_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.StorageReadAllResponse) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
    public storageWrite(request: ldk_pb.StorageWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ldk_pb.Empty) => void): grpc.ClientUnaryCall;
}

export { grpc }
