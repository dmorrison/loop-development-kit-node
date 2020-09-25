"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whisperGrpcHostClient_1 = __importDefault(require("./hostClients/whisperGrpcHostClient"));
const storageGrpcHostClient_1 = __importDefault(require("./hostClients/storageGrpcHostClient"));
const keyboardGrpcHostClient_1 = __importDefault(require("./hostClients/keyboardGrpcHostClient"));
class HostClientFacade {
    constructor() {
        this.whisperClient = new whisperGrpcHostClient_1.default();
        this.storageClient = new storageGrpcHostClient_1.default();
        this.keyboardClient = new keyboardGrpcHostClient_1.default();
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
