// package: proto
// file: whisper.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class WhisperStyle extends jspb.Message { 
    getBackgroundcolor(): string;
    setBackgroundcolor(value: string): WhisperStyle;

    getPrimarycolor(): string;
    setPrimarycolor(value: string): WhisperStyle;

    getHighlightcolor(): string;
    setHighlightcolor(value: string): WhisperStyle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperStyle.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperStyle): WhisperStyle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperStyle;
    static deserializeBinaryFromReader(message: WhisperStyle, reader: jspb.BinaryReader): WhisperStyle;
}

export namespace WhisperStyle {
    export type AsObject = {
        backgroundcolor: string,
        primarycolor: string,
        highlightcolor: string,
    }
}

export class WhisperMsg extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): WhisperMsg;

    getMarkdown(): string;
    setMarkdown(value: string): WhisperMsg;

    getIcon(): string;
    setIcon(value: string): WhisperMsg;


    hasStyle(): boolean;
    clearStyle(): void;
    getStyle(): WhisperStyle | undefined;
    setStyle(value?: WhisperStyle): WhisperMsg;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperMsg.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperMsg): WhisperMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperMsg;
    static deserializeBinaryFromReader(message: WhisperMsg, reader: jspb.BinaryReader): WhisperMsg;
}

export namespace WhisperMsg {
    export type AsObject = {
        label: string,
        markdown: string,
        icon: string,
        style?: WhisperStyle.AsObject,
    }
}

export class WhisperNewRequest extends jspb.Message { 

    hasWhisper(): boolean;
    clearWhisper(): void;
    getWhisper(): WhisperMsg | undefined;
    setWhisper(value?: WhisperMsg): WhisperNewRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperNewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperNewRequest): WhisperNewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperNewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperNewRequest;
    static deserializeBinaryFromReader(message: WhisperNewRequest, reader: jspb.BinaryReader): WhisperNewRequest;
}

export namespace WhisperNewRequest {
    export type AsObject = {
        whisper?: WhisperMsg.AsObject,
    }
}

export class WhisperNewResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): WhisperNewResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperNewResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperNewResponse): WhisperNewResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperNewResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperNewResponse;
    static deserializeBinaryFromReader(message: WhisperNewResponse, reader: jspb.BinaryReader): WhisperNewResponse;
}

export namespace WhisperNewResponse {
    export type AsObject = {
        id: string,
    }
}

export class WhisperUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): WhisperUpdateRequest;


    hasWhisper(): boolean;
    clearWhisper(): void;
    getWhisper(): WhisperMsg | undefined;
    setWhisper(value?: WhisperMsg): WhisperUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperUpdateRequest): WhisperUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperUpdateRequest;
    static deserializeBinaryFromReader(message: WhisperUpdateRequest, reader: jspb.BinaryReader): WhisperUpdateRequest;
}

export namespace WhisperUpdateRequest {
    export type AsObject = {
        id: string,
        whisper?: WhisperMsg.AsObject,
    }
}
