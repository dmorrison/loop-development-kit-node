"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const keyboard_grpc_pb_1 = require("../grpc/keyboard_grpc_pb");
const keyboard_pb_1 = __importDefault(require("../grpc/keyboard_pb"));
const GRPCClient_1 = __importDefault(require("./GRPCClient"));
const transformingStream_1 = require("./transformingStream");
const generateModifierFlag = (modifiers) => {
    return (((modifiers === null || modifiers === void 0 ? void 0 : modifiers.altL) ? 1 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.altR) ? 2 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.ctrlL) ? 4 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.ctrlR) ? 8 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.metaL) ? 16 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.metaR) ? 32 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.shiftL) ? 64 : 0) +
        ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.shiftR) ? 128 : 0));
};
const transformTextStream = (message) => {
    return {
        text: message.getText(),
    };
};
const transformScanCodeStream = (message) => {
    return {
        scanCode: message.getScancode(),
        direction: message.getPressed() ? 'down' : 'up',
    };
};
/**
 * @param keys - The hotkeys being watched.
 */
function generateHotkeyStreamRequest(keys) {
    const keyMessages = keys.map((keyRequest) => {
        const request = new keyboard_pb_1.default.KeyboardHotkey();
        request.setScancode(keyRequest.scanCode);
        request.setModifiers(generateModifierFlag(keyRequest.modifiers));
        return request;
    });
    const message = new keyboard_pb_1.default.KeyboardHotkeyStreamRequest();
    message.setHotkeysList(keyMessages);
    return message;
}
const transformHotKeyEvent = (message) => {
    return {
        direction: message.getPressed() ? 'down' : 'up',
    };
};
class KeyboardClient extends GRPCClient_1.default {
    streamHotKey(hotKeys, listener) {
        const message = generateHotkeyStreamRequest(hotKeys);
        return new transformingStream_1.TransformingStream(this.client.keyboardHotkeyStream(message), transformHotKeyEvent, listener);
    }
    streamText() {
        return new transformingStream_1.TransformingStream(this.client.keyboardTextStream(new empty_pb_1.Empty()), (response) => response.getText());
    }
    streamChar(listener) {
        return new transformingStream_1.TransformingStream(this.client.keyboardCharacterStream(new empty_pb_1.Empty()), transformTextStream, listener);
    }
    streamScanCode(listener) {
        return new transformingStream_1.TransformingStream(this.client.keyboardScancodeStream(new empty_pb_1.Empty()), transformScanCodeStream, listener);
    }
    generateClient() {
        return keyboard_grpc_pb_1.KeyboardClient;
    }
}
exports.default = KeyboardClient;
