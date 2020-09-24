// package: proto
// file: keyboard.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class KeyboardModifiers extends jspb.Message { 
    getAltl(): boolean;
    setAltl(value: boolean): KeyboardModifiers;

    getAltr(): boolean;
    setAltr(value: boolean): KeyboardModifiers;

    getCtrll(): boolean;
    setCtrll(value: boolean): KeyboardModifiers;

    getCtrlr(): boolean;
    setCtrlr(value: boolean): KeyboardModifiers;

    getMetal(): boolean;
    setMetal(value: boolean): KeyboardModifiers;

    getMetar(): boolean;
    setMetar(value: boolean): KeyboardModifiers;

    getShiftl(): boolean;
    setShiftl(value: boolean): KeyboardModifiers;

    getShiftr(): boolean;
    setShiftr(value: boolean): KeyboardModifiers;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardModifiers.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardModifiers): KeyboardModifiers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardModifiers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardModifiers;
    static deserializeBinaryFromReader(message: KeyboardModifiers, reader: jspb.BinaryReader): KeyboardModifiers;
}

export namespace KeyboardModifiers {
    export type AsObject = {
        altl: boolean,
        altr: boolean,
        ctrll: boolean,
        ctrlr: boolean,
        metal: boolean,
        metar: boolean,
        shiftl: boolean,
        shiftr: boolean,
    }
}

export class KeyboardHotkey extends jspb.Message { 
    getScancode(): number;
    setScancode(value: number): KeyboardHotkey;


    hasModifiers(): boolean;
    clearModifiers(): void;
    getModifiers(): KeyboardModifiers | undefined;
    setModifiers(value?: KeyboardModifiers): KeyboardHotkey;


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
        modifiers?: KeyboardModifiers.AsObject,
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
    }
}

export class KeyboardScancodeStreamResponse extends jspb.Message { 
    getScancode(): number;
    setScancode(value: number): KeyboardScancodeStreamResponse;

    getPressed(): boolean;
    setPressed(value: boolean): KeyboardScancodeStreamResponse;


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
    }
}

export class KeyboardTextChunkStreamResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): KeyboardTextChunkStreamResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardTextChunkStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardTextChunkStreamResponse): KeyboardTextChunkStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardTextChunkStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardTextChunkStreamResponse;
    static deserializeBinaryFromReader(message: KeyboardTextChunkStreamResponse, reader: jspb.BinaryReader): KeyboardTextChunkStreamResponse;
}

export namespace KeyboardTextChunkStreamResponse {
    export type AsObject = {
        text: string,
    }
}

export class KeyboardTextStreamResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): KeyboardTextStreamResponse;


    hasModifiers(): boolean;
    clearModifiers(): void;
    getModifiers(): KeyboardModifiers | undefined;
    setModifiers(value?: KeyboardModifiers): KeyboardTextStreamResponse;


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
        modifiers?: KeyboardModifiers.AsObject,
    }
}
