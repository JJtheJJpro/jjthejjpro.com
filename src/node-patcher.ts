import buffer from "buffer";
import process from "process";

(window as any).Buffer = buffer.Buffer;
(window as any).process = process;

export {};
