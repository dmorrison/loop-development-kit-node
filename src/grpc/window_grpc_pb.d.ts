// package: proto
// file: window.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as window_pb from "./window_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IWindowService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    windowActiveWindow: IWindowService_IWindowActiveWindow;
    windowActiveWindowStream: IWindowService_IWindowActiveWindowStream;
    windowWindows: IWindowService_IWindowWindows;
    windowWindowsStream: IWindowService_IWindowWindowsStream;
}

interface IWindowService_IWindowActiveWindow extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, window_pb.WindowActiveWindowResponse> {
    path: string; // "/proto.Window/WindowActiveWindow"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<window_pb.WindowActiveWindowResponse>;
    responseDeserialize: grpc.deserialize<window_pb.WindowActiveWindowResponse>;
}
interface IWindowService_IWindowActiveWindowStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, window_pb.WindowActiveWindowStreamResponse> {
    path: string; // "/proto.Window/WindowActiveWindowStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<window_pb.WindowActiveWindowStreamResponse>;
    responseDeserialize: grpc.deserialize<window_pb.WindowActiveWindowStreamResponse>;
}
interface IWindowService_IWindowWindows extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, window_pb.WindowWindowsResponse> {
    path: string; // "/proto.Window/WindowWindows"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<window_pb.WindowWindowsResponse>;
    responseDeserialize: grpc.deserialize<window_pb.WindowWindowsResponse>;
}
interface IWindowService_IWindowWindowsStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, window_pb.WindowWindowsStreamResponse> {
    path: string; // "/proto.Window/WindowWindowsStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<window_pb.WindowWindowsStreamResponse>;
    responseDeserialize: grpc.deserialize<window_pb.WindowWindowsStreamResponse>;
}

export const WindowService: IWindowService;

export interface IWindowServer {
    windowActiveWindow: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, window_pb.WindowActiveWindowResponse>;
    windowActiveWindowStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, window_pb.WindowActiveWindowStreamResponse>;
    windowWindows: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, window_pb.WindowWindowsResponse>;
    windowWindowsStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, window_pb.WindowWindowsStreamResponse>;
}

export interface IWindowClient {
    windowActiveWindow(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    windowActiveWindow(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    windowActiveWindow(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    windowActiveWindowStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowActiveWindowStreamResponse>;
    windowActiveWindowStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowActiveWindowStreamResponse>;
    windowWindows(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    windowWindows(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    windowWindows(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    windowWindowsStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowWindowsStreamResponse>;
    windowWindowsStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowWindowsStreamResponse>;
}

export class WindowClient extends grpc.Client implements IWindowClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public windowActiveWindow(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    public windowActiveWindow(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    public windowActiveWindow(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: window_pb.WindowActiveWindowResponse) => void): grpc.ClientUnaryCall;
    public windowActiveWindowStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowActiveWindowStreamResponse>;
    public windowActiveWindowStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowActiveWindowStreamResponse>;
    public windowWindows(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    public windowWindows(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    public windowWindows(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: window_pb.WindowWindowsResponse) => void): grpc.ClientUnaryCall;
    public windowWindowsStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowWindowsStreamResponse>;
    public windowWindowsStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<window_pb.WindowWindowsStreamResponse>;
}

export { grpc }
