"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whisperHostClient_1 = __importDefault(require("./hostClients/whisperHostClient"));
const storageHostClient_1 = __importDefault(require("./hostClients/storageHostClient"));
const keyboardSensorClient_1 = __importDefault(require("./hostClients/keyboardSensorClient"));
class HostClientFacade {
    constructor() {
        this.whisperClient = new whisperHostClient_1.default();
        this.storageClient = new storageHostClient_1.default();
        this.keyboardClient = new keyboardSensorClient_1.default();
    }
    connect(connInfo) {
        return Promise.all([
            this.whisperClient.connect(connInfo),
            this.storageClient.connect(connInfo),
            this.keyboardClient.connect(connInfo),
        ]);
    }
}
exports.default = HostClientFacade;
