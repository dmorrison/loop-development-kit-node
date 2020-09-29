"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSensorClient = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const process_grpc_pb_1 = require("../grpc/process_grpc_pb");
const process_pb_1 = require("../grpc/process_pb");
const hostClient_1 = __importDefault(require("./hostClient"));
const processHost_1 = require("./processHost");
const transformingStream_1 = require("./transformingStream");
/**
 * @param info
 */
function parseProcessInfo(info) {
    return info.toObject();
}
/**
 * @param action
 */
function parseProcessAction(action) {
    switch (action) {
        case process_pb_1.ProcessAction.PROCESS_ACTION_STARTED:
            return processHost_1.ProcessStreamAction.Started;
        case process_pb_1.ProcessAction.PROCESS_ACTION_STOPPED:
            return processHost_1.ProcessStreamAction.Stopped;
        case process_pb_1.ProcessAction.PROCESS_ACTION_UNKNOWN:
        default:
            return processHost_1.ProcessStreamAction.Unknown;
    }
}
class ProcessSensorClient extends hostClient_1.default {
    generateClient() {
        return process_grpc_pb_1.ProcessClient;
    }
    queryProcesses() {
        return this.buildQuery((message, callback) => {
            this.client.processState(message, callback);
        }, () => new empty_pb_1.Empty(), (response) => ({
            processes: response
                .getProcessesList()
                .map((processInfo) => parseProcessInfo(processInfo)),
        }));
    }
    streamProcesses() {
        return new transformingStream_1.TransformingStream(this.client.processStateStream(new empty_pb_1.Empty()), (message) => {
            const processRaw = message.getProcess();
            if (processRaw == null) {
                return undefined;
            }
            return {
                process: parseProcessInfo(processRaw),
                action: parseProcessAction(message.getAction()),
            };
        });
    }
}
exports.ProcessSensorClient = ProcessSensorClient;