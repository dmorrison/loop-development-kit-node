// package: proto
// file: process.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as process_pb from "./process_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProcessService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    processDiffStream: IProcessService_IProcessDiffStream;
    processList: IProcessService_IProcessList;
}

interface IProcessService_IProcessDiffStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, process_pb.ProcessDiffStreamResponse> {
    path: string; // "/proto.Process/ProcessDiffStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<process_pb.ProcessDiffStreamResponse>;
    responseDeserialize: grpc.deserialize<process_pb.ProcessDiffStreamResponse>;
}
interface IProcessService_IProcessList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, process_pb.ProcessListResponse> {
    path: string; // "/proto.Process/ProcessList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<process_pb.ProcessListResponse>;
    responseDeserialize: grpc.deserialize<process_pb.ProcessListResponse>;
}

export const ProcessService: IProcessService;

export interface IProcessServer {
    processDiffStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, process_pb.ProcessDiffStreamResponse>;
    processList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, process_pb.ProcessListResponse>;
}

export interface IProcessClient {
    processDiffStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<process_pb.ProcessDiffStreamResponse>;
    processDiffStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<process_pb.ProcessDiffStreamResponse>;
    processList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
    processList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
    processList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
}

export class ProcessClient extends grpc.Client implements IProcessClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public processDiffStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<process_pb.ProcessDiffStreamResponse>;
    public processDiffStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<process_pb.ProcessDiffStreamResponse>;
    public processList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
    public processList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
    public processList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: process_pb.ProcessListResponse) => void): grpc.ClientUnaryCall;
}

export { grpc }
