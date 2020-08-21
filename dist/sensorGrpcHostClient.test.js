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
const ldk_pb_1 = __importDefault(require("./proto/ldk_pb"));
const sensorGrpcHostClient_1 = __importDefault(require("./sensorGrpcHostClient"));
jest.mock('./proto/ldk_pb');
jest.mock('./proto/ldk_grpc_pb');
const hostClient = utils_1.mocked(ldk_grpc_pb_1.default.SensorHostClient);
describe('SensorGrpcHostClient', () => {
    let subject;
    let connInfo;
    let waitForReadyMock;
    let emitEventMock;
    let storageDeleteMock;
    let storageDeleteAllMock;
    let storageHasKeyMock;
    let storageKeysMock;
    let storageReadMock;
    let storageReadAllMock;
    let storageWriteMock;
    function createCallbackHandler(response) {
        return (request, callback) => {
            callback(null, response);
        };
    }
    beforeEach(() => {
        jest.resetAllMocks();
        subject = new sensorGrpcHostClient_1.default();
        connInfo = {
            address: 'a',
            serviceId: 1,
            network: 'n',
        };
        waitForReadyMock = jest.fn().mockImplementation(createCallbackHandler());
        hostClient.mockImplementation(() => {
            return {
                waitForReady: waitForReadyMock,
                emitEvent: emitEventMock,
                storageDelete: storageDeleteMock,
                storageDeleteAll: storageDeleteAllMock,
                storageHasKey: storageHasKeyMock,
                storageKeys: storageKeysMock,
                storageRead: storageReadMock,
                storageReadAll: storageReadAllMock,
                storageWrite: storageWriteMock,
            };
        });
    });
    describe('#connect', () => {
        it('instantiates a new host client and waits for it to be ready', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.connect(connInfo)).resolves.toBe(undefined);
        }));
    });
    describe('#emitEvent', () => {
        const event = {
            data: {
                a: 'b',
                c: 'd',
            },
        };
        let setDataMapMock;
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            const emitEventRequest = utils_1.mocked(ldk_pb_1.default.EmitEventRequest);
            emitEventRequest.mockImplementation(() => ({
                getDataMap: () => ({
                    set: setDataMapMock,
                }),
            }));
            setDataMapMock = jest.fn();
            emitEventMock = jest.fn().mockImplementation(createCallbackHandler());
            yield subject.connect(connInfo);
            yield expect(subject.emitEvent(event)).resolves.toBe(undefined);
        }));
        it('resolves successfully with a correctly configured request', () => {
            expect(setDataMapMock).toHaveBeenCalledWith('a', '"b"');
            expect(setDataMapMock).toHaveBeenCalledWith('c', '"d"');
        });
    });
    describe('#storageDelete', () => {
        const storageKey = 'key';
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            storageDeleteMock = jest.fn().mockImplementation(createCallbackHandler());
            yield subject.connect(connInfo);
            yield expect(subject.storageDelete(storageKey)).resolves.toBe(undefined);
        }));
        it('should call client.storageDelete and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(storageDeleteMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.StorageDeleteRequest), expect.any(Function));
        }));
        it('should have configured the request with the right key', () => {
            expect(utils_1.mocked(ldk_pb_1.default.StorageDeleteRequest).mock.instances[0].setKey).toHaveBeenCalledWith(storageKey);
        });
    });
    describe('#storageDeleteAll', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            storageDeleteAllMock = jest
                .fn()
                .mockImplementation(createCallbackHandler());
            yield subject.connect(connInfo);
            yield expect(subject.storageDeleteAll()).resolves.toBe(undefined);
        }));
        it('should call client.storageDeleteAll and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(storageDeleteAllMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.Empty), expect.any(Function));
        }));
    });
    describe('#storageHasKey', () => {
        const storageKey = 'key';
        let mockResponse;
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            mockResponse = new ldk_pb_1.default.StorageHasKeyResponse();
            utils_1.mocked(mockResponse.getHaskey).mockReturnValue(true);
            storageHasKeyMock = jest
                .fn()
                .mockImplementation(createCallbackHandler(mockResponse));
            yield subject.connect(connInfo);
        }));
        it('should call client.storageHasKey and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.storageHasKey(storageKey)).resolves.toBe(true);
            expect(storageHasKeyMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.StorageHasKeyRequest), expect.any(Function));
            expect(utils_1.mocked(ldk_pb_1.default.StorageHasKeyRequest).mock.instances[0].setKey).toHaveBeenCalledWith(storageKey);
        }));
    });
    describe('#storageKeys', () => {
        let mockResponse;
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            mockResponse = new ldk_pb_1.default.StorageKeysResponse();
            utils_1.mocked(mockResponse.getKeysList).mockReturnValue(['a', 'b']);
            storageKeysMock = jest
                .fn()
                .mockImplementation(createCallbackHandler(mockResponse));
            yield subject.connect(connInfo);
        }));
        it('should call client.storageKeys and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.storageKeys()).resolves.toStrictEqual(['a', 'b']);
            expect(storageKeysMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.Empty), expect.any(Function));
        }));
    });
    describe('#storageRead', () => {
        let mockResponse;
        const keyValue = 'value';
        const key = 'key';
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            mockResponse = new ldk_pb_1.default.StorageReadResponse();
            utils_1.mocked(mockResponse.getValue).mockReturnValue(keyValue);
            storageReadMock = jest
                .fn()
                .mockImplementation(createCallbackHandler(mockResponse));
            yield subject.connect(connInfo);
        }));
        it('should call client.storageRead and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.storageRead(key)).resolves.toEqual(keyValue);
            expect(storageReadMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.StorageReadRequest), expect.any(Function));
            expect(utils_1.mocked(ldk_pb_1.default.StorageReadRequest).mock.instances[0].setKey).toHaveBeenCalledWith(key);
        }));
    });
    describe('#storageReadAll', () => {
        let mockResponse;
        const responseValues = [
            ['key1', 'value1'],
            ['key2', 'value2'],
        ];
        const response = {
            toObject: () => responseValues,
        };
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            mockResponse = new ldk_pb_1.default.StorageReadAllResponse();
            utils_1.mocked(mockResponse.getEntriesMap).mockReturnValue(response);
            storageReadAllMock = jest
                .fn()
                .mockImplementation(createCallbackHandler(mockResponse));
            yield subject.connect(connInfo);
        }));
        it('should call client.storageReadAll and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.storageReadAll()).resolves.toEqual({
                key1: 'value1',
                key2: 'value2',
            });
            expect(storageReadAllMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.Empty), expect.any(Function));
        }));
    });
    describe('#storageWrite', () => {
        const keyValue = 'value';
        const key = 'key';
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            storageWriteMock = jest.fn().mockImplementation(createCallbackHandler());
            yield subject.connect(connInfo);
        }));
        it('should call client.storageWrite and resolve successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(subject.storageWrite(key, keyValue)).resolves.toEqual(undefined);
            expect(storageWriteMock).toHaveBeenCalledWith(expect.any(ldk_pb_1.default.StorageWriteRequest), expect.any(Function));
            const writeRequest = utils_1.mocked(ldk_pb_1.default.StorageWriteRequest).mock
                .instances[0];
            expect(writeRequest.setKey).toHaveBeenCalledWith(key);
            expect(writeRequest.setValue).toHaveBeenCalledWith(keyValue);
        }));
    });
});
