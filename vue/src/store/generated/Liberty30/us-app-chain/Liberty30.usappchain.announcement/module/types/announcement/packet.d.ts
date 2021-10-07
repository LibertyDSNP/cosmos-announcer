import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface AnnouncementPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcBatchPacket: IbcBatchPacketData | undefined;
}
export interface NoData {
}
/** IbcBatchPacketData defines a struct for the packet payload */
export interface IbcBatchPacketData {
    announcementType: string;
    fileHash: string;
    fileUrl: string;
}
/** IbcBatchPacketAck defines a struct for the packet acknowledgment */
export interface IbcBatchPacketAck {
    batchId: string;
}
export declare const AnnouncementPacketData: {
    encode(message: AnnouncementPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AnnouncementPacketData;
    fromJSON(object: any): AnnouncementPacketData;
    toJSON(message: AnnouncementPacketData): unknown;
    fromPartial(object: DeepPartial<AnnouncementPacketData>): AnnouncementPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcBatchPacketData: {
    encode(message: IbcBatchPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcBatchPacketData;
    fromJSON(object: any): IbcBatchPacketData;
    toJSON(message: IbcBatchPacketData): unknown;
    fromPartial(object: DeepPartial<IbcBatchPacketData>): IbcBatchPacketData;
};
export declare const IbcBatchPacketAck: {
    encode(message: IbcBatchPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcBatchPacketAck;
    fromJSON(object: any): IbcBatchPacketAck;
    toJSON(message: IbcBatchPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcBatchPacketAck>): IbcBatchPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
