import { mocked } from 'ts-jest/utils';
import Services from './proto/ldk_grpc_pb';
import SensorGRPCServer from './sensorGrpcServer';
import SensorPlugin from './sensorPlugin';
import { prepareLogging } from "./logging";

const mockedGrpc = mocked(SensorGRPCServer);
const mockedServices = mocked(Services.grpc.Server);

jest.mock('./sensorGrpcServer');
jest.mock('./proto/ldk_grpc_pb');
jest.mock('./logging');

beforeEach(() => {
  mockedGrpc.mockClear();
  mockedServices.mockClear();
});

describe('SensorPlugin', () => {
  let plugin: SensorPlugin;
  describe('constructor', () => {
    it('consumes the mocked module', () => {
      plugin = new SensorPlugin({} as any);
      expect(SensorGRPCServer).toHaveBeenCalledTimes(1);
      expect(Services.grpc.Server).toHaveBeenCalledTimes(1);
      const mockServer = mockedServices.mock.instances[0];
      // Called with BrokerService,HealthService,StdioService
      expect(mockServer.addService).toHaveBeenCalledTimes(3);
    });
  });
  describe('#serve', () => {
    it('calls server#start', async () => {
      plugin = new SensorPlugin({} as any);
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
