"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const loop_grpc_pb_1 = __importDefault(require("./proto/loop_grpc_pb"));
const hostClientFacade_1 = __importDefault(require("./hostClientFacade"));
/**
 * @internal
 */
class GRPCServer {
    constructor(server, broker, impl) {
        this.broker = broker;
        this.loop = impl;
        server.addService(loop_grpc_pb_1.default.LoopService, this);
    }
    /**
     * Called by the host to start the Loop.
     */
    loopStart(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const connInfo = yield this.broker.getConnInfo();
            // TODO: Replace with creating all hosts.
            const hostClient = new hostClientFacade_1.default();
            yield hostClient.connect(connInfo).catch((err) => {
                throw err;
            });
            yield this.loop.start(hostClient);
            const response = new empty_pb_1.Empty();
            callback(null, response);
        });
    }
    /**
     * Called by the host to stop the Loop.
     */
    loopStop(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loop.stop();
            const response = new empty_pb_1.Empty();
            callback(null, response);
        });
    }
}
exports.default = GRPCServer;
