import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import services, { grpc, ILoopServer } from './grpc/loop_grpc_pb';
import BrokerGrpcServer from './brokerGrpcServer';
import messages from './grpc/loop_pb';
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
     *
     * @param call - The GRPC call initiating the loop.
     * @param callback - The callback to respond to once the loop started.
     */
    loopStart(call: grpc.ServerUnaryCall<messages.LoopStartRequest, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void>;
    /**
     * Called by the host to stop the Loop.
     *
     * @param call - The GRPC call stopping the loop.
     * @param callback - The callback to respond to once the loop stopped.
     */
    loopStop(call: grpc.ServerUnaryCall<Empty, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void>;
}
