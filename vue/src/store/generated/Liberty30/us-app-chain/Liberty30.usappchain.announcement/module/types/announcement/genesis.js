/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Broadcast } from '../announcement/broadcast';
import { SentAnnouncement } from '../announcement/sent_announcement';
import { TimeoutAnnouncement } from '../announcement/timeout_announcement';
export const protobufPackage = 'Liberty30.usappchain.announcement';
const baseGenesisState = { portId: '', broadcastCount: 0, sentAnnouncementCount: 0, timeoutAnnouncementCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        for (const v of message.broadcastList) {
            Broadcast.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.broadcastCount !== 0) {
            writer.uint32(24).uint64(message.broadcastCount);
        }
        for (const v of message.sentAnnouncementList) {
            SentAnnouncement.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.sentAnnouncementCount !== 0) {
            writer.uint32(40).uint64(message.sentAnnouncementCount);
        }
        for (const v of message.timeoutAnnouncementList) {
            TimeoutAnnouncement.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutAnnouncementCount !== 0) {
            writer.uint32(56).uint64(message.timeoutAnnouncementCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.broadcastList = [];
        message.sentAnnouncementList = [];
        message.timeoutAnnouncementList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.broadcastList.push(Broadcast.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.broadcastCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.sentAnnouncementList.push(SentAnnouncement.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sentAnnouncementCount = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.timeoutAnnouncementList.push(TimeoutAnnouncement.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.timeoutAnnouncementCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.broadcastList = [];
        message.sentAnnouncementList = [];
        message.timeoutAnnouncementList = [];
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        if (object.broadcastList !== undefined && object.broadcastList !== null) {
            for (const e of object.broadcastList) {
                message.broadcastList.push(Broadcast.fromJSON(e));
            }
        }
        if (object.broadcastCount !== undefined && object.broadcastCount !== null) {
            message.broadcastCount = Number(object.broadcastCount);
        }
        else {
            message.broadcastCount = 0;
        }
        if (object.sentAnnouncementList !== undefined && object.sentAnnouncementList !== null) {
            for (const e of object.sentAnnouncementList) {
                message.sentAnnouncementList.push(SentAnnouncement.fromJSON(e));
            }
        }
        if (object.sentAnnouncementCount !== undefined && object.sentAnnouncementCount !== null) {
            message.sentAnnouncementCount = Number(object.sentAnnouncementCount);
        }
        else {
            message.sentAnnouncementCount = 0;
        }
        if (object.timeoutAnnouncementList !== undefined && object.timeoutAnnouncementList !== null) {
            for (const e of object.timeoutAnnouncementList) {
                message.timeoutAnnouncementList.push(TimeoutAnnouncement.fromJSON(e));
            }
        }
        if (object.timeoutAnnouncementCount !== undefined && object.timeoutAnnouncementCount !== null) {
            message.timeoutAnnouncementCount = Number(object.timeoutAnnouncementCount);
        }
        else {
            message.timeoutAnnouncementCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.broadcastList) {
            obj.broadcastList = message.broadcastList.map((e) => (e ? Broadcast.toJSON(e) : undefined));
        }
        else {
            obj.broadcastList = [];
        }
        message.broadcastCount !== undefined && (obj.broadcastCount = message.broadcastCount);
        if (message.sentAnnouncementList) {
            obj.sentAnnouncementList = message.sentAnnouncementList.map((e) => (e ? SentAnnouncement.toJSON(e) : undefined));
        }
        else {
            obj.sentAnnouncementList = [];
        }
        message.sentAnnouncementCount !== undefined && (obj.sentAnnouncementCount = message.sentAnnouncementCount);
        if (message.timeoutAnnouncementList) {
            obj.timeoutAnnouncementList = message.timeoutAnnouncementList.map((e) => (e ? TimeoutAnnouncement.toJSON(e) : undefined));
        }
        else {
            obj.timeoutAnnouncementList = [];
        }
        message.timeoutAnnouncementCount !== undefined && (obj.timeoutAnnouncementCount = message.timeoutAnnouncementCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.broadcastList = [];
        message.sentAnnouncementList = [];
        message.timeoutAnnouncementList = [];
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        if (object.broadcastList !== undefined && object.broadcastList !== null) {
            for (const e of object.broadcastList) {
                message.broadcastList.push(Broadcast.fromPartial(e));
            }
        }
        if (object.broadcastCount !== undefined && object.broadcastCount !== null) {
            message.broadcastCount = object.broadcastCount;
        }
        else {
            message.broadcastCount = 0;
        }
        if (object.sentAnnouncementList !== undefined && object.sentAnnouncementList !== null) {
            for (const e of object.sentAnnouncementList) {
                message.sentAnnouncementList.push(SentAnnouncement.fromPartial(e));
            }
        }
        if (object.sentAnnouncementCount !== undefined && object.sentAnnouncementCount !== null) {
            message.sentAnnouncementCount = object.sentAnnouncementCount;
        }
        else {
            message.sentAnnouncementCount = 0;
        }
        if (object.timeoutAnnouncementList !== undefined && object.timeoutAnnouncementList !== null) {
            for (const e of object.timeoutAnnouncementList) {
                message.timeoutAnnouncementList.push(TimeoutAnnouncement.fromPartial(e));
            }
        }
        if (object.timeoutAnnouncementCount !== undefined && object.timeoutAnnouncementCount !== null) {
            message.timeoutAnnouncementCount = object.timeoutAnnouncementCount;
        }
        else {
            message.timeoutAnnouncementCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
