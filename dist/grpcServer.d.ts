import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import services, { grpc, ILoopServer } from './proto/loop_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import messages from './proto/loop_pb';
import { Loop } from './loop';
/**
 * @internal
 */
export default class GRPCServer implements ILoopServer {
    protected broker: BrokerGrpcServer;
    private loop;
    constructor(server: services.grpc.Server, broker: BrokerGrpcServer, impl: Loop);
    /**
     * Called by the host to start the Loop.
     */
    loopStart(call: grpc.ServerUnaryCall<messages.LoopStartRequest, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void>;
    /**
     * Called by the host to stop the Loop.
     */
    loopStop(call: grpc.ServerUnaryCall<Empty, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void>;
}
