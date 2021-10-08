import { Writer, Reader } from 'protobufjs/minimal';
import { Broadcast } from '../announcement/broadcast';
import { SentAnnouncement } from '../announcement/sent_announcement';
import { TimeoutAnnouncement } from '../announcement/timeout_announcement';
import { Publication } from '../announcement/publication';
export declare const protobufPackage = "Liberty30.usappchain.announcement";
/** GenesisState defines the announcement module's genesis state. */
export interface GenesisState {
    portId: string;
    broadcastList: Broadcast[];
    broadcastCount: number;
    sentAnnouncementList: SentAnnouncement[];
    sentAnnouncementCount: number;
    timeoutAnnouncementList: TimeoutAnnouncement[];
    timeoutAnnouncementCount: number;
    publicationList: Publication[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    publicationCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
