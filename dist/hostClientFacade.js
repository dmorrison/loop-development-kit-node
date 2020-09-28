"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whisperHostClient_1 = __importDefault(require("./hostClients/whisperHostClient"));
const storageHostClient_1 = __importDefault(require("./hostClients/storageHostClient"));
const keyboardSensorClient_1 = __importDefault(require("./hostClients/keyboardSensorClient"));
const clipboardSensorClient_1 = require("./hostClients/clipboardSensorClient");
const cursorHostClient_1 = require("./hostClients/cursorHostClient");
const hoverSensorClient_1 = require("./hostClients/hoverSensorClient");
const fileSystemHostClient_1 = require("./hostClients/fileSystemHostClient");
class HostClientFacade {
    constructor() {
        this.whisperClient = new whisperHostClient_1.default();
        this.storageClient = new storageHostClient_1.default();
        this.keyboardClient = new keyboardSensorClient_1.default();
        this.clipboardClient = new clipboardSensorClient_1.ClipboardSensorClient();
        this.cursorClient = new cursorHostClient_1.CursorHostClient();
        this.hoverClient = new hoverSensorClient_1.HoverSensorClient();
        this.fileSystemClient = new fileSystemHostClient_1.FileSystemHostClient();
    }
    connect(connInfo) {
        return Promise.all([
            this.whisperClient.connect(connInfo),
            this.storageClient.connect(connInfo),
            this.keyboardClient.connect(connInfo),
            this.clipboardClient.connect(connInfo),
            this.cursorClient.connect(connInfo),
            this.hoverClient.connect(connInfo),
            this.fileSystemClient.connect(connInfo),
        ]);
    }
}
exports.default = HostClientFacade;
