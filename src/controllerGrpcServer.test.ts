import { mocked } from 'ts-jest/utils';
import Services from './proto/ldk_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import ControllerGrpcServer from './controllerGrpcServer';
import { Controller } from './controller';
import { ConnInfo } from './proto/broker_pb';
import ControllerGrpcHostClient from './controllerGrpcHostClient';
import { OnEventRequest, Source, Empty } from './proto/ldk_pb';
import { categories } from './categories';

jest.mock('./proto/ldk_grpc_pb');
jest.mock('./brokerGrpcServer');
jest.mock('./controllerGrpcHostClient');

const mockedServices = mocked(Services.grpc.Server);
const mockedBroker = mocked(BrokerGrpcServer);
const mockedClient = mocked(ControllerGrpcHostClient);

describe('ControllerGrpcServer', () => {
  let server: ControllerGrpcServer;
  let broker: BrokerGrpcServer;
  let grpcServer: Services.grpc.Server;
  let impl: Controller;
  beforeEach(() => {
    grpcServer = new Services.grpc.Server();
    broker = new BrokerGrpcServer(grpcServer);
    impl = {
      start: jest.fn(),
      stop: jest.fn(),
      onEvent: jest.fn(),
    };
    server = new ControllerGrpcServer(grpcServer, impl, broker);
    mockedBroker.mockImplementation(() => {
      return {
        getConnInfo: (): Promise<ConnInfo.AsObject> => {
          return Promise.resolve({
            serviceId: 1,
            network: 'a',
            address: 'b',
          });
        },
      } as any;
    });
    mockedClient.mockImplementation(() => {
      return {
        connect: () => Promise.resolve(),
      } as any;
    });
  });
  describe('constructor', () => {
    it('should call addService on the server', () => {
      const serverInstance = mockedServices.mock.instances[0];
      expect(serverInstance.addService).toHaveBeenCalledTimes(1);
    });
  });
  describe('#start', () => {
    it('should call the implementation start and callback', async () => {
      const startFunc = server.start(impl);
      const callbackFunc = jest.fn();
      await startFunc({} as any, callbackFunc);
      expect(impl.start).toHaveBeenCalled();
      expect(callbackFunc).toHaveBeenCalled();
    });
  });
  describe('#stop', () => {
    it('should call the implementation stop and callback', async () => {
      const stopFunc = server.stop(impl);
      const callbackFunc = jest.fn();
      await stopFunc({} as any, callbackFunc);
      expect(impl.stop).toHaveBeenCalled();
      expect(callbackFunc).toHaveBeenCalled();
    });
  });
  describe('#onEvent', () => {
    let request: OnEventRequest;
    let source: Partial<Source>;
    let dataMap: any;
    beforeEach(() => {
      dataMap = {
        toObject: () => [
          ['key1', 'value1'],
          ['key2', 'value2'],
        ],
      };
      source = {
        getAuthor: () => 'author',
        getCategory: () => 1,
        getIcon: () => 'bathtub',
        getId: () => '1',
        getName: () => 'name',
        getOrganization: () => 'org',
        getUploadid: () => '1234-4321',
        getVersion: () => '1.0.0',
      };
      request = {
        getSource: () => source,
        getDataMap: () => dataMap,
      } as any;
    });
    it('should call the implementation onEvent with a properly constructed event object', async () => {
      const onEventFunc = server.onEvent(impl);
      const callbackFunc = jest.fn();
      await onEventFunc({ request } as any, callbackFunc);
      expect(impl.onEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          data: {
            key1: 'value1',
            key2: 'value2',
          },
          source: expect.objectContaining({
            author: 'author',
            category: categories[1],
            icon: 'bathtub',
            id: '1',
            name: 'name',
            organization: 'org',
            uploadId: '1234-4321',
            version: '1.0.0',
          }),
        }),
      );
      expect(callbackFunc).toHaveBeenCalledWith(null, expect.any(Empty));
    });
  });
});
