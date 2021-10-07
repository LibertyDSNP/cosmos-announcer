import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface TimeoutAnnouncement {
    id: number;
    signature: string;
}
export declare const TimeoutAnnouncement: {
    encode(message: TimeoutAnnouncement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TimeoutAnnouncement;
    fromJSON(object: any): TimeoutAnnouncement;
    toJSON(message: TimeoutAnnouncement): unknown;
    fromPartial(object: DeepPartial<TimeoutAnnouncement>): TimeoutAnnouncement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
