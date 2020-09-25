// package: proto
// file: whisper.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as whisper_pb from "./whisper_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IWhisperService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    whisperNew: IWhisperService_IWhisperNew;
    whisperUpdate: IWhisperService_IWhisperUpdate;
}

interface IWhisperService_IWhisperNew extends grpc.MethodDefinition<whisper_pb.WhisperNewRequest, whisper_pb.WhisperNewResponse> {
    path: string; // "/proto.Whisper/WhisperNew"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<whisper_pb.WhisperNewRequest>;
    requestDeserialize: grpc.deserialize<whisper_pb.WhisperNewRequest>;
    responseSerialize: grpc.serialize<whisper_pb.WhisperNewResponse>;
    responseDeserialize: grpc.deserialize<whisper_pb.WhisperNewResponse>;
}
interface IWhisperService_IWhisperUpdate extends grpc.MethodDefinition<whisper_pb.WhisperUpdateRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Whisper/WhisperUpdate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<whisper_pb.WhisperUpdateRequest>;
    requestDeserialize: grpc.deserialize<whisper_pb.WhisperUpdateRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const WhisperService: IWhisperService;

export interface IWhisperServer {
    whisperNew: grpc.handleUnaryCall<whisper_pb.WhisperNewRequest, whisper_pb.WhisperNewResponse>;
    whisperUpdate: grpc.handleUnaryCall<whisper_pb.WhisperUpdateRequest, google_protobuf_empty_pb.Empty>;
}

export interface IWhisperClient {
    whisperNew(request: whisper_pb.WhisperNewRequest, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    whisperNew(request: whisper_pb.WhisperNewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    whisperNew(request: whisper_pb.WhisperNewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    whisperUpdate(request: whisper_pb.WhisperUpdateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    whisperUpdate(request: whisper_pb.WhisperUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    whisperUpdate(request: whisper_pb.WhisperUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class WhisperClient extends grpc.Client implements IWhisperClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public whisperNew(request: whisper_pb.WhisperNewRequest, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    public whisperNew(request: whisper_pb.WhisperNewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    public whisperNew(request: whisper_pb.WhisperNewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: whisper_pb.WhisperNewResponse) => void): grpc.ClientUnaryCall;
    public whisperUpdate(request: whisper_pb.WhisperUpdateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public whisperUpdate(request: whisper_pb.WhisperUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public whisperUpdate(request: whisper_pb.WhisperUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
