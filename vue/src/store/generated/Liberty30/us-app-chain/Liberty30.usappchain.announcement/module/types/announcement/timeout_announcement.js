/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'Liberty30.usappchain.announcement';
const baseTimeoutAnnouncement = { id: 0, signature: '' };
export const TimeoutAnnouncement = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.signature !== '') {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimeoutAnnouncement };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTimeoutAnnouncement };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTimeoutAnnouncement };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = '';
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