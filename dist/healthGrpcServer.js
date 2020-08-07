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
 * @private
 */
class HealthGrpcServer {
    /**
     * Create a HealthGrpcServer.
     *
     * @example
     * HealthGrpcServer();
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
     * @param {object} call
     * @param {Function} callback
     * @returns {void}
     */
    check(call, callback) {
        const reqService = call.request.getService();
        const status = this._statusMap[reqService] || health_pb_1.HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
        const msg = new health_pb_1.HealthCheckResponse();
        msg.setStatus(status);
        callback(null, msg);
    }
    /**
     * Called by the host to establish a health event stream.
     * Currently unused.
     *
     * @async
     * @returns {void}
     */
    watch() {
        // Nothing to do
    }
}
exports.HealthGrpcServer = HealthGrpcServer;
