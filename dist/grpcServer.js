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
const ldk_pb_1 = __importDefault(require("./proto/ldk_pb"));
const categories_1 = require("./categories");
/**
 * @internal
 */
class GRPCServer {
    constructor(server, broker, impl, definition) {
        this.broker = broker;
        server.addService(definition, {
            start: this.start(impl),
            stop: this.stop(impl),
            onEvent: this.onEvent(impl),
        });
    }
    /**
     * Called by the host to start the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    start(impl) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const connInfo = yield this.broker.getConnInfo();
            const hostClient = this.createHost();
            yield hostClient.connect(connInfo).catch((err) => {
                throw err;
            });
            yield impl.start(hostClient);
            const response = new ldk_pb_1.default.Empty();
            callback(null, response);
        });
    }
    /**
     * Called by the host to stop the sensor implementation.
     *
     * @param impl - The implementation of the sensor.
     */
    stop(impl) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            yield impl.stop();
            const response = new ldk_pb_1.default.Empty();
            callback(null, response);
        });
    }
    /**
     * Called by the host to broadcast events to the sensor implementation.
     *
     * @async
     * @param impl - The implementation of the sensor.
     */
    onEvent(impl) {
        return ({ request }, callback) => __awaiter(this, void 0, void 0, function* () {
            const source = request === null || request === void 0 ? void 0 : request.getSource();
            if (request && source) {
                const event = {
                    data: request
                        .getDataMap()
                        .toObject()
                        .reduce((acc, [key, value]) => {
                        acc[key] = value;
                        return acc;
                    }, {}),
                    source: {
                        id: source.getId(),
                        category: categories_1.categories[source.getCategory()],
                        name: source.getName(),
                        author: source.getAuthor(),
                        organization: source.getOrganization(),
                        version: source.getVersion(),
                    },
                };
                yield impl.onEvent(event);
            }
            const response = new ldk_pb_1.default.Empty();
            callback(null, response);
        });
    }
}
exports.default = GRPCServer;
