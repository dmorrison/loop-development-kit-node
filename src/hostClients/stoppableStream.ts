export type StreamListener<T> = (error: string | null, input?: T) => void;

export interface StoppableStream<T> {
  stop(): void;

  setListener(callback: StreamListener<T>): void;
}
