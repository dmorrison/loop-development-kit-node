// package: proto
// file: loop.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class LoopStartRequest extends jspb.Message { 
    getHost(): number;
    setHost(value: number): LoopStartRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoopStartRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoopStartRequest): LoopStartRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoopStartRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoopStartRequest;
    static deserializeBinaryFromReader(message: LoopStartRequest, reader: jspb.BinaryReader): LoopStartRequest;
}

export namespace LoopStartRequest {
    export type AsObject = {
        host: number,
    }
}
