import { mocked } from 'ts-jest/utils';
import Services from './proto/ldk_grpc_pb';
import ControllerGrpcHostClient from './controllerGrpcHostClient';
import { ConnInfo } from './proto/broker_pb';
import MockedFunction = jest.MockedFunction;

jest.mock('./proto/ldk_grpc_pb');

const hostClient = mocked(Services.ControllerHostClient);

describe('ControllerGrpcHostClient', () => {
  let subject: ControllerGrpcHostClient;
  let connInfo: ConnInfo.AsObject;
  let waitForReadyMock: jest.Mock<any>;
  describe('#connect', () => {
    beforeEach(() => {
      subject = new ControllerGrpcHostClient();
      connInfo = {
        address: 'a',
        serviceId: 1,
        network: 'n',
      };
      waitForReadyMock = jest.fn();
      hostClient.mockImplementation(() => {
        return {
          waitForReady: waitForReadyMock,
        } as any;
      });
    });
    it('instantiates a new host client and waits for it to be ready', async () => {
      waitForReadyMock.mockImplementation((deadline, callback) => {
        callback(undefined);
      })
      await expect(subject.connect(connInfo)).resolves.toBe(undefined);
    });
  });
});
