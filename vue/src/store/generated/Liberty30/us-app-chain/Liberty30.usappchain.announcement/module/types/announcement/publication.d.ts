import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface Publication {
    id: number;
    batchId: string;
    announcementType: string;
    fileHash: string;
    fileUrl: string;
}
export declare const Publication: {
    encode(message: Publication, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Publication;
    fromJSON(object: any): Publication;
    toJSON(message: Publication): unknown;
    fromPartial(object: DeepPartial<Publication>): Publication;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
