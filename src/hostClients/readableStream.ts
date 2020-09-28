export type StreamListener<T> = (error: string | null, input?: T) => void;

export interface ReadableStream<T> {
  stop(): void;

  setListener(callback: StreamListener<T>): void;
}
