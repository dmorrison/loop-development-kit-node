export namespace ControllerService {
    namespace start {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof import("./ldk_pb.js").StartRequest;
        export const responseType: typeof import("./ldk_pb.js").Empty;
        export { serialize_proto_StartRequest as requestSerialize };
        export { deserialize_proto_StartRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    namespace stop {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof import("./ldk_pb.js").Empty;
        export { requestType_1 as requestType };
        const responseType_1: typeof import("./ldk_pb.js").Empty;
        export { responseType_1 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    namespace onEvent {
        const path_2: string;
        export { path_2 as path };
        const requestStream_2: boolean;
        export { requestStream_2 as requestStream };
        const responseStream_2: boolean;
        export { responseStream_2 as responseStream };
        const requestType_2: typeof import("./ldk_pb.js").OnEventRequest;
        export { requestType_2 as requestType };
        const responseType_2: typeof import("./ldk_pb.js").Empty;
        export { responseType_2 as responseType };
        export { serialize_proto_OnEventRequest as requestSerialize };
        export { deserialize_proto_OnEventRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
}
export var ControllerClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export namespace SensorService {
    export namespace start_1 {
        const path_3: string;
        export { path_3 as path };
        const requestStream_3: boolean;
        export { requestStream_3 as requestStream };
        const responseStream_3: boolean;
        export { responseStream_3 as responseStream };
        const requestType_3: typeof import("./ldk_pb.js").StartRequest;
        export { requestType_3 as requestType };
        const responseType_3: typeof import("./ldk_pb.js").Empty;
        export { responseType_3 as responseType };
        export { serialize_proto_StartRequest as requestSerialize };
        export { deserialize_proto_StartRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { start_1 as start };
    export namespace stop_1 {
        const path_4: string;
        export { path_4 as path };
        const requestStream_4: boolean;
        export { requestStream_4 as requestStream };
        const responseStream_4: boolean;
        export { responseStream_4 as responseStream };
        const requestType_4: typeof import("./ldk_pb.js").Empty;
        export { requestType_4 as requestType };
        const responseType_4: typeof import("./ldk_pb.js").Empty;
        export { responseType_4 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { stop_1 as stop };
    export namespace onEvent_1 {
        const path_5: string;
        export { path_5 as path };
        const requestStream_5: boolean;
        export { requestStream_5 as requestStream };
        const responseStream_5: boolean;
        export { responseStream_5 as responseStream };
        const requestType_5: typeof import("./ldk_pb.js").OnEventRequest;
        export { requestType_5 as requestType };
        const responseType_5: typeof import("./ldk_pb.js").Empty;
        export { responseType_5 as responseType };
        export { serialize_proto_OnEventRequest as requestSerialize };
        export { deserialize_proto_OnEventRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { onEvent_1 as onEvent };
}
export var SensorClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export namespace ControllerHostService {
    namespace emitWhisper {
        const path_6: string;
        export { path_6 as path };
        const requestStream_6: boolean;
        export { requestStream_6 as requestStream };
        const responseStream_6: boolean;
        export { responseStream_6 as responseStream };
        const requestType_6: typeof import("./ldk_pb.js").EmitWhisperRequest;
        export { requestType_6 as requestType };
        const responseType_6: typeof import("./ldk_pb.js").EmitWhisperResponse;
        export { responseType_6 as responseType };
        export { serialize_proto_EmitWhisperRequest as requestSerialize };
        export { deserialize_proto_EmitWhisperRequest as requestDeserialize };
        export { serialize_proto_EmitWhisperResponse as responseSerialize };
        export { deserialize_proto_EmitWhisperResponse as responseDeserialize };
    }
    namespace storageDelete {
        const path_7: string;
        export { path_7 as path };
        const requestStream_7: boolean;
        export { requestStream_7 as requestStream };
        const responseStream_7: boolean;
        export { responseStream_7 as responseStream };
        const requestType_7: typeof import("./ldk_pb.js").StorageDeleteRequest;
        export { requestType_7 as requestType };
        const responseType_7: typeof import("./ldk_pb.js").Empty;
        export { responseType_7 as responseType };
        export { serialize_proto_StorageDeleteRequest as requestSerialize };
        export { deserialize_proto_StorageDeleteRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    namespace storageDeleteAll {
        const path_8: string;
        export { path_8 as path };
        const requestStream_8: boolean;
        export { requestStream_8 as requestStream };
        const responseStream_8: boolean;
        export { responseStream_8 as responseStream };
        const requestType_8: typeof import("./ldk_pb.js").Empty;
        export { requestType_8 as requestType };
        const responseType_8: typeof import("./ldk_pb.js").Empty;
        export { responseType_8 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    namespace storageHasKey {
        const path_9: string;
        export { path_9 as path };
        const requestStream_9: boolean;
        export { requestStream_9 as requestStream };
        const responseStream_9: boolean;
        export { responseStream_9 as responseStream };
        const requestType_9: typeof import("./ldk_pb.js").StorageHasKeyRequest;
        export { requestType_9 as requestType };
        const responseType_9: typeof import("./ldk_pb.js").StorageHasKeyResponse;
        export { responseType_9 as responseType };
        export { serialize_proto_StorageHasKeyRequest as requestSerialize };
        export { deserialize_proto_StorageHasKeyRequest as requestDeserialize };
        export { serialize_proto_StorageHasKeyResponse as responseSerialize };
        export { deserialize_proto_StorageHasKeyResponse as responseDeserialize };
    }
    namespace storageKeys {
        const path_10: string;
        export { path_10 as path };
        const requestStream_10: boolean;
        export { requestStream_10 as requestStream };
        const responseStream_10: boolean;
        export { responseStream_10 as responseStream };
        const requestType_10: typeof import("./ldk_pb.js").Empty;
        export { requestType_10 as requestType };
        const responseType_10: typeof import("./ldk_pb.js").StorageKeysResponse;
        export { responseType_10 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_StorageKeysResponse as responseSerialize };
        export { deserialize_proto_StorageKeysResponse as responseDeserialize };
    }
    namespace storageRead {
        const path_11: string;
        export { path_11 as path };
        const requestStream_11: boolean;
        export { requestStream_11 as requestStream };
        const responseStream_11: boolean;
        export { responseStream_11 as responseStream };
        const requestType_11: typeof import("./ldk_pb.js").StorageReadRequest;
        export { requestType_11 as requestType };
        const responseType_11: typeof import("./ldk_pb.js").StorageReadResponse;
        export { responseType_11 as responseType };
        export { serialize_proto_StorageReadRequest as requestSerialize };
        export { deserialize_proto_StorageReadRequest as requestDeserialize };
        export { serialize_proto_StorageReadResponse as responseSerialize };
        export { deserialize_proto_StorageReadResponse as responseDeserialize };
    }
    namespace storageReadAll {
        const path_12: string;
        export { path_12 as path };
        const requestStream_12: boolean;
        export { requestStream_12 as requestStream };
        const responseStream_12: boolean;
        export { responseStream_12 as responseStream };
        const requestType_12: typeof import("./ldk_pb.js").Empty;
        export { requestType_12 as requestType };
        const responseType_12: typeof import("./ldk_pb.js").StorageReadAllResponse;
        export { responseType_12 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_StorageReadAllResponse as responseSerialize };
        export { deserialize_proto_StorageReadAllResponse as responseDeserialize };
    }
    namespace storageWrite {
        const path_13: string;
        export { path_13 as path };
        const requestStream_13: boolean;
        export { requestStream_13 as requestStream };
        const responseStream_13: boolean;
        export { responseStream_13 as responseStream };
        const requestType_13: typeof import("./ldk_pb.js").StorageWriteRequest;
        export { requestType_13 as requestType };
        const responseType_13: typeof import("./ldk_pb.js").Empty;
        export { responseType_13 as responseType };
        export { serialize_proto_StorageWriteRequest as requestSerialize };
        export { deserialize_proto_StorageWriteRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    namespace updateWhisper {
        const path_14: string;
        export { path_14 as path };
        const requestStream_14: boolean;
        export { requestStream_14 as requestStream };
        const responseStream_14: boolean;
        export { responseStream_14 as responseStream };
        const requestType_14: typeof import("./ldk_pb.js").UpdateWhisperRequest;
        export { requestType_14 as requestType };
        const responseType_14: typeof import("./ldk_pb.js").Empty;
        export { responseType_14 as responseType };
        export { serialize_proto_UpdateWhisperRequest as requestSerialize };
        export { deserialize_proto_UpdateWhisperRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
}
export var ControllerHostClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export namespace SensorHostService {
    export namespace emitEvent {
        const path_15: string;
        export { path_15 as path };
        const requestStream_15: boolean;
        export { requestStream_15 as requestStream };
        const responseStream_15: boolean;
        export { responseStream_15 as responseStream };
        const requestType_15: typeof import("./ldk_pb.js").EmitEventRequest;
        export { requestType_15 as requestType };
        const responseType_15: typeof import("./ldk_pb.js").Empty;
        export { responseType_15 as responseType };
        export { serialize_proto_EmitEventRequest as requestSerialize };
        export { deserialize_proto_EmitEventRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export namespace storageDelete_1 {
        const path_16: string;
        export { path_16 as path };
        const requestStream_16: boolean;
        export { requestStream_16 as requestStream };
        const responseStream_16: boolean;
        export { responseStream_16 as responseStream };
        const requestType_16: typeof import("./ldk_pb.js").StorageDeleteRequest;
        export { requestType_16 as requestType };
        const responseType_16: typeof import("./ldk_pb.js").Empty;
        export { responseType_16 as responseType };
        export { serialize_proto_StorageDeleteRequest as requestSerialize };
        export { deserialize_proto_StorageDeleteRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { storageDelete_1 as storageDelete };
    export namespace storageDeleteAll_1 {
        const path_17: string;
        export { path_17 as path };
        const requestStream_17: boolean;
        export { requestStream_17 as requestStream };
        const responseStream_17: boolean;
        export { responseStream_17 as responseStream };
        const requestType_17: typeof import("./ldk_pb.js").Empty;
        export { requestType_17 as requestType };
        const responseType_17: typeof import("./ldk_pb.js").Empty;
        export { responseType_17 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { storageDeleteAll_1 as storageDeleteAll };
    export namespace storageHasKey_1 {
        const path_18: string;
        export { path_18 as path };
        const requestStream_18: boolean;
        export { requestStream_18 as requestStream };
        const responseStream_18: boolean;
        export { responseStream_18 as responseStream };
        const requestType_18: typeof import("./ldk_pb.js").StorageHasKeyRequest;
        export { requestType_18 as requestType };
        const responseType_18: typeof import("./ldk_pb.js").StorageHasKeyResponse;
        export { responseType_18 as responseType };
        export { serialize_proto_StorageHasKeyRequest as requestSerialize };
        export { deserialize_proto_StorageHasKeyRequest as requestDeserialize };
        export { serialize_proto_StorageHasKeyResponse as responseSerialize };
        export { deserialize_proto_StorageHasKeyResponse as responseDeserialize };
    }
    export { storageHasKey_1 as storageHasKey };
    export namespace storageKeys_1 {
        const path_19: string;
        export { path_19 as path };
        const requestStream_19: boolean;
        export { requestStream_19 as requestStream };
        const responseStream_19: boolean;
        export { responseStream_19 as responseStream };
        const requestType_19: typeof import("./ldk_pb.js").Empty;
        export { requestType_19 as requestType };
        const responseType_19: typeof import("./ldk_pb.js").StorageKeysResponse;
        export { responseType_19 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_StorageKeysResponse as responseSerialize };
        export { deserialize_proto_StorageKeysResponse as responseDeserialize };
    }
    export { storageKeys_1 as storageKeys };
    export namespace storageRead_1 {
        const path_20: string;
        export { path_20 as path };
        const requestStream_20: boolean;
        export { requestStream_20 as requestStream };
        const responseStream_20: boolean;
        export { responseStream_20 as responseStream };
        const requestType_20: typeof import("./ldk_pb.js").StorageReadRequest;
        export { requestType_20 as requestType };
        const responseType_20: typeof import("./ldk_pb.js").StorageReadResponse;
        export { responseType_20 as responseType };
        export { serialize_proto_StorageReadRequest as requestSerialize };
        export { deserialize_proto_StorageReadRequest as requestDeserialize };
        export { serialize_proto_StorageReadResponse as responseSerialize };
        export { deserialize_proto_StorageReadResponse as responseDeserialize };
    }
    export { storageRead_1 as storageRead };
    export namespace storageReadAll_1 {
        const path_21: string;
        export { path_21 as path };
        const requestStream_21: boolean;
        export { requestStream_21 as requestStream };
        const responseStream_21: boolean;
        export { responseStream_21 as responseStream };
        const requestType_21: typeof import("./ldk_pb.js").Empty;
        export { requestType_21 as requestType };
        const responseType_21: typeof import("./ldk_pb.js").StorageReadAllResponse;
        export { responseType_21 as responseType };
        export { serialize_proto_Empty as requestSerialize };
        export { deserialize_proto_Empty as requestDeserialize };
        export { serialize_proto_StorageReadAllResponse as responseSerialize };
        export { deserialize_proto_StorageReadAllResponse as responseDeserialize };
    }
    export { storageReadAll_1 as storageReadAll };
    export namespace storageWrite_1 {
        const path_22: string;
        export { path_22 as path };
        const requestStream_22: boolean;
        export { requestStream_22 as requestStream };
        const responseStream_22: boolean;
        export { responseStream_22 as responseStream };
        const requestType_22: typeof import("./ldk_pb.js").StorageWriteRequest;
        export { requestType_22 as requestType };
        const responseType_22: typeof import("./ldk_pb.js").Empty;
        export { responseType_22 as responseType };
        export { serialize_proto_StorageWriteRequest as requestSerialize };
        export { deserialize_proto_StorageWriteRequest as requestDeserialize };
        export { serialize_proto_Empty as responseSerialize };
        export { deserialize_proto_Empty as responseDeserialize };
    }
    export { storageWrite_1 as storageWrite };
}
export var SensorHostClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export var grpc: typeof import("@grpc/grpc-js");
declare function serialize_proto_StartRequest(arg: any): Buffer;
declare function deserialize_proto_StartRequest(buffer_arg: any): import("./ldk_pb.js").StartRequest;
declare function serialize_proto_Empty(arg: any): Buffer;
declare function deserialize_proto_Empty(buffer_arg: any): import("./ldk_pb.js").Empty;
declare function serialize_proto_OnEventRequest(arg: any): Buffer;
declare function deserialize_proto_OnEventRequest(buffer_arg: any): import("./ldk_pb.js").OnEventRequest;
declare function serialize_proto_EmitWhisperRequest(arg: any): Buffer;
declare function deserialize_proto_EmitWhisperRequest(buffer_arg: any): import("./ldk_pb.js").EmitWhisperRequest;
declare function serialize_proto_EmitWhisperResponse(arg: any): Buffer;
declare function deserialize_proto_EmitWhisperResponse(buffer_arg: any): import("./ldk_pb.js").EmitWhisperResponse;
declare function serialize_proto_StorageDeleteRequest(arg: any): Buffer;
declare function deserialize_proto_StorageDeleteRequest(buffer_arg: any): import("./ldk_pb.js").StorageDeleteRequest;
declare function serialize_proto_StorageHasKeyRequest(arg: any): Buffer;
declare function deserialize_proto_StorageHasKeyRequest(buffer_arg: any): import("./ldk_pb.js").StorageHasKeyRequest;
declare function serialize_proto_StorageHasKeyResponse(arg: any): Buffer;
declare function deserialize_proto_StorageHasKeyResponse(buffer_arg: any): import("./ldk_pb.js").StorageHasKeyResponse;
declare function serialize_proto_StorageKeysResponse(arg: any): Buffer;
declare function deserialize_proto_StorageKeysResponse(buffer_arg: any): import("./ldk_pb.js").StorageKeysResponse;
declare function serialize_proto_StorageReadRequest(arg: any): Buffer;
declare function deserialize_proto_StorageReadRequest(buffer_arg: any): import("./ldk_pb.js").StorageReadRequest;
declare function serialize_proto_StorageReadResponse(arg: any): Buffer;
declare function deserialize_proto_StorageReadResponse(buffer_arg: any): import("./ldk_pb.js").StorageReadResponse;
declare function serialize_proto_StorageReadAllResponse(arg: any): Buffer;
declare function deserialize_proto_StorageReadAllResponse(buffer_arg: any): import("./ldk_pb.js").StorageReadAllResponse;
declare function serialize_proto_StorageWriteRequest(arg: any): Buffer;
declare function deserialize_proto_StorageWriteRequest(buffer_arg: any): import("./ldk_pb.js").StorageWriteRequest;
declare function serialize_proto_UpdateWhisperRequest(arg: any): Buffer;
declare function deserialize_proto_UpdateWhisperRequest(buffer_arg: any): import("./ldk_pb.js").UpdateWhisperRequest;
declare function serialize_proto_EmitEventRequest(arg: any): Buffer;
declare function deserialize_proto_EmitEventRequest(buffer_arg: any): import("./ldk_pb.js").EmitEventRequest;
export {};
