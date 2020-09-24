export namespace WhisperService {
    namespace whisperNew {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof import("./whisper_pb.js").WhisperNewRequest;
        export const responseType: typeof import("./whisper_pb.js").WhisperNewResponse;
        export { serialize_proto_WhisperNewRequest as requestSerialize };
        export { deserialize_proto_WhisperNewRequest as requestDeserialize };
        export { serialize_proto_WhisperNewResponse as responseSerialize };
        export { deserialize_proto_WhisperNewResponse as responseDeserialize };
    }
    namespace whisperUpdate {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof import("./whisper_pb.js").WhisperUpdateRequest;
        export { requestType_1 as requestType };
        const responseType_1: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        export { responseType_1 as responseType };
        export { serialize_proto_WhisperUpdateRequest as requestSerialize };
        export { deserialize_proto_WhisperUpdateRequest as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
}
export var WhisperClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export var grpc: typeof import("@grpc/grpc-js");
declare function serialize_proto_WhisperNewRequest(arg: any): Buffer;
declare function deserialize_proto_WhisperNewRequest(buffer_arg: any): import("./whisper_pb.js").WhisperNewRequest;
declare function serialize_proto_WhisperNewResponse(arg: any): Buffer;
declare function deserialize_proto_WhisperNewResponse(buffer_arg: any): import("./whisper_pb.js").WhisperNewResponse;
declare function serialize_proto_WhisperUpdateRequest(arg: any): Buffer;
declare function deserialize_proto_WhisperUpdateRequest(buffer_arg: any): import("./whisper_pb.js").WhisperUpdateRequest;
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): import("google-protobuf/google/protobuf/empty_pb").Empty;
export {};
