// package: proto
// file: ldk.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Source extends jspb.Message { 
    getId(): string;
    setId(value: string): Source;

    getCategory(): Source.Category;
    setCategory(value: Source.Category): Source;

    getName(): string;
    setName(value: string): Source;

    getAuthor(): string;
    setAuthor(value: string): Source;

    getOrganization(): string;
    setOrganization(value: string): Source;

    getVersion(): string;
    setVersion(value: string): Source;

    getUploadid(): string;
    setUploadid(value: string): Source;

    getIcon(): string;
    setIcon(value: string): Source;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
    export type AsObject = {
        id: string,
        category: Source.Category,
        name: string,
        author: string,
        organization: string,
        version: string,
        uploadid: string,
        icon: string,
    }

    export enum Category {
    UNKNOWN = 0,
    SENSOR = 1,
    CONTROLLER = 2,
    INTELLIGENCE = 3,
    SIDEKICK = 4,
    }

}

export class Style extends jspb.Message { 
    getBackgroundcolor(): string;
    setBackgroundcolor(value: string): Style;

    getPrimarycolor(): string;
    setPrimarycolor(value: string): Style;

    getHighlightcolor(): string;
    setHighlightcolor(value: string): Style;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Style.AsObject;
    static toObject(includeInstance: boolean, msg: Style): Style.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Style, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Style;
    static deserializeBinaryFromReader(message: Style, reader: jspb.BinaryReader): Style;
}

export namespace Style {
    export type AsObject = {
        backgroundcolor: string,
        primarycolor: string,
        highlightcolor: string,
    }
}

export class Whisper extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): Whisper;

    getMarkdown(): string;
    setMarkdown(value: string): Whisper;

    getIcon(): string;
    setIcon(value: string): Whisper;


    hasStyle(): boolean;
    clearStyle(): void;
    getStyle(): Style | undefined;
    setStyle(value?: Style): Whisper;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Whisper.AsObject;
    static toObject(includeInstance: boolean, msg: Whisper): Whisper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Whisper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Whisper;
    static deserializeBinaryFromReader(message: Whisper, reader: jspb.BinaryReader): Whisper;
}

export namespace Whisper {
    export type AsObject = {
        label: string,
        markdown: string,
        icon: string,
        style?: Style.AsObject,
    }
}

export class StartRequest extends jspb.Message { 
    getHost(): number;
    setHost(value: number): StartRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartRequest): StartRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRequest;
    static deserializeBinaryFromReader(message: StartRequest, reader: jspb.BinaryReader): StartRequest;
}

export namespace StartRequest {
    export type AsObject = {
        host: number,
    }
}

export class OnEventRequest extends jspb.Message { 

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;


    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): OnEventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OnEventRequest): OnEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnEventRequest;
    static deserializeBinaryFromReader(message: OnEventRequest, reader: jspb.BinaryReader): OnEventRequest;
}

export namespace OnEventRequest {
    export type AsObject = {

        dataMap: Array<[string, string]>,
        source?: Source.AsObject,
    }
}

export class EmitWhisperRequest extends jspb.Message { 

    hasWhisper(): boolean;
    clearWhisper(): void;
    getWhisper(): Whisper | undefined;
    setWhisper(value?: Whisper): EmitWhisperRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmitWhisperRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmitWhisperRequest): EmitWhisperRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmitWhisperRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmitWhisperRequest;
    static deserializeBinaryFromReader(message: EmitWhisperRequest, reader: jspb.BinaryReader): EmitWhisperRequest;
}

export namespace EmitWhisperRequest {
    export type AsObject = {
        whisper?: Whisper.AsObject,
    }
}

export class EmitWhisperResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): EmitWhisperResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmitWhisperResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmitWhisperResponse): EmitWhisperResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmitWhisperResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmitWhisperResponse;
    static deserializeBinaryFromReader(message: EmitWhisperResponse, reader: jspb.BinaryReader): EmitWhisperResponse;
}

export namespace EmitWhisperResponse {
    export type AsObject = {
        id: string,
    }
}

