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
const brokerGrpcServer_1 = __importDefault(require("./brokerGrpcServer"));
const controllerGrpcServer_1 = __importDefault(require("./controllerGrpcServer"));
const controllerGrpcHostClient_1 = __importDefault(require("./controllerGrpcHostClient"));
const ldk_pb_1 = require("./proto/ldk_pb");
const categories_1 = require("./categories");
jest.mock('./proto/ldk_grpc_pb');
jest.mock('./brokerGrpcServer');
jest.mock('./controllerGrpcHostClient');
const mockedServices = utils_1.mocked(ldk_grpc_pb_1.default.grpc.Server);
const mockedBroker = utils_1.mocked(brokerGrpcServer_1.default);
const mockedClient = utils_1.mocked(controllerGrpcHostClient_1.default);
describe('ControllerGrpcServer', () => {
    let server;
    let broker;
    let grpcServer;
    let impl;
    beforeEach(() => {
        grpcServer = new ldk_grpc_pb_1.default.grpc.Server();
        broker = new brokerGrpcServer_1.default(grpcServer);
        impl = {
            start: jest.fn(),
            stop: jest.fn(),
            onEvent: jest.fn(),
        };
        server = new controllerGrpcServer_1.default(grpcServer, impl, broker);
        mockedBroker.mockImplementation(() => {
            return {
                getConnInfo: () => {
                    return Promise.resolve({
                        serviceId: 1,
                        network: 'a',
                        address: 'b',
                    });
                },
            };
        });
        mockedClient.mockImplementation(() => {
            return {
                connect: () => Promise.resolve(),
            };
        });
    });
    describe('constructor', () => {
        it('should call addService on the server', () => {
            const serverInstance = mockedServices.mock.instances[0];
            expect(serverInstance.addService).toHaveBeenCalledTimes(1);
        });
    });
    describe('#start', () => {
        it('should call the implementation start and callback', () => __awaiter(void 0, void 0, void 0, function* () {
            const startFunc = server.start(impl);
            const callbackFunc = jest.fn();
            yield startFunc({}, callbackFunc);
            expect(impl.start).toHaveBeenCalled();
            expect(callbackFunc).toHaveBeenCalled();
        }));
    });
    describe('#stop', () => {
        it('should call the implementation stop and callback', () => __awaiter(void 0, void 0, void 0, function* () {
            const stopFunc = server.stop(impl);
            const callbackFunc = jest.fn();
            yield stopFunc({}, callbackFunc);
            expect(impl.stop).toHaveBeenCalled();
            expect(callbackFunc).toHaveBeenCalled();
        }));
    });
    describe('#onEvent', () => {
        let request;
        let source;
        let dataMap;
        beforeEach(() => {
            dataMap = {
                toObject: () => [
                    ['key1', 'value1'],
                    ['key2', 'value2'],
                ],
            };
            source = {
                getId: () => '1',
                getCategory: () => 1,
                getName: () => 'name',
                getAuthor: () => 'author',
                getOrganization: () => 'org',
                getVersion: () => '1.0.0',
            };
            request = {
                getSource: () => source,
                getDataMap: () => dataMap,
            };
        });
        it('should call the implementation onEvent with a properly constructed event object', () => __awaiter(void 0, void 0, void 0, function* () {
            const onEventFunc = server.onEvent(impl);
            const callbackFunc = jest.fn();
            yield onEventFunc({ request }, callbackFunc);
            expect(impl.onEvent).toHaveBeenCalledWith(expect.objectContaining({
                data: {
                    key1: 'value1',
                    key2: 'value2',
                },
                source: expect.objectContaining({
                    id: '1',
                    category: categories_1.categories[1],
                    name: 'name',
                    author: 'author',
                    organization: 'org',
                    version: '1.0.0',
                }),
            }));
            expect(callbackFunc).toHaveBeenCalledWith(null, expect.any(ldk_pb_1.Empty));
        }));
    });
});
