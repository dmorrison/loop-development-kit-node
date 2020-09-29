"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whisperClient_1 = __importDefault(require("./hostClients/whisperClient"));
const storageClient_1 = __importDefault(require("./hostClients/storageClient"));
const keyboardClient_1 = __importDefault(require("./hostClients/keyboardClient"));
const clipboardClient_1 = require("./hostClients/clipboardClient");
const cursorClient_1 = require("./hostClients/cursorClient");
const hoverClient_1 = require("./hostClients/hoverClient");
const fileSystemClient_1 = require("./hostClients/fileSystemClient");
const processClient_1 = require("./hostClients/processClient");
const windowClient_1 = require("./hostClients/windowClient");
class HostClientFacade {
    constructor() {
        this.whisperClient = new whisperClient_1.default();
        this.storageClient = new storageClient_1.default();
        this.keyboardClient = new keyboardClient_1.default();
        this.clipboardClient = new clipboardClient_1.ClipboardClient();
        this.cursorClient = new cursorClient_1.CursorClient();
        this.hoverClient = new hoverClient_1.HoverClient();
        this.fileSystemClient = new fileSystemClient_1.FileSystemClient();
        this.processClient = new processClient_1.ProcessClient();
        this.windowClient = new windowClient_1.WindowClient();
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
            this.processClient.connect(connInfo),
            this.windowClient.connect(connInfo),
        ]);
    }
}
exports.default = HostClientFacade;
