import { FilesystemClient } from '../grpc/filesystem_grpc_pb';
import GRPCClient, { GRPCClientConstructor } from './GRPCClient';
import { FileSystemHost, FileSystemQueryDirectoryParams, FileSystemQueryDirectoryResponse, FileSystemQueryFileParams, FileSystemQueryFileResponse, FileSystemStreamDirectoryResponse, FileSystemStreamFileResponse } from './filesystemHost';
import { StoppableStream, StreamListener } from './stoppableStream';
export declare class FileSystemHostClient extends GRPCClient<FilesystemClient> implements FileSystemHost {
    protected generateClient(): GRPCClientConstructor<FilesystemClient>;
    queryDirectory(params: FileSystemQueryDirectoryParams): Promise<FileSystemQueryDirectoryResponse>;
    queryFile(params: FileSystemQueryFileParams): Promise<FileSystemQueryFileResponse>;
    streamDirectory(params: FileSystemQueryDirectoryParams, listener: StreamListener<FileSystemStreamDirectoryResponse>): StoppableStream<FileSystemStreamDirectoryResponse>;
    streamFile(params: FileSystemQueryFileParams, listener: StreamListener<FileSystemStreamFileResponse>): StoppableStream<FileSystemStreamFileResponse>;
}
