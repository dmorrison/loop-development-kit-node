"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whisper_pb_1 = __importDefault(require("../grpc/whisper_pb"));
const whisper_grpc_pb_1 = require("../grpc/whisper_grpc_pb");
const GRPCClient_1 = __importDefault(require("./GRPCClient"));
/**
 * Class used by the controller implementation to interact with the host process.
 *
 * @internal
 */
class WhisperClient extends GRPCClient_1.default {
    /**
     * Send a Whisper to the host process.
     *
     * @async
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    emitWhisper(whisper) {
        return new Promise((resolve, reject) => {
            const request = new whisper_pb_1.default.WhisperNewRequest();
            const style = new whisper_pb_1.default.WhisperStyle();
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
            const whisperMsg = new whisper_pb_1.default.WhisperMsg();
            whisperMsg.setMarkdown(whisper.markdown);
            whisperMsg.setLabel(whisper.label);
            whisperMsg.setStyle(style);
            whisperMsg.setIcon(whisper.icon);
            request.setWhisper(whisperMsg);
            this.client.whisperNew(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                const id = response.getId();
                return resolve(id);
            });
        });
    }
    /**
     * Update a Whisper that has already been sent to the host process.
     *
     * @async
     * @param id - The id of an existing Whisper that should be updated.
     * @param whisper - An object defining the contents of the Whisper.
     * @returns Promise resolving when the server responds to the command.
     */
    updateWhisper(id, whisper) {
        return new Promise((resolve, reject) => {
            if (!id) {
                return reject(new Error('missing required property id'));
            }
            const request = new whisper_pb_1.default.WhisperUpdateRequest();
            const style = new whisper_pb_1.default.WhisperStyle();
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
            const whisperMsg = new whisper_pb_1.default.WhisperMsg();
            whisperMsg.setMarkdown(whisper.markdown);
            whisperMsg.setLabel(whisper.label);
            whisperMsg.setStyle(style);
            whisperMsg.setIcon(whisper.icon);
            request.setWhisper(whisperMsg);
            request.setId(id);
            return this.client.whisperUpdate(request, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }
    generateClient() {
        return whisper_grpc_pb_1.WhisperClient;
    }
}
exports.default = WhisperClient;
