// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var health_pb = require('./health_pb.js');

function serialize_proto_HealthCheckRequest(arg) {
  if (!(arg instanceof health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type proto.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_HealthCheckRequest(buffer_arg) {
  return health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_HealthCheckResponse(arg) {
  if (!(arg instanceof health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type proto.HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_HealthCheckResponse(buffer_arg) {
  return health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthService = exports.HealthService = {
  check: {
    path: '/proto.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.HealthCheckRequest,
    responseType: health_pb.HealthCheckResponse,
    requestSerialize: serialize_proto_HealthCheckRequest,
    requestDeserialize: deserialize_proto_HealthCheckRequest,
    responseSerialize: serialize_proto_HealthCheckResponse,
    responseDeserialize: deserialize_proto_HealthCheckResponse,
  },
  watch: {
    path: '/proto.Health/Watch',
    requestStream: false,
    responseStream: true,
    requestType: health_pb.HealthCheckRequest,
    responseType: health_pb.HealthCheckResponse,
    requestSerialize: serialize_proto_HealthCheckRequest,
    requestDeserialize: deserialize_proto_HealthCheckRequest,
    responseSerialize: serialize_proto_HealthCheckResponse,
    responseDeserialize: deserialize_proto_HealthCheckResponse,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
