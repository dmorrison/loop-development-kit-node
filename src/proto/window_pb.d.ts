// package: proto
// file: window.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class WindowInfo extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): WindowInfo;

    getPath(): string;
    setPath(value: string): WindowInfo;

    getPid(): number;
    setPid(value: number): WindowInfo;

    getX(): number;
    setX(value: number): WindowInfo;

    getY(): number;
    setY(value: number): WindowInfo;

    getWidth(): number;
    setWidth(value: number): WindowInfo;

    getHeight(): number;
    setHeight(value: number): WindowInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowInfo.AsObject;
    static toObject(includeInstance: boolean, msg: WindowInfo): WindowInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WindowInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowInfo;
    static deserializeBinaryFromReader(message: WindowInfo, reader: jspb.BinaryReader): WindowInfo;
}

export namespace WindowInfo {
    export type AsObject = {
        title: string,
        path: string,
        pid: number,
        x: number,
        y: number,
        width: number,
        height: number,
    }
}

export class WindowActiveWindowResponse extends jspb.Message { 

    hasWindow(): boolean;
    clearWindow(): void;
    getWindow(): WindowInfo | undefined;
    setWindow(value?: WindowInfo): WindowActiveWindowResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowActiveWindowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WindowActiveWindowResponse): WindowActiveWindowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WindowActiveWindowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowActiveWindowResponse;
    static deserializeBinaryFromReader(message: WindowActiveWindowResponse, reader: jspb.BinaryReader): WindowActiveWindowResponse;
}

export namespace WindowActiveWindowResponse {
    export type AsObject = {
        window?: WindowInfo.AsObject,
    }
}

export class WindowActiveWindowStreamResponse extends jspb.Message { 

    hasWindow(): boolean;
    clearWindow(): void;
    getWindow(): WindowInfo | undefined;
    setWindow(value?: WindowInfo): WindowActiveWindowStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowActiveWindowStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WindowActiveWindowStreamResponse): WindowActiveWindowStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WindowActiveWindowStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowActiveWindowStreamResponse;
    static deserializeBinaryFromReader(message: WindowActiveWindowStreamResponse, reader: jspb.BinaryReader): WindowActiveWindowStreamResponse;
}

export namespace WindowActiveWindowStreamResponse {
    export type AsObject = {
        window?: WindowInfo.AsObject,
    }
}

export class WindowWindowsResponse extends jspb.Message { 
    clearWindowList(): void;
    getWindowList(): Array<WindowInfo>;
    setWindowList(value: Array<WindowInfo>): WindowWindowsResponse;
    addWindow(value?: WindowInfo, index?: number): WindowInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowWindowsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WindowWindowsResponse): WindowWindowsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WindowWindowsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowWindowsResponse;
    static deserializeBinaryFromReader(message: WindowWindowsResponse, reader: jspb.BinaryReader): WindowWindowsResponse;
}

export namespace WindowWindowsResponse {
    export type AsObject = {
        windowList: Array<WindowInfo.AsObject>,
    }
}

export class WindowWindowsStreamResponse extends jspb.Message { 

    hasWindow(): boolean;
    clearWindow(): void;
    getWindow(): WindowInfo | undefined;
    setWindow(value?: WindowInfo): WindowWindowsStreamResponse;

    getAction(): WindowAction;
    setAction(value: WindowAction): WindowWindowsStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowWindowsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WindowWindowsStreamResponse): WindowWindowsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WindowWindowsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowWindowsStreamResponse;
    static deserializeBinaryFromReader(message: WindowWindowsStreamResponse, reader: jspb.BinaryReader): WindowWindowsStreamResponse;
}

export namespace WindowWindowsStreamResponse {
    export type AsObject = {
        window?: WindowInfo.AsObject,
        action: WindowAction,
    }
}

export enum WindowAction {
    WINDOW_ACTION_UNKNOWN = 0,
    WINDOW_ACTION_FOCUSED = 1,
    WINDOW_ACTION_UNFOCUSED = 2,
    WINDOW_ACTION_OPENED = 3,
    WINDOW_ACTION_CLOSED = 4,
}
