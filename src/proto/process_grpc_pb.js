// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var process_pb = require('./process_pb.js');
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

function serialize_proto_ProcessDiffStreamResponse(arg) {
  if (!(arg instanceof process_pb.ProcessDiffStreamResponse)) {
    throw new Error('Expected argument of type proto.ProcessDiffStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ProcessDiffStreamResponse(buffer_arg) {
  return process_pb.ProcessDiffStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ProcessListResponse(arg) {
  if (!(arg instanceof process_pb.ProcessListResponse)) {
    throw new Error('Expected argument of type proto.ProcessListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ProcessListResponse(buffer_arg) {
  return process_pb.ProcessListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProcessService = exports.ProcessService = {
  // stream updates to processes as they happen
processDiffStream: {
    path: '/proto.Process/ProcessDiffStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: process_pb.ProcessDiffStreamResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_proto_ProcessDiffStreamResponse,
    responseDeserialize: deserialize_proto_ProcessDiffStreamResponse,
  },
  // get a list of all processes
processList: {
    path: '/proto.Process/ProcessList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: process_pb.ProcessListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_proto_ProcessListResponse,
    responseDeserialize: deserialize_proto_ProcessListResponse,
  },
};

exports.ProcessClient = grpc.makeGenericClientConstructor(ProcessService);

exports.grpc = grpc;
