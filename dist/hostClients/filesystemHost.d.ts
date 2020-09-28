import { StoppableStream, StreamListener } from './stoppableStream';
export interface FileInfo {
    name: string;
    size: number;
    mode: number;
    updated: Date | undefined;
    isDir: boolean;
}
export interface FileSystemQueryDirectoryParams {
    directory: string;
}
export interface FileSystemQueryFileParams {
    file: string;
}
export interface FileSystemQueryDirectoryResponse {
    files: FileInfo[];
}
export declare enum FileSystemStreamAction {
    Unknown = "unknown",
    Create = "create",
    Write = "write",
    Remove = "remove",
    Rename = "rename",
    Chmod = "chmod"
}
export interface FileSystemStreamDirectoryResponse {
    files: FileInfo;
    action: FileSystemStreamAction;
}
export interface FileSystemQueryFileResponse {
    file: FileInfo | undefined;
}
export interface FileSystemStreamFileResponse {
    file: FileInfo;
    action: FileSystemStreamAction;
}
export interface FileSystemHost {
    queryDirectory(params: FileSystemQueryDirectoryParams): Promise<FileSystemQueryDirectoryResponse>;
    streamDirectory(params: FileSystemQueryDirectoryParams, listener: StreamListener<FileSystemStreamDirectoryResponse>): StoppableStream<FileSystemStreamDirectoryResponse>;
    queryFile(params: FileSystemQueryFileParams): Promise<FileSystemQueryFileResponse>;
    streamFile(params: FileSystemQueryFileParams, listener: StreamListener<FileSystemStreamFileResponse>): StoppableStream<FileSystemStreamFileResponse>;
}
