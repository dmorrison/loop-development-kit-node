export interface ReadableStream<T> {
  stop(): void;

  setListener(callback: (input: T) => void): void;
}