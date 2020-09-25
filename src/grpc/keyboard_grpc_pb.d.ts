// package: proto
// file: keyboard.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as keyboard_pb from "./keyboard_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IKeyboardService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    keyboardHotkeyStream: IKeyboardService_IKeyboardHotkeyStream;
    keyboardScancodeStream: IKeyboardService_IKeyboardScancodeStream;
    keyboardTextChunkStream: IKeyboardService_IKeyboardTextChunkStream;
    keyboardTextStream: IKeyboardService_IKeyboardTextStream;
}

interface IKeyboardService_IKeyboardHotkeyStream extends grpc.MethodDefinition<keyboard_pb.KeyboardHotkeyStreamRequest, keyboard_pb.KeyboardHotkeyStreamResponse> {
    path: string; // "/proto.Keyboard/KeyboardHotkeyStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<keyboard_pb.KeyboardHotkeyStreamRequest>;
    requestDeserialize: grpc.deserialize<keyboard_pb.KeyboardHotkeyStreamRequest>;
    responseSerialize: grpc.serialize<keyboard_pb.KeyboardHotkeyStreamResponse>;
    responseDeserialize: grpc.deserialize<keyboard_pb.KeyboardHotkeyStreamResponse>;
}
interface IKeyboardService_IKeyboardScancodeStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardScancodeStreamResponse> {
    path: string; // "/proto.Keyboard/KeyboardScancodeStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<keyboard_pb.KeyboardScancodeStreamResponse>;
    responseDeserialize: grpc.deserialize<keyboard_pb.KeyboardScancodeStreamResponse>;
}
interface IKeyboardService_IKeyboardTextChunkStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardTextChunkStreamResponse> {
    path: string; // "/proto.Keyboard/KeyboardTextChunkStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<keyboard_pb.KeyboardTextChunkStreamResponse>;
    responseDeserialize: grpc.deserialize<keyboard_pb.KeyboardTextChunkStreamResponse>;
}
interface IKeyboardService_IKeyboardTextStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardTextStreamResponse> {
    path: string; // "/proto.Keyboard/KeyboardTextStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<keyboard_pb.KeyboardTextStreamResponse>;
    responseDeserialize: grpc.deserialize<keyboard_pb.KeyboardTextStreamResponse>;
}

export const KeyboardService: IKeyboardService;

export interface IKeyboardServer {
    keyboardHotkeyStream: grpc.handleServerStreamingCall<keyboard_pb.KeyboardHotkeyStreamRequest, keyboard_pb.KeyboardHotkeyStreamResponse>;
    keyboardScancodeStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardScancodeStreamResponse>;
    keyboardTextChunkStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardTextChunkStreamResponse>;
    keyboardTextStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, keyboard_pb.KeyboardTextStreamResponse>;
}

export interface IKeyboardClient {
    keyboardHotkeyStream(request: keyboard_pb.KeyboardHotkeyStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardHotkeyStreamResponse>;
    keyboardHotkeyStream(request: keyboard_pb.KeyboardHotkeyStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardHotkeyStreamResponse>;
    keyboardScancodeStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardScancodeStreamResponse>;
    keyboardScancodeStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardScancodeStreamResponse>;
    keyboardTextChunkStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextChunkStreamResponse>;
    keyboardTextChunkStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextChunkStreamResponse>;
    keyboardTextStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextStreamResponse>;
    keyboardTextStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextStreamResponse>;
}

export class KeyboardClient extends grpc.Client implements IKeyboardClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public keyboardHotkeyStream(request: keyboard_pb.KeyboardHotkeyStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardHotkeyStreamResponse>;
    public keyboardHotkeyStream(request: keyboard_pb.KeyboardHotkeyStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardHotkeyStreamResponse>;
    public keyboardScancodeStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardScancodeStreamResponse>;
    public keyboardScancodeStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardScancodeStreamResponse>;
    public keyboardTextChunkStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextChunkStreamResponse>;
    public keyboardTextChunkStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextChunkStreamResponse>;
    public keyboardTextStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextStreamResponse>;
    public keyboardTextStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<keyboard_pb.KeyboardTextStreamResponse>;
}

export { grpc }
