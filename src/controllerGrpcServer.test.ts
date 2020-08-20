import { mocked } from 'ts-jest/utils';
import Services from './proto/ldk_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import ControllerGrpcServer from './controllerGrpcServer';
import { Controller } from './controller';
import { ConnInfo } from './proto/broker_pb';
import ControllerGrpcHostClient from './controllerGrpcHostClient';

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
});
