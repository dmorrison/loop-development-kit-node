import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import services, { grpc } from './proto/loop_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/loop_pb';
import { LoopPlugin } from './loopPlugin';
import { Loop } from './loop';
import WhisperGrpcHostClient from './whisperGrpcHostClient';

/**
 * @internal
 */
export default class GRPCServer {
  protected broker: BrokerGrpcServer;

  constructor(
    server: services.grpc.Server,
    broker: BrokerGrpcServer,
    impl: Loop,
  ) {
    this.broker = broker;
    server.addService(services.LoopService, {
      loopStart: this.start(impl),
      loopStop: this.stop(impl),
    });
  }

  /**
   * Called by the host to start the sensor implementation.
   *
   * @param impl - The implementation of the sensor.
   */
  start(impl: Loop): grpc.handleUnaryCall<messages.LoopStartRequest, Empty> {
    return async (call, callback) => {
      const connInfo = await this.broker.getConnInfo();
      // TODO: Replace with creating all hosts.
      const hostClient = this.createHost();

      await hostClient.connect(connInfo).catch((err) => {
        throw err;
      });
      await impl.start(hostClient);

      const response = new Empty();
      callback(null, response);
    };
  }

  /**
   * Called by the host to stop the sensor implementation.
   *
   * @param impl - The implementation of the sensor.
   */
  stop(impl: Loop): grpc.handleUnaryCall<Empty, Empty> {
    return async (call, callback) => {
      await impl.stop();

      const response = new Empty();
      callback(null, response);
    };
  }

  createHost(): WhisperGrpcHostClient {
    throw new Error('Not Implemented');
  }
}
