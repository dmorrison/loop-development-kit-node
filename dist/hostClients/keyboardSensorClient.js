"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const keyboard_grpc_pb_1 = require("../grpc/keyboard_grpc_pb");
const keyboard_pb_1 = __importDefault(require("../grpc/keyboard_pb"));
const hostClient_1 = __importDefault(require("./hostClient"));
const transformingStream_1 = require("./transformingStream");
const transformTextStream = (message) => {
    let modifiers = null;
    if (message.hasModifiers()) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const mods = message.getModifiers().toObject();
        modifiers = {
            ctrlL: mods.ctrll,
            ctrlR: mods.ctrlr,
            altL: mods.altl,
            altR: mods.altr,
            shiftL: mods.shiftl,
            shiftR: mods.shiftr,
            metaL: mods.metal,
            metaR: mods.metar,
        };
    }
    return {
        text: message.getText(),
        modifiers,
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const request = new keyboard_pb_1.default.KeyboardHotkey();
        const modifiers = new keyboard_pb_1.default.KeyboardModifiers();
        modifiers.setAltl((_a = keyRequest.modifiers.altL) !== null && _a !== void 0 ? _a : false);
        modifiers.setAltr((_b = keyRequest.modifiers.altR) !== null && _b !== void 0 ? _b : false);
        modifiers.setCtrll((_c = keyRequest.modifiers.ctrlL) !== null && _c !== void 0 ? _c : false);
        modifiers.setCtrlr((_d = keyRequest.modifiers.ctrlR) !== null && _d !== void 0 ? _d : false);
        modifiers.setShiftl((_e = keyRequest.modifiers.shiftL) !== null && _e !== void 0 ? _e : false);
        modifiers.setShiftr((_f = keyRequest.modifiers.shiftR) !== null && _f !== void 0 ? _f : false);
        modifiers.setMetal((_g = keyRequest.modifiers.metaL) !== null && _g !== void 0 ? _g : false);
        modifiers.setMetar((_h = keyRequest.modifiers.metaR) !== null && _h !== void 0 ? _h : false);
        request.setScancode(keyRequest.scanCode);
        request.setModifiers(modifiers);
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
class KeyboardSensorClient extends hostClient_1.default {
    hotKeyStream(hotKeys, listener) {
        const message = generateHotkeyStreamRequest(hotKeys);
        return new transformingStream_1.TransformingStream(this.client.keyboardHotkeyStream(message), transformHotKeyEvent, listener);
    }
    textChunks() {
        return new transformingStream_1.TransformingStream(this.client.keyboardTextChunkStream(new empty_pb_1.Empty()), (response) => response.getText());
    }
    textStream(listener) {
        return new transformingStream_1.TransformingStream(this.client.keyboardTextStream(new empty_pb_1.Empty()), transformTextStream, listener);
    }
    scanCodeStream(listener) {
        return new transformingStream_1.TransformingStream(this.client.keyboardScancodeStream(new empty_pb_1.Empty()), transformScanCodeStream, listener);
    }
    generateClient() {
        return keyboard_grpc_pb_1.KeyboardClient;
    }
}
exports.default = KeyboardSensorClient;
