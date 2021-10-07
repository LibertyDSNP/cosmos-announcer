import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface MsgSendIbcBatch {
    creator: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    announcementType: string;
    fileHash: string;
    fileUrl: string;
}
export interface MsgSendIbcBatchResponse {
}
export declare const MsgSendIbcBatch: {
    encode(message: MsgSendIbcBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcBatch;
    fromJSON(object: any): MsgSendIbcBatch;
    toJSON(message: MsgSendIbcBatch): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcBatch>): MsgSendIbcBatch;
};
export declare const MsgSendIbcBatchResponse: {
    encode(_: MsgSendIbcBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcBatchResponse;
    fromJSON(_: any): MsgSendIbcBatchResponse;
    toJSON(_: MsgSendIbcBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcBatchResponse>): MsgSendIbcBatchResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendIbcBatch(request: MsgSendIbcBatch): Promise<MsgSendIbcBatchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendIbcBatch(request: MsgSendIbcBatch): Promise<MsgSendIbcBatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
