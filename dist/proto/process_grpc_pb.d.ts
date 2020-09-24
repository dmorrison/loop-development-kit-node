export namespace ProcessService {
    namespace processDiffStream {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        export const responseType: typeof import("./process_pb.js").ProcessDiffStreamResponse;
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_proto_ProcessDiffStreamResponse as responseSerialize };
        export { deserialize_proto_ProcessDiffStreamResponse as responseDeserialize };
    }
    namespace processList {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        export { requestType_1 as requestType };
        const responseType_1: typeof import("./process_pb.js").ProcessListResponse;
        export { responseType_1 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_proto_ProcessListResponse as responseSerialize };
        export { deserialize_proto_ProcessListResponse as responseDeserialize };
    }
}
export var ProcessClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export var grpc: typeof import("@grpc/grpc-js");
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): import("google-protobuf/google/protobuf/empty_pb").Empty;
declare function serialize_proto_ProcessDiffStreamResponse(arg: any): Buffer;
declare function deserialize_proto_ProcessDiffStreamResponse(buffer_arg: any): import("./process_pb.js").ProcessDiffStreamResponse;
declare function serialize_proto_ProcessListResponse(arg: any): Buffer;
declare function deserialize_proto_ProcessListResponse(buffer_arg: any): import("./process_pb.js").ProcessListResponse;
export {};
