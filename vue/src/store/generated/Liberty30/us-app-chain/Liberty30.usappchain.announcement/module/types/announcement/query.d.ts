import { Reader, Writer } from 'protobufjs/minimal';
import { Broadcast } from '../announcement/broadcast';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SentAnnouncement } from '../announcement/sent_announcement';
import { TimeoutAnnouncement } from '../announcement/timeout_announcement';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
export interface QueryGetBroadcastRequest {
    id: number;
}
export interface QueryGetBroadcastResponse {
    Broadcast: Broadcast | undefined;
}
export interface QueryAllBroadcastRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBroadcastResponse {
    Broadcast: Broadcast[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSentAnnouncementRequest {
    id: number;
}
export interface QueryGetSentAnnouncementResponse {
    SentAnnouncement: SentAnnouncement | undefined;
}
export interface QueryAllSentAnnouncementRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSentAnnouncementResponse {
    SentAnnouncement: SentAnnouncement[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTimeoutAnnouncementRequest {
    id: number;
}
export interface QueryGetTimeoutAnnouncementResponse {
    TimeoutAnnouncement: TimeoutAnnouncement | undefined;
}
export interface QueryAllTimeoutAnnouncementRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimeoutAnnouncementResponse {
    TimeoutAnnouncement: TimeoutAnnouncement[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBroadcastRequest: {
    encode(message: QueryGetBroadcastRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBroadcastRequest;
    fromJSON(object: any): QueryGetBroadcastRequest;
    toJSON(message: QueryGetBroadcastRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBroadcastRequest>): QueryGetBroadcastRequest;
};
export declare const QueryGetBroadcastResponse: {
    encode(message: QueryGetBroadcastResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBroadcastResponse;
    fromJSON(object: any): QueryGetBroadcastResponse;
    toJSON(message: QueryGetBroadcastResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBroadcastResponse>): QueryGetBroadcastResponse;
};
export declare const QueryAllBroadcastRequest: {
    encode(message: QueryAllBroadcastRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBroadcastRequest;
    fromJSON(object: any): QueryAllBroadcastRequest;
    toJSON(message: QueryAllBroadcastRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBroadcastRequest>): QueryAllBroadcastRequest;
};
export declare const QueryAllBroadcastResponse: {
    encode(message: QueryAllBroadcastResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBroadcastResponse;
    fromJSON(object: any): QueryAllBroadcastResponse;
    toJSON(message: QueryAllBroadcastResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBroadcastResponse>): QueryAllBroadcastResponse;
};
export declare const QueryGetSentAnnouncementRequest: {
    encode(message: QueryGetSentAnnouncementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentAnnouncementRequest;
    fromJSON(object: any): QueryGetSentAnnouncementRequest;
    toJSON(message: QueryGetSentAnnouncementRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentAnnouncementRequest>): QueryGetSentAnnouncementRequest;
};
export declare const QueryGetSentAnnouncementResponse: {
    encode(message: QueryGetSentAnnouncementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentAnnouncementResponse;
    fromJSON(object: any): QueryGetSentAnnouncementResponse;
    toJSON(message: QueryGetSentAnnouncementResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentAnnouncementResponse>): QueryGetSentAnnouncementResponse;
};
export declare const QueryAllSentAnnouncementRequest: {
    encode(message: QueryAllSentAnnouncementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentAnnouncementRequest;
    fromJSON(object: any): QueryAllSentAnnouncementRequest;
    toJSON(message: QueryAllSentAnnouncementRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentAnnouncementRequest>): QueryAllSentAnnouncementRequest;
};
export declare const QueryAllSentAnnouncementResponse: {
    encode(message: QueryAllSentAnnouncementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentAnnouncementResponse;
    fromJSON(object: any): QueryAllSentAnnouncementResponse;
    toJSON(message: QueryAllSentAnnouncementResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentAnnouncementResponse>): QueryAllSentAnnouncementResponse;
};
export declare const QueryGetTimeoutAnnouncementRequest: {
    encode(message: QueryGetTimeoutAnnouncementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutAnnouncementRequest;
    fromJSON(object: any): QueryGetTimeoutAnnouncementRequest;
    toJSON(message: QueryGetTimeoutAnnouncementRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeoutAnnouncementRequest>): QueryGetTimeoutAnnouncementRequest;
};
export declare const QueryGetTimeoutAnnouncementResponse: {
    encode(message: QueryGetTimeoutAnnouncementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutAnnouncementResponse;
    fromJSON(object: any): QueryGetTimeoutAnnouncementResponse;
    toJSON(message: QueryGetTimeoutAnnouncementResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeoutAnnouncementResponse>): QueryGetTimeoutAnnouncementResponse;
};
export declare const QueryAllTimeoutAnnouncementRequest: {
    encode(message: QueryAllTimeoutAnnouncementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutAnnouncementRequest;
    fromJSON(object: any): QueryAllTimeoutAnnouncementRequest;
    toJSON(message: QueryAllTimeoutAnnouncementRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeoutAnnouncementRequest>): QueryAllTimeoutAnnouncementRequest;
};
export declare const QueryAllTimeoutAnnouncementResponse: {
    encode(message: QueryAllTimeoutAnnouncementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutAnnouncementResponse;
    fromJSON(object: any): QueryAllTimeoutAnnouncementResponse;
    toJSON(message: QueryAllTimeoutAnnouncementResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeoutAnnouncementResponse>): QueryAllTimeoutAnnouncementResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a broadcast by id. */
    Broadcast(request: QueryGetBroadcastRequest): Promise<QueryGetBroadcastResponse>;
    /** Queries a list of broadcast items. */
    BroadcastAll(request: QueryAllBroadcastRequest): Promise<QueryAllBroadcastResponse>;
    /** Queries a sentAnnouncement by id. */
    SentAnnouncement(request: QueryGetSentAnnouncementRequest): Promise<QueryGetSentAnnouncementResponse>;
    /** Queries a list of sentAnnouncement items. */
    SentAnnouncementAll(request: QueryAllSentAnnouncementRequest): Promise<QueryAllSentAnnouncementResponse>;
    /** Queries a timeoutAnnouncement by id. */
    TimeoutAnnouncement(request: QueryGetTimeoutAnnouncementRequest): Promise<QueryGetTimeoutAnnouncementResponse>;
    /** Queries a list of timeoutAnnouncement items. */
    TimeoutAnnouncementAll(request: QueryAllTimeoutAnnouncementRequest): Promise<QueryAllTimeoutAnnouncementResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Broadcast(request: QueryGetBroadcastRequest): Promise<QueryGetBroadcastResponse>;
    BroadcastAll(request: QueryAllBroadcastRequest): Promise<QueryAllBroadcastResponse>;
    SentAnnouncement(request: QueryGetSentAnnouncementRequest): Promise<QueryGetSentAnnouncementResponse>;
    SentAnnouncementAll(request: QueryAllSentAnnouncementRequest): Promise<QueryAllSentAnnouncementResponse>;
    TimeoutAnnouncement(request: QueryGetTimeoutAnnouncementRequest): Promise<QueryGetTimeoutAnnouncementResponse>;
    TimeoutAnnouncementAll(request: QueryAllTimeoutAnnouncementRequest): Promise<QueryAllTimeoutAnnouncementResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