export class UpdateWhisperRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateWhisperRequest;


    hasWhisper(): boolean;
    clearWhisper(): void;
    getWhisper(): Whisper | undefined;
    setWhisper(value?: Whisper): UpdateWhisperRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWhisperRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWhisperRequest): UpdateWhisperRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWhisperRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWhisperRequest;
    static deserializeBinaryFromReader(message: UpdateWhisperRequest, reader: jspb.BinaryReader): UpdateWhisperRequest;
}

export namespace UpdateWhisperRequest {
    export type AsObject = {
        id: string,
        whisper?: Whisper.AsObject,
    }
}

export class EmitEventRequest extends jspb.Message { 

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmitEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmitEventRequest): EmitEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmitEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmitEventRequest;
    static deserializeBinaryFromReader(message: EmitEventRequest, reader: jspb.BinaryReader): EmitEventRequest;
}

export namespace EmitEventRequest {
    export type AsObject = {

        dataMap: Array<[string, string]>,
    }
}

export class StorageDeleteRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): StorageDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StorageDeleteRequest): StorageDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageDeleteRequest;
    static deserializeBinaryFromReader(message: StorageDeleteRequest, reader: jspb.BinaryReader): StorageDeleteRequest;
}

export namespace StorageDeleteRequest {
    export type AsObject = {
        key: string,
    }
}

export class StorageHasKeyRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): StorageHasKeyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageHasKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StorageHasKeyRequest): StorageHasKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageHasKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageHasKeyRequest;
    static deserializeBinaryFromReader(message: StorageHasKeyRequest, reader: jspb.BinaryReader): StorageHasKeyRequest;
}

export namespace StorageHasKeyRequest {
    export type AsObject = {
        key: string,
    }
}

export class StorageHasKeyResponse extends jspb.Message { 
    getHaskey(): boolean;
    setHaskey(value: boolean): StorageHasKeyResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageHasKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StorageHasKeyResponse): StorageHasKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageHasKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageHasKeyResponse;
    static deserializeBinaryFromReader(message: StorageHasKeyResponse, reader: jspb.BinaryReader): StorageHasKeyResponse;
}

export namespace StorageHasKeyResponse {
    export type AsObject = {
        haskey: boolean,
    }
}

export class StorageKeysResponse extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): StorageKeysResponse;
    addKeys(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StorageKeysResponse): StorageKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageKeysResponse;
    static deserializeBinaryFromReader(message: StorageKeysResponse, reader: jspb.BinaryReader): StorageKeysResponse;
}

export namespace StorageKeysResponse {
    export type AsObject = {
        keysList: Array<string>,
    }
}

export class StorageReadRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): StorageReadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StorageReadRequest): StorageReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageReadRequest;
    static deserializeBinaryFromReader(message: StorageReadRequest, reader: jspb.BinaryReader): StorageReadRequest;
}

export namespace StorageReadRequest {
    export type AsObject = {
        key: string,
    }
}

export class StorageReadResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): StorageReadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StorageReadResponse): StorageReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageReadResponse;
    static deserializeBinaryFromReader(message: StorageReadResponse, reader: jspb.BinaryReader): StorageReadResponse;
}

export namespace StorageReadResponse {
    export type AsObject = {
        value: string,
    }
}

export class StorageReadAllResponse extends jspb.Message { 

    getEntriesMap(): jspb.Map<string, string>;
    clearEntriesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageReadAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StorageReadAllResponse): StorageReadAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageReadAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageReadAllResponse;
    static deserializeBinaryFromReader(message: StorageReadAllResponse, reader: jspb.BinaryReader): StorageReadAllResponse;
}

export namespace StorageReadAllResponse {
    export type AsObject = {

        entriesMap: Array<[string, string]>,
    }
}

export class StorageWriteRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): StorageWriteRequest;

    getValue(): string;
    setValue(value: string): StorageWriteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageWriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StorageWriteRequest): StorageWriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageWriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageWriteRequest;
    static deserializeBinaryFromReader(message: StorageWriteRequest, reader: jspb.BinaryReader): StorageWriteRequest;
}

export namespace StorageWriteRequest {
    export type AsObject = {
        key: string,
        value: string,
    }
}
