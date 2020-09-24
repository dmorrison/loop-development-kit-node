// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var whisper_pb = require('./whisper_pb.js');
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

function serialize_proto_WhisperNewRequest(arg) {
  if (!(arg instanceof whisper_pb.WhisperNewRequest)) {
    throw new Error('Expected argument of type proto.WhisperNewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_WhisperNewRequest(buffer_arg) {
  return whisper_pb.WhisperNewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_WhisperNewResponse(arg) {
  if (!(arg instanceof whisper_pb.WhisperNewResponse)) {
    throw new Error('Expected argument of type proto.WhisperNewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_WhisperNewResponse(buffer_arg) {
  return whisper_pb.WhisperNewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_WhisperUpdateRequest(arg) {
  if (!(arg instanceof whisper_pb.WhisperUpdateRequest)) {
    throw new Error('Expected argument of type proto.WhisperUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_WhisperUpdateRequest(buffer_arg) {
  return whisper_pb.WhisperUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WhisperService = exports.WhisperService = {
  // Send a new whisper
whisperNew: {
    path: '/proto.Whisper/WhisperNew',
    requestStream: false,
    responseStream: false,
    requestType: whisper_pb.WhisperNewRequest,
    responseType: whisper_pb.WhisperNewResponse,
    requestSerialize: serialize_proto_WhisperNewRequest,
    requestDeserialize: deserialize_proto_WhisperNewRequest,
    responseSerialize: serialize_proto_WhisperNewResponse,
    responseDeserialize: deserialize_proto_WhisperNewResponse,
  },
  // Update an existing whisper
whisperUpdate: {
    path: '/proto.Whisper/WhisperUpdate',
    requestStream: false,
    responseStream: false,
    requestType: whisper_pb.WhisperUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_WhisperUpdateRequest,
    requestDeserialize: deserialize_proto_WhisperUpdateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WhisperClient = grpc.makeGenericClientConstructor(WhisperService);

exports.grpc = grpc;
