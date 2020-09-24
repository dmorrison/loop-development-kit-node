import WhisperGrpcHostClient from "./whisperGrpcHostClient";
import StorageGrpcHostClient from "./storageGrpcHostClient";

export interface HostServices {
  whisperClient: WhisperGrpcHostClient;
  storageClient: StorageGrpcHostClient;
}