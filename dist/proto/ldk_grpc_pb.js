// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('@grpc/grpc-js');
var ldk_pb = require('./ldk_pb.js');
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
function serialize_proto_StartRequest(arg) {
    if (!(arg instanceof ldk_pb.StartRequest)) {
        throw new Error('Expected argument of type proto.StartRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StartRequest(buffer_arg) {
    return ldk_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageDeleteRequest(arg) {
    if (!(arg instanceof ldk_pb.StorageDeleteRequest)) {
        throw new Error('Expected argument of type proto.StorageDeleteRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageDeleteRequest(buffer_arg) {
    return ldk_pb.StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageHasKeyRequest(arg) {
    if (!(arg instanceof ldk_pb.StorageHasKeyRequest)) {
        throw new Error('Expected argument of type proto.StorageHasKeyRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageHasKeyRequest(buffer_arg) {
    return ldk_pb.StorageHasKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageHasKeyResponse(arg) {
    if (!(arg instanceof ldk_pb.StorageHasKeyResponse)) {
        throw new Error('Expected argument of type proto.StorageHasKeyResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageHasKeyResponse(buffer_arg) {
    return ldk_pb.StorageHasKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageKeysResponse(arg) {
    if (!(arg instanceof ldk_pb.StorageKeysResponse)) {
        throw new Error('Expected argument of type proto.StorageKeysResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageKeysResponse(buffer_arg) {
    return ldk_pb.StorageKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageReadAllResponse(arg) {
    if (!(arg instanceof ldk_pb.StorageReadAllResponse)) {
        throw new Error('Expected argument of type proto.StorageReadAllResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageReadAllResponse(buffer_arg) {
    return ldk_pb.StorageReadAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageReadRequest(arg) {
    if (!(arg instanceof ldk_pb.StorageReadRequest)) {
        throw new Error('Expected argument of type proto.StorageReadRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageReadRequest(buffer_arg) {
    return ldk_pb.StorageReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageReadResponse(arg) {
    if (!(arg instanceof ldk_pb.StorageReadResponse)) {
        throw new Error('Expected argument of type proto.StorageReadResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageReadResponse(buffer_arg) {
    return ldk_pb.StorageReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_proto_StorageWriteRequest(arg) {
    if (!(arg instanceof ldk_pb.StorageWriteRequest)) {
        throw new Error('Expected argument of type proto.StorageWriteRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_proto_StorageWriteRequest(buffer_arg) {
    return ldk_pb.StorageWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
var ControllerService = exports.ControllerService = {
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
var SensorService = exports.SensorService = {
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
    storageDelete: {
        path: '/proto.ControllerHost/StorageDelete',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageDeleteRequest,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_StorageDeleteRequest,
        requestDeserialize: deserialize_proto_StorageDeleteRequest,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
    storageDeleteAll: {
        path: '/proto.ControllerHost/StorageDeleteAll',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
    storageHasKey: {
        path: '/proto.ControllerHost/StorageHasKey',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageHasKeyRequest,
        responseType: ldk_pb.StorageHasKeyResponse,
        requestSerialize: serialize_proto_StorageHasKeyRequest,
        requestDeserialize: deserialize_proto_StorageHasKeyRequest,
        responseSerialize: serialize_proto_StorageHasKeyResponse,
        responseDeserialize: deserialize_proto_StorageHasKeyResponse,
    },
    storageKeys: {
        path: '/proto.ControllerHost/StorageKeys',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.StorageKeysResponse,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_StorageKeysResponse,
        responseDeserialize: deserialize_proto_StorageKeysResponse,
    },
    storageRead: {
        path: '/proto.ControllerHost/StorageRead',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageReadRequest,
        responseType: ldk_pb.StorageReadResponse,
        requestSerialize: serialize_proto_StorageReadRequest,
        requestDeserialize: deserialize_proto_StorageReadRequest,
        responseSerialize: serialize_proto_StorageReadResponse,
        responseDeserialize: deserialize_proto_StorageReadResponse,
    },
    storageReadAll: {
        path: '/proto.ControllerHost/StorageReadAll',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.StorageReadAllResponse,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_StorageReadAllResponse,
        responseDeserialize: deserialize_proto_StorageReadAllResponse,
    },
    storageWrite: {
        path: '/proto.ControllerHost/StorageWrite',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageWriteRequest,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_StorageWriteRequest,
        requestDeserialize: deserialize_proto_StorageWriteRequest,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
};
exports.ControllerHostClient = grpc.makeGenericClientConstructor(ControllerHostService);
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
    storageDelete: {
        path: '/proto.SensorHost/StorageDelete',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageDeleteRequest,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_StorageDeleteRequest,
        requestDeserialize: deserialize_proto_StorageDeleteRequest,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
    storageDeleteAll: {
        path: '/proto.SensorHost/StorageDeleteAll',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
    storageHasKey: {
        path: '/proto.SensorHost/StorageHasKey',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageHasKeyRequest,
        responseType: ldk_pb.StorageHasKeyResponse,
        requestSerialize: serialize_proto_StorageHasKeyRequest,
        requestDeserialize: deserialize_proto_StorageHasKeyRequest,
        responseSerialize: serialize_proto_StorageHasKeyResponse,
        responseDeserialize: deserialize_proto_StorageHasKeyResponse,
    },
    storageKeys: {
        path: '/proto.SensorHost/StorageKeys',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.StorageKeysResponse,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_StorageKeysResponse,
        responseDeserialize: deserialize_proto_StorageKeysResponse,
    },
    storageRead: {
        path: '/proto.SensorHost/StorageRead',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageReadRequest,
        responseType: ldk_pb.StorageReadResponse,
        requestSerialize: serialize_proto_StorageReadRequest,
        requestDeserialize: deserialize_proto_StorageReadRequest,
        responseSerialize: serialize_proto_StorageReadResponse,
        responseDeserialize: deserialize_proto_StorageReadResponse,
    },
    storageReadAll: {
        path: '/proto.SensorHost/StorageReadAll',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.Empty,
        responseType: ldk_pb.StorageReadAllResponse,
        requestSerialize: serialize_proto_Empty,
        requestDeserialize: deserialize_proto_Empty,
        responseSerialize: serialize_proto_StorageReadAllResponse,
        responseDeserialize: deserialize_proto_StorageReadAllResponse,
    },
    storageWrite: {
        path: '/proto.SensorHost/StorageWrite',
        requestStream: false,
        responseStream: false,
        requestType: ldk_pb.StorageWriteRequest,
        responseType: ldk_pb.Empty,
        requestSerialize: serialize_proto_StorageWriteRequest,
        requestDeserialize: deserialize_proto_StorageWriteRequest,
        responseSerialize: serialize_proto_Empty,
        responseDeserialize: deserialize_proto_Empty,
    },
};
exports.SensorHostClient = grpc.makeGenericClientConstructor(SensorHostService);
exports.grpc = grpc;
