import { mocked } from 'ts-jest/utils';
import Services from './proto/loop_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import { Loop } from './loop';
import { ConnInfo } from './proto/broker_pb';
import WhisperGrpcHostClient from './whisperGrpcHostClient';
import GRPCServer from './grpcServer';

jest.mock('./proto/ldk_grpc_pb');
jest.mock('./brokerGrpcServer');
jest.mock('./controllerGrpcHostClient');

const mockedServices = mocked(Services.grpc.Server);
const mockedBroker = mocked(BrokerGrpcServer);
const mockedClient = mocked(WhisperGrpcHostClient);

describe('GrpcServer', () => {
  let server: GRPCServer;
  let broker: BrokerGrpcServer;
  let grpcServer: Services.grpc.Server;
  let impl: Loop;
  beforeEach(() => {
    grpcServer = new Services.grpc.Server();
    broker = new BrokerGrpcServer(grpcServer);
    impl = {
      start: jest.fn(),
      stop: jest.fn(),
    };
    server = new GRPCServer(grpcServer, broker, impl);
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
});
