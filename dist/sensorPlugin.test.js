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
const utils_1 = require("ts-jest/utils");
const ldk_grpc_pb_1 = __importDefault(require("./proto/ldk_grpc_pb"));
const sensorGrpcServer_1 = __importDefault(require("./sensorGrpcServer"));
const sensorPlugin_1 = __importDefault(require("./sensorPlugin"));
const logging_1 = require("./logging");
const mockedGrpc = utils_1.mocked(sensorGrpcServer_1.default);
const mockedServices = utils_1.mocked(ldk_grpc_pb_1.default.grpc.Server);
jest.mock('./sensorGrpcServer');
jest.mock('./proto/ldk_grpc_pb');
jest.mock('./logging');
beforeEach(() => {
    mockedGrpc.mockClear();
    mockedServices.mockClear();
});
describe('SensorPlugin', () => {
    let plugin;
    describe('constructor', () => {
        it('consumes the mocked module', () => {
            plugin = new sensorPlugin_1.default({});
            expect(sensorGrpcServer_1.default).toHaveBeenCalledTimes(1);
            expect(ldk_grpc_pb_1.default.grpc.Server).toHaveBeenCalledTimes(1);
            const mockServer = mockedServices.mock.instances[0];
            // Called with BrokerService,HealthService,StdioService
            expect(mockServer.addService).toHaveBeenCalledTimes(3);
        });
    });
    describe('#serve', () => {
        it('calls server#start', () => __awaiter(void 0, void 0, void 0, function* () {
            plugin = new sensorPlugin_1.default({});
            const mockServer = mockedServices.mock.instances[0];
            utils_1.mocked(mockServer.bindAsync).mockImplementation((port, credentials, callback) => {
                callback(null, 123);
            });
            yield plugin.serve();
            expect(mockServer.start).toHaveBeenCalledTimes(1);
            expect(logging_1.prepareLogging).toHaveBeenCalled();
        }));
    });
});
