export namespace HealthService {
    namespace check {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof import("./health_pb.js").HealthCheckRequest;
        export const responseType: typeof import("./health_pb.js").HealthCheckResponse;
        export { serialize_proto_HealthCheckRequest as requestSerialize };
        export { deserialize_proto_HealthCheckRequest as requestDeserialize };
        export { serialize_proto_HealthCheckResponse as responseSerialize };
        export { deserialize_proto_HealthCheckResponse as responseDeserialize };
    }
    namespace watch {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof import("./health_pb.js").HealthCheckRequest;
        export { requestType_1 as requestType };
        const responseType_1: typeof import("./health_pb.js").HealthCheckResponse;
        export { responseType_1 as responseType };
        export { serialize_proto_HealthCheckRequest as requestSerialize };
        export { deserialize_proto_HealthCheckRequest as requestDeserialize };
        export { serialize_proto_HealthCheckResponse as responseSerialize };
        export { deserialize_proto_HealthCheckResponse as responseDeserialize };
    }
}
export var HealthClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
export var grpc: typeof import("@grpc/grpc-js");
declare function serialize_proto_HealthCheckRequest(arg: any): Buffer;
declare function deserialize_proto_HealthCheckRequest(buffer_arg: any): import("./health_pb.js").HealthCheckRequest;
declare function serialize_proto_HealthCheckResponse(arg: any): Buffer;
declare function deserialize_proto_HealthCheckResponse(buffer_arg: any): import("./health_pb.js").HealthCheckResponse;
export {};
