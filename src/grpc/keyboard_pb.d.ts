// package: proto
// file: keyboard.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class KeyboardHotkey extends jspb.Message { 
    getScancode(): number;
    setScancode(value: number): KeyboardHotkey;

    getModifiers(): number;
    setModifiers(value: number): KeyboardHotkey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardHotkey.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardHotkey): KeyboardHotkey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardHotkey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardHotkey;
    static deserializeBinaryFromReader(message: KeyboardHotkey, reader: jspb.BinaryReader): KeyboardHotkey;
}

export namespace KeyboardHotkey {
    export type AsObject = {
        scancode: number,
        modifiers: number,
    }
}

export class KeyboardHotkeyStreamRequest extends jspb.Message { 
    clearHotkeysList(): void;
    getHotkeysList(): Array<KeyboardHotkey>;
    setHotkeysList(value: Array<KeyboardHotkey>): KeyboardHotkeyStreamRequest;
    addHotkeys(value?: KeyboardHotkey, index?: number): KeyboardHotkey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardHotkeyStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardHotkeyStreamRequest): KeyboardHotkeyStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardHotkeyStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardHotkeyStreamRequest;
    static deserializeBinaryFromReader(message: KeyboardHotkeyStreamRequest, reader: jspb.BinaryReader): KeyboardHotkeyStreamRequest;
}

export namespace KeyboardHotkeyStreamRequest {
    export type AsObject = {
        hotkeysList: Array<KeyboardHotkey.AsObject>,
    }
}

export class KeyboardHotkeyStreamResponse extends jspb.Message { 
    getPressed(): boolean;
    setPressed(value: boolean): KeyboardHotkeyStreamResponse;

    getError(): string;
    setError(value: string): KeyboardHotkeyStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardHotkeyStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardHotkeyStreamResponse): KeyboardHotkeyStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardHotkeyStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardHotkeyStreamResponse;
    static deserializeBinaryFromReader(message: KeyboardHotkeyStreamResponse, reader: jspb.BinaryReader): KeyboardHotkeyStreamResponse;
}

export namespace KeyboardHotkeyStreamResponse {
    export type AsObject = {
        pressed: boolean,
        error: string,
    }
}

export class KeyboardScancodeStreamResponse extends jspb.Message { 
    getScancode(): number;
    setScancode(value: number): KeyboardScancodeStreamResponse;

    getPressed(): boolean;
    setPressed(value: boolean): KeyboardScancodeStreamResponse;

    getError(): string;
    setError(value: string): KeyboardScancodeStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardScancodeStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardScancodeStreamResponse): KeyboardScancodeStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardScancodeStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardScancodeStreamResponse;
    static deserializeBinaryFromReader(message: KeyboardScancodeStreamResponse, reader: jspb.BinaryReader): KeyboardScancodeStreamResponse;
}

export namespace KeyboardScancodeStreamResponse {
    export type AsObject = {
        scancode: number,
        pressed: boolean,
        error: string,
    }
}

export class KeyboardTextStreamResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): KeyboardTextStreamResponse;

    getError(): string;
    setError(value: string): KeyboardTextStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardTextStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardTextStreamResponse): KeyboardTextStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardTextStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardTextStreamResponse;
    static deserializeBinaryFromReader(message: KeyboardTextStreamResponse, reader: jspb.BinaryReader): KeyboardTextStreamResponse;
}

export namespace KeyboardTextStreamResponse {
    export type AsObject = {
        text: string,
        error: string,
    }
}

export class KeyboardCharacterStreamResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): KeyboardCharacterStreamResponse;

    getError(): string;
    setError(value: string): KeyboardCharacterStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardCharacterStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardCharacterStreamResponse): KeyboardCharacterStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardCharacterStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardCharacterStreamResponse;
    static deserializeBinaryFromReader(message: KeyboardCharacterStreamResponse, reader: jspb.BinaryReader): KeyboardCharacterStreamResponse;
}

export namespace KeyboardCharacterStreamResponse {
    export type AsObject = {
        text: string,
        error: string,
    }
}
