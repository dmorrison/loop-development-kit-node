import { mocked } from 'ts-jest/utils';
import Services from './proto/ldk_grpc_pb';
import Messages from './proto/ldk_pb';
import SensorGrpcHostClient from './sensorGrpcHostClient';
import { ConnInfo } from './proto/broker_pb';
import { PluginEvent } from './pluginEvent';

jest.mock('./proto/ldk_pb');
jest.mock('./proto/ldk_grpc_pb');

const hostClient = mocked(Services.SensorHostClient);

describe('SensorGrpcHostClient', () => {
  let subject: SensorGrpcHostClient;
  let connInfo: ConnInfo.AsObject;
  let waitForReadyMock: jest.Mock;
  let emitEventMock: jest.Mock;
  let storageDeleteMock: jest.Mock;
  let storageDeleteAllMock: jest.Mock;
  let storageHasKeyMock: jest.Mock;
  let storageKeysMock: jest.Mock;
  let storageReadMock: jest.Mock;
  let storageReadAllMock: jest.Mock;
  let storageWriteMock: jest.Mock;
  function createCallbackHandler(
    response?: any,
  ): (
    request: any,
    callback: (err: Error | null, response: any) => void,
  ) => void {
    return (request, callback) => {
      callback(null, response);
    };
  }
  beforeEach(function () {
    jest.resetAllMocks();
    subject = new SensorGrpcHostClient();
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
      } as any;
    });
  });
  describe('#connect', () => {
    it('instantiates a new host client and waits for it to be ready', async () => {
      await expect(subject.connect(connInfo)).resolves.toBe(undefined);
    });
  });
  describe('#emitEvent', () => {
    const event: PluginEvent = {
      data: {
        a: 'b',
        c: 'd',
      },
    };
    let setDataMapMock: jest.Mock;
    beforeEach(async () => {
      const emitEventRequest = mocked(Messages.EmitEventRequest);
      emitEventRequest.mockImplementation(
        () =>
          ({
            getDataMap: () => ({
              set: setDataMapMock,
            }),
          } as any),
      );
      setDataMapMock = jest.fn();
      emitEventMock = jest.fn().mockImplementation(createCallbackHandler());
      await subject.connect(connInfo);
      await expect(subject.emitEvent(event)).resolves.toBe(undefined);
    });
    it('resolves successfully with a correctly configured request', () => {
      expect(setDataMapMock).toHaveBeenCalledWith('a', '"b"');
      expect(setDataMapMock).toHaveBeenCalledWith('c', '"d"');
    });
  });
  describe('#storageDelete', () => {
    const storageKey = 'key';
    beforeEach(async () => {
      storageDeleteMock = jest.fn().mockImplementation(createCallbackHandler());
      await subject.connect(connInfo);
      await expect(subject.storageDelete(storageKey)).resolves.toBe(undefined);
    });
    it('should call client.storageDelete and resolve successfully', async () => {
      expect(storageDeleteMock).toHaveBeenCalledWith(
        expect.any(Messages.StorageDeleteRequest),
        expect.any(Function),
      );
    });
    it('should have configured the request with the right key', () => {
      expect(
        mocked(Messages.StorageDeleteRequest).mock.instances[0].setKey,
      ).toHaveBeenCalledWith(storageKey);
    });
  });
  describe('#storageDeleteAll', () => {
    beforeEach(async () => {
      storageDeleteAllMock = jest
        .fn()
        .mockImplementation(createCallbackHandler());
      await subject.connect(connInfo);
      await expect(subject.storageDeleteAll()).resolves.toBe(undefined);
    });
    it('should call client.storageDeleteAll and resolve successfully', async () => {
      expect(storageDeleteAllMock).toHaveBeenCalledWith(
        expect.any(Messages.Empty),
        expect.any(Function),
      );
    });
  });
  describe('#storageHasKey', () => {
    const storageKey = 'key';
    let mockResponse: Messages.StorageHasKeyResponse;
    beforeEach(async () => {
      mockResponse = new Messages.StorageHasKeyResponse();
      mocked(mockResponse.getHaskey).mockReturnValue(true);
      storageHasKeyMock = jest
        .fn()
        .mockImplementation(createCallbackHandler(mockResponse));
      await subject.connect(connInfo);
    });
    it('should call client.storageHasKey and resolve successfully', async () => {
      await expect(subject.storageHasKey(storageKey)).resolves.toBe(true);
      expect(storageHasKeyMock).toHaveBeenCalledWith(
        expect.any(Messages.StorageHasKeyRequest),
        expect.any(Function),
      );
      expect(
        mocked(Messages.StorageHasKeyRequest).mock.instances[0].setKey,
      ).toHaveBeenCalledWith(storageKey);
    });
  });
  describe('#storageKeys', () => {
    let mockResponse: Messages.StorageKeysResponse;
    beforeEach(async () => {
      mockResponse = new Messages.StorageKeysResponse();
      mocked(mockResponse.getKeysList).mockReturnValue(['a', 'b']);
      storageKeysMock = jest
        .fn()
        .mockImplementation(createCallbackHandler(mockResponse));
      await subject.connect(connInfo);
    });
    it('should call client.storageKeys and resolve successfully', async () => {
      await expect(subject.storageKeys()).resolves.toStrictEqual(['a', 'b']);
      expect(storageKeysMock).toHaveBeenCalledWith(
        expect.any(Messages.Empty),
        expect.any(Function),
      );
    });
  });
  describe('#storageRead', () => {
    let mockResponse: Messages.StorageReadResponse;
    const keyValue = 'value';
    const key = 'key';
    beforeEach(async () => {
      mockResponse = new Messages.StorageReadResponse();
      mocked(mockResponse.getValue).mockReturnValue(keyValue);
      storageReadMock = jest
        .fn()
        .mockImplementation(createCallbackHandler(mockResponse));
      await subject.connect(connInfo);
    });
    it('should call client.storageRead and resolve successfully', async () => {
      await expect(subject.storageRead(key)).resolves.toEqual(keyValue);
      expect(storageReadMock).toHaveBeenCalledWith(
        expect.any(Messages.StorageReadRequest),
        expect.any(Function),
      );
      expect(
        mocked(Messages.StorageReadRequest).mock.instances[0].setKey,
      ).toHaveBeenCalledWith(key);
    });
  });
  describe('#storageReadAll', () => {
    let mockResponse: Messages.StorageReadAllResponse;
    const responseValues: [string, string][] = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];
    const response = {
      toObject: () => responseValues,
    };
    beforeEach(async () => {
      mockResponse = new Messages.StorageReadAllResponse();
      mocked(mockResponse.getEntriesMap).mockReturnValue(response as any);
      storageReadAllMock = jest
        .fn()
        .mockImplementation(createCallbackHandler(mockResponse));
      await subject.connect(connInfo);
    });
    it('should call client.storageReadAll and resolve successfully', async () => {
      await expect(subject.storageReadAll()).resolves.toEqual({
        key1: 'value1',
        key2: 'value2',
      });
      expect(storageReadAllMock).toHaveBeenCalledWith(
        expect.any(Messages.Empty),
        expect.any(Function),
      );
    });
  });
  describe('#storageWrite', () => {
    const keyValue = 'value';
    const key = 'key';
    beforeEach(async () => {
      storageWriteMock = jest.fn().mockImplementation(createCallbackHandler());
      await subject.connect(connInfo);
    });
    it('should call client.storageWrite and resolve successfully', async () => {
      await expect(subject.storageWrite(key, keyValue)).resolves.toEqual(
        undefined,
      );
      expect(storageWriteMock).toHaveBeenCalledWith(
        expect.any(Messages.StorageWriteRequest),
        expect.any(Function),
      );
      const writeRequest = mocked(Messages.StorageWriteRequest).mock
        .instances[0];
      expect(writeRequest.setKey).toHaveBeenCalledWith(key);
      expect(writeRequest.setValue).toHaveBeenCalledWith(keyValue);
    });
  });
});
