// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('@grpc/grpc-js');
var window_pb = require('./window_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
function serialize_google_protobuf_Empty(arg) {
    if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
        throw new Error('Expected argument of type google.protobuf.Empty');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_google_protobuf_Empty(buffer_arg) {
    return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_WindowActiveWindowResponse(arg) {
    if (!(arg instanceof window_pb.WindowActiveWindowResponse)) {
        throw new Error('Expected argument of type proto.WindowActiveWindowResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_WindowActiveWindowResponse(buffer_arg) {
    return window_pb.WindowActiveWindowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_WindowActiveWindowStreamResponse(arg) {
    if (!(arg instanceof window_pb.WindowActiveWindowStreamResponse)) {
        throw new Error('Expected argument of type proto.WindowActiveWindowStreamResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_WindowActiveWindowStreamResponse(buffer_arg) {
    return window_pb.WindowActiveWindowStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_WindowWindowsResponse(arg) {
    if (!(arg instanceof window_pb.WindowWindowsResponse)) {
        throw new Error('Expected argument of type proto.WindowWindowsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_WindowWindowsResponse(buffer_arg) {
    return window_pb.WindowWindowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_WindowWindowsStreamResponse(arg) {
    if (!(arg instanceof window_pb.WindowWindowsStreamResponse)) {
        throw new Error('Expected argument of type proto.WindowWindowsStreamResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_WindowWindowsStreamResponse(buffer_arg) {
    return window_pb.WindowWindowsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
var WindowService = exports.WindowService = {
    // get information about currently focused window
    windowActiveWindow: {
        path: '/proto.Window/WindowActiveWindow',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: window_pb.WindowActiveWindowResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_proto_WindowActiveWindowResponse,
        responseDeserialize: deserialize_proto_WindowActiveWindowResponse,
    },
    // stream information about currently focused window as it changes
    windowActiveWindowStream: {
        path: '/proto.Window/WindowActiveWindowStream',
        requestStream: false,
        responseStream: true,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: window_pb.WindowActiveWindowStreamResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_proto_WindowActiveWindowStreamResponse,
        responseDeserialize: deserialize_proto_WindowActiveWindowStreamResponse,
    },
    // get information about all windows
    windowWindows: {
        path: '/proto.Window/WindowWindows',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: window_pb.WindowWindowsResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_proto_WindowWindowsResponse,
        responseDeserialize: deserialize_proto_WindowWindowsResponse,
    },
    // get information about windows as they change
    windowWindowsStream: {
        path: '/proto.Window/WindowWindowsStream',
        requestStream: false,
        responseStream: true,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: window_pb.WindowWindowsStreamResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_proto_WindowWindowsStreamResponse,
        responseDeserialize: deserialize_proto_WindowWindowsStreamResponse,
    },
};
exports.WindowClient = grpc.makeGenericClientConstructor(WindowService);
exports.grpc = grpc;
