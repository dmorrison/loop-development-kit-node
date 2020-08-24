"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = exports.HealthCheckResponse = exports.HealthGrpcServer = void 0;
const health_pb_1 = require("./proto/health_pb");
Object.defineProperty(exports, "HealthCheckResponse", { enumerable: true, get: function () { return health_pb_1.HealthCheckResponse; } });
const health_grpc_pb_1 = require("./proto/health_grpc_pb");
Object.defineProperty(exports, "HealthService", { enumerable: true, get: function () { return health_grpc_pb_1.HealthService; } });
/**
 * Class used to implement the GRPC health service.
 *
 * @internal
 */
class HealthGrpcServer {
    /**
     * Create a HealthGrpcServer.
     *
     * ```
     * new HealthGrpcServer();
     * ```
     */
    constructor() {
        this._statusMap = {
            plugin: health_pb_1.HealthCheckResponse.ServingStatus.SERVING,
            '': health_pb_1.HealthCheckResponse.ServingStatus.NOT_SERVING,
        };
    }
    /**
     * Called by the host to check the health status of the server.
     *
     * @async
     * @param call - Called service
     * @param callback - Callback method to invoke with message.
     */
    check(call, callback) {
        var _a;
        const reqService = (_a = call === null || call === void 0 ? void 0 : call.request) === null || _a === void 0 ? void 0 : _a.getService();
        const status = this._statusMap[reqService || 'unknown'] ||
            health_pb_1.HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
        const msg = new health_pb_1.HealthCheckResponse();
        msg.setStatus(status);
        callback(null, msg);
    }
    /**
     * Called by the host to establish a health event stream.
     * Currently unused.
     */
    watch() {
        // Nothing to do
    }
}
exports.HealthGrpcServer = HealthGrpcServer;
