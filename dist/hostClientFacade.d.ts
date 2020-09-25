import { ConnInfo } from './proto/broker_pb';
import { HostServices } from './hostServices';
import WhisperHostClient from './hostClients/whisperHostClient';
import StorageHostClient from './hostClients/storageHostClient';
import KeyboardSensorClient from './hostClients/keyboardSensorClient';
export default class HostClientFacade implements HostServices {
    whisperClient: WhisperHostClient;
    storageClient: StorageHostClient;
    keyboardClient: KeyboardSensorClient;
    connect(connInfo: ConnInfo.AsObject): Promise<void[]>;
}
