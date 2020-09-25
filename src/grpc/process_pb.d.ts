// package: proto
// file: process.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ProcessInfo extends jspb.Message { 
    getPid(): number;
    setPid(value: number): ProcessInfo;

    getCommand(): string;
    setCommand(value: string): ProcessInfo;

    getArguments(): string;
    setArguments(value: string): ProcessInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessInfo): ProcessInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessInfo;
    static deserializeBinaryFromReader(message: ProcessInfo, reader: jspb.BinaryReader): ProcessInfo;
}

export namespace ProcessInfo {
    export type AsObject = {
        pid: number,
        command: string,
        arguments: string,
    }
}

export class ProcessDiffStreamResponse extends jspb.Message { 
    getProcess(): string;
    setProcess(value: string): ProcessDiffStreamResponse;

    getAction(): ProcessAction;
    setAction(value: ProcessAction): ProcessDiffStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessDiffStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessDiffStreamResponse): ProcessDiffStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessDiffStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessDiffStreamResponse;
    static deserializeBinaryFromReader(message: ProcessDiffStreamResponse, reader: jspb.BinaryReader): ProcessDiffStreamResponse;
}

export namespace ProcessDiffStreamResponse {
    export type AsObject = {
        process: string,
        action: ProcessAction,
    }
}

export class ProcessListResponse extends jspb.Message { 
    clearProcessesList(): void;
    getProcessesList(): Array<string>;
    setProcessesList(value: Array<string>): ProcessListResponse;
    addProcesses(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessListResponse): ProcessListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessListResponse;
    static deserializeBinaryFromReader(message: ProcessListResponse, reader: jspb.BinaryReader): ProcessListResponse;
}

export namespace ProcessListResponse {
    export type AsObject = {
        processesList: Array<string>,
    }
}

export enum ProcessAction {
    PROCESS_ACTION_UNKNOWN = 0,
    PROCESS_ACTION_STARTED = 1,
    PROCESS_ACTION_STOPPED = 2,
}
