import { mocked } from 'ts-jest/utils';
import Services from './proto/loop_grpc_pb';
import GrpcServer from './grpcServer';
import ControllerPlugin from './controllerPlugin';
import { prepareLogging } from "./logging";

const mockedGrpc = mocked(GrpcServer);
const mockedServices = mocked(Services.grpc.Server);

jest.mock('./controllerGrpcServer');
jest.mock('./proto/ldk_grpc_pb');
jest.mock('./logging');

beforeEach(() => {
  mockedGrpc.mockClear();
  mockedServices.mockClear();
});

describe('ControllerPlugin', () => {
  let plugin: ControllerPlugin;
  describe('constructor', () => {
    it('consumes the mocked module', () => {
      plugin = new ControllerPlugin({} as any);
      expect(GrpcServer).toHaveBeenCalledTimes(1);
      expect(Services.grpc.Server).toHaveBeenCalledTimes(1);
      const mockServer = mockedServices.mock.instances[0];
      // Called with BrokerService,HealthService,StdioService
      expect(mockServer.addService).toHaveBeenCalledTimes(3);
    });
  });
  describe('#serve', () => {
    it('calls server#start', async () => {
      plugin = new ControllerPlugin({} as any);
      const mockServer = mockedServices.mock.instances[0];
      mocked(
        mockServer.bindAsync,
      ).mockImplementation((port, credentials, callback) => {
        callback(null, 123);
      });
      await plugin.serve();
      expect(mockServer.start).toHaveBeenCalledTimes(1);
      expect(prepareLogging).toHaveBeenCalled();
    });
  });
});
