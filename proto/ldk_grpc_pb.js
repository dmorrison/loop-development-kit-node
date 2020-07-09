// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ldk_pb = require('./ldk_pb.js');

function serialize_proto_ConfigResponse(arg) {
  if (!(arg instanceof ldk_pb.ConfigResponse)) {
    throw new Error('Expected argument of type proto.ConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigResponse(buffer_arg) {
  return ldk_pb.ConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EmitEventRequest(arg) {
  if (!(arg instanceof ldk_pb.EmitEventRequest)) {
    throw new Error('Expected argument of type proto.EmitEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EmitEventRequest(buffer_arg) {
  return ldk_pb.EmitEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EmitWhisperRequest(arg) {
  if (!(arg instanceof ldk_pb.EmitWhisperRequest)) {
    throw new Error('Expected argument of type proto.EmitWhisperRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EmitWhisperRequest(buffer_arg) {
  return ldk_pb.EmitWhisperRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof ldk_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return ldk_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_OnEventRequest(arg) {
  if (!(arg instanceof ldk_pb.OnEventRequest)) {
    throw new Error('Expected argument of type proto.OnEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_OnEventRequest(buffer_arg) {
  return ldk_pb.OnEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetConfigRequest(arg) {
  if (!(arg instanceof ldk_pb.SetConfigRequest)) {
    throw new Error('Expected argument of type proto.SetConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetConfigRequest(buffer_arg) {
  return ldk_pb.SetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_StartRequest(arg) {
  if (!(arg instanceof ldk_pb.StartRequest)) {
    throw new Error('Expected argument of type proto.StartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_StartRequest(buffer_arg) {
  return ldk_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ControllerService = exports.ControllerService = {
  config: {
    path: '/proto.Controller/Config',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.Empty,
    responseType: ldk_pb.ConfigResponse,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_ConfigResponse,
    responseDeserialize: deserialize_proto_ConfigResponse,
  },
  setConfig: {
    path: '/proto.Controller/SetConfig',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.SetConfigRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_SetConfigRequest,
    requestDeserialize: deserialize_proto_SetConfigRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  start: {
    path: '/proto.Controller/Start',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.StartRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_StartRequest,
    requestDeserialize: deserialize_proto_StartRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  stop: {
    path: '/proto.Controller/Stop',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.Empty,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  onEvent: {
    path: '/proto.Controller/OnEvent',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.OnEventRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_OnEventRequest,
    requestDeserialize: deserialize_proto_OnEventRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.ControllerClient = grpc.makeGenericClientConstructor(ControllerService);
var ControllerHostService = exports.ControllerHostService = {
  emitWhisper: {
    path: '/proto.ControllerHost/EmitWhisper',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.EmitWhisperRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_EmitWhisperRequest,
    requestDeserialize: deserialize_proto_EmitWhisperRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.ControllerHostClient = grpc.makeGenericClientConstructor(ControllerHostService);
var SensorService = exports.SensorService = {
  config: {
    path: '/proto.Sensor/Config',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.Empty,
    responseType: ldk_pb.ConfigResponse,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_ConfigResponse,
    responseDeserialize: deserialize_proto_ConfigResponse,
  },
  setConfig: {
    path: '/proto.Sensor/SetConfig',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.SetConfigRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_SetConfigRequest,
    requestDeserialize: deserialize_proto_SetConfigRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  start: {
    path: '/proto.Sensor/Start',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.StartRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_StartRequest,
    requestDeserialize: deserialize_proto_StartRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  stop: {
    path: '/proto.Sensor/Stop',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.Empty,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  onEvent: {
    path: '/proto.Sensor/OnEvent',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.OnEventRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_OnEventRequest,
    requestDeserialize: deserialize_proto_OnEventRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.SensorClient = grpc.makeGenericClientConstructor(SensorService);
var SensorHostService = exports.SensorHostService = {
  emitEvent: {
    path: '/proto.SensorHost/EmitEvent',
    requestStream: false,
    responseStream: false,
    requestType: ldk_pb.EmitEventRequest,
    responseType: ldk_pb.Empty,
    requestSerialize: serialize_proto_EmitEventRequest,
    requestDeserialize: deserialize_proto_EmitEventRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.SensorHostClient = grpc.makeGenericClientConstructor(SensorHostService);

exports.grpc = grpc;
