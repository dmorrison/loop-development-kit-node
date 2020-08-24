"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ldk_pb_1 = __importDefault(require("./proto/ldk_pb"));
const ldk_grpc_pb_1 = require("./proto/ldk_grpc_pb");
const grpcHostClient_1 = __importDefault(require("./grpcHostClient"));
/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
class ControllerGrpcHostClient extends grpcHostClient_1.default {
    /**
     * Send a Whisper to the host process.
     *
     * @async
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    emitWhisper(whisper) {
        return new Promise((resolve, reject) => {
            const request = new ldk_pb_1.default.EmitWhisperRequest();
            const style = new ldk_pb_1.default.Style();
            if (whisper.style) {
                style.setBackgroundcolor(whisper.style.backgroundColor || '#fff');
                style.setPrimarycolor(whisper.style.primaryColor || '#666');
                style.setHighlightcolor(whisper.style.highlightColor || '#651fff');
            }
            else {
                style.setBackgroundcolor('#fff');
                style.setPrimarycolor('#666');
                style.setHighlightcolor('#651fff');
            }
            const whisperMsg = new ldk_pb_1.default.Whisper();
            whisperMsg.setMarkdown(whisper.markdown);
            whisperMsg.setLabel(whisper.label);
            whisperMsg.setStyle(style);
            whisperMsg.setIcon(whisper.icon);
            request.setWhisper(whisperMsg);
            this.client.emitWhisper(request, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }
    generateClient(address) {
        return new ldk_grpc_pb_1.ControllerHostClient(address, ldk_grpc_pb_1.grpc.credentials.createInsecure());
    }
}
exports.default = ControllerGrpcHostClient;
