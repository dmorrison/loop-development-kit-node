import { mocked } from 'ts-jest/utils';
import ControllerGrpcServer from './controllerGrpcServer';
import Services from './proto/ldk_grpc_pb';
import ControllerPlugin from './controllerPlugin';

const mockedGrpc = mocked(ControllerGrpcServer);
const mockedServices = mocked(Services.grpc.Server);

jest.mock('./controllerGrpcServer');
jest.mock('./proto/ldk_grpc_pb');

beforeEach(() => {
  mockedGrpc.mockClear();
  mockedServices.mockClear();
});

describe('ControllerPlugin', () => {
  let plugin: ControllerPlugin;
  it('consumes the mocked module', () => {
    plugin = new ControllerPlugin({} as any);
    expect(ControllerGrpcServer).toHaveBeenCalledTimes(1);
    expect(Services.grpc.Server).toHaveBeenCalledTimes(1);
    const mockServer = mockedServices.mock.instances[0];
    // Called with BrokerService,HealthService,StdioService
    expect(mockServer.addService).toHaveBeenCalledTimes(3);
  });
});
