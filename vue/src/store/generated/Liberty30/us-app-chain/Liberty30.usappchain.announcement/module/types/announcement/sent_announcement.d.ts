import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface SentAnnouncement {
    id: number;
    batchId: string;
}
export declare const SentAnnouncement: {
    encode(message: SentAnnouncement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SentAnnouncement;
    fromJSON(object: any): SentAnnouncement;
    toJSON(message: SentAnnouncement): unknown;
    fromPartial(object: DeepPartial<SentAnnouncement>): SentAnnouncement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
