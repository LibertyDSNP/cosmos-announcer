import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface Broadcast {
    id: number;
    contentHash: string;
    fromId: string;
    url: string;
    signature: string;
}
export declare const Broadcast: {
    encode(message: Broadcast, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Broadcast;
    fromJSON(object: any): Broadcast;
    toJSON(message: Broadcast): unknown;
    fromPartial(object: DeepPartial<Broadcast>): Broadcast;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
