import messages from './proto/ldk_pb';
import { grpc, SensorHostClient } from './proto/ldk_grpc_pb';
import { PluginEvent } from './pluginEvent';
import { SensorHost } from './sensorHost';
import GrpcHostClient from './grpcHostClient';

/**
 * Class used by the sensor implementation to interact with the host process.
 *
 * @internal
 */
class SensorGrpcHostClient extends GrpcHostClient<SensorHostClient>
  implements SensorHost {
  /**
   * Send an event to the host process.
   *
   * @param event - An object containing host process connection information.
   */
  emitEvent(event: PluginEvent): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitEventRequest();

      Object.entries(event.data).forEach(([key, value]) => {
        request.getDataMap().set(key, JSON.stringify(value));
      });

      this.client.emitEvent(request, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  protected generateClient(address: string): SensorHostClient {
    return new SensorHostClient(address, grpc.credentials.createInsecure());
  }
}

export default SensorGrpcHostClient;
