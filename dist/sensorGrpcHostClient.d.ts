import { SensorHostClient } from './proto/ldk_grpc_pb';
import { PluginEvent } from './pluginEvent';
import { SensorHost } from './sensorHost';
import GrpcHostClient from './grpcHostClient';
/**
 * Class used by the sensor implementation to interact with the host process.
 *
 * @internal
 */
declare class SensorGrpcHostClient extends GrpcHostClient<SensorHostClient> implements SensorHost {
    /**
     * Send an event to the host process.
     *
     * @param event - An object containing host process connection information.
     */
    emitEvent(event: PluginEvent): Promise<void>;
    protected generateClient(address: string): SensorHostClient;
}
export default SensorGrpcHostClient;
