/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Broadcast } from '../announcement/broadcast';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SentAnnouncement } from '../announcement/sent_announcement';
import { TimeoutAnnouncement } from '../announcement/timeout_announcement';
import { Publication } from '../announcement/publication';
export const protobufPackage = 'Liberty30.usappchain.announcement';
const baseQueryGetBroadcastRequest = { id: 0 };
export const QueryGetBroadcastRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBroadcastRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBroadcastRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBroadcastRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBroadcastResponse = {};
export const QueryGetBroadcastResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Broadcast !== undefined) {
            Broadcast.encode(message.Broadcast, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBroadcastResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Broadcast = Broadcast.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBroadcastResponse };
        if (object.Broadcast !== undefined && object.Broadcast !== null) {
            message.Broadcast = Broadcast.fromJSON(object.Broadcast);
        }
        else {
            message.Broadcast = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Broadcast !== undefined && (obj.Broadcast = message.Broadcast ? Broadcast.toJSON(message.Broadcast) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBroadcastResponse };
        if (object.Broadcast !== undefined && object.Broadcast !== null) {
            message.Broadcast = Broadcast.fromPartial(object.Broadcast);
        }
        else {
            message.Broadcast = undefined;
        }
        return message;
    }
};
const baseQueryAllBroadcastRequest = {};
export const QueryAllBroadcastRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBroadcastRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBroadcastRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBroadcastRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBroadcastResponse = {};
export const QueryAllBroadcastResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Broadcast) {
            Broadcast.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBroadcastResponse };
        message.Broadcast = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Broadcast.push(Broadcast.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBroadcastResponse };
        message.Broadcast = [];
        if (object.Broadcast !== undefined && object.Broadcast !== null) {
            for (const e of object.Broadcast) {
                message.Broadcast.push(Broadcast.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Broadcast) {
            obj.Broadcast = message.Broadcast.map((e) => (e ? Broadcast.toJSON(e) : undefined));
        }
        else {
            obj.Broadcast = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBroadcastResponse };
        message.Broadcast = [];
        if (object.Broadcast !== undefined && object.Broadcast !== null) {
            for (const e of object.Broadcast) {
                message.Broadcast.push(Broadcast.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSentAnnouncementRequest = { id: 0 };
export const QueryGetSentAnnouncementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSentAnnouncementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSentAnnouncementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSentAnnouncementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSentAnnouncementResponse = {};
export const QueryGetSentAnnouncementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SentAnnouncement !== undefined) {
            SentAnnouncement.encode(message.SentAnnouncement, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSentAnnouncementResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentAnnouncement = SentAnnouncement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSentAnnouncementResponse };
        if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
            message.SentAnnouncement = SentAnnouncement.fromJSON(object.SentAnnouncement);
        }
        else {
            message.SentAnnouncement = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SentAnnouncement !== undefined && (obj.SentAnnouncement = message.SentAnnouncement ? SentAnnouncement.toJSON(message.SentAnnouncement) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSentAnnouncementResponse };
        if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
            message.SentAnnouncement = SentAnnouncement.fromPartial(object.SentAnnouncement);
        }
        else {
            message.SentAnnouncement = undefined;
        }
        return message;
    }
};
const baseQueryAllSentAnnouncementRequest = {};
export const QueryAllSentAnnouncementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSentAnnouncementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSentAnnouncementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSentAnnouncementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSentAnnouncementResponse = {};
export const QueryAllSentAnnouncementResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SentAnnouncement) {
            SentAnnouncement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSentAnnouncementResponse };
        message.SentAnnouncement = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentAnnouncement.push(SentAnnouncement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSentAnnouncementResponse };
        message.SentAnnouncement = [];
        if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
            for (const e of object.SentAnnouncement) {
                message.SentAnnouncement.push(SentAnnouncement.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SentAnnouncement) {
            obj.SentAnnouncement = message.SentAnnouncement.map((e) => (e ? SentAnnouncement.toJSON(e) : undefined));
        }
        else {
            obj.SentAnnouncement = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSentAnnouncementResponse };
        message.SentAnnouncement = [];
        if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
            for (const e of object.SentAnnouncement) {
                message.SentAnnouncement.push(SentAnnouncement.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetTimeoutAnnouncementRequest = { id: 0 };
export const QueryGetTimeoutAnnouncementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimeoutAnnouncementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimeoutAnnouncementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimeoutAnnouncementRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetTimeoutAnnouncementResponse = {};
export const QueryGetTimeoutAnnouncementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.TimeoutAnnouncement !== undefined) {
            TimeoutAnnouncement.encode(message.TimeoutAnnouncement, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimeoutAnnouncementResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TimeoutAnnouncement = TimeoutAnnouncement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimeoutAnnouncementResponse };
        if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
            message.TimeoutAnnouncement = TimeoutAnnouncement.fromJSON(object.TimeoutAnnouncement);
        }
        else {
            message.TimeoutAnnouncement = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.TimeoutAnnouncement !== undefined &&
            (obj.TimeoutAnnouncement = message.TimeoutAnnouncement ? TimeoutAnnouncement.toJSON(message.TimeoutAnnouncement) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimeoutAnnouncementResponse };
        if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
            message.TimeoutAnnouncement = TimeoutAnnouncement.fromPartial(object.TimeoutAnnouncement);
        }
        else {
            message.TimeoutAnnouncement = undefined;
        }
        return message;
    }
};
const baseQueryAllTimeoutAnnouncementRequest = {};
export const QueryAllTimeoutAnnouncementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimeoutAnnouncementRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimeoutAnnouncementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimeoutAnnouncementRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTimeoutAnnouncementResponse = {};
export const QueryAllTimeoutAnnouncementResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TimeoutAnnouncement) {
            TimeoutAnnouncement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimeoutAnnouncementResponse };
        message.TimeoutAnnouncement = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TimeoutAnnouncement.push(TimeoutAnnouncement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimeoutAnnouncementResponse };
        message.TimeoutAnnouncement = [];
        if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
            for (const e of object.TimeoutAnnouncement) {
                message.TimeoutAnnouncement.push(TimeoutAnnouncement.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.TimeoutAnnouncement) {
            obj.TimeoutAnnouncement = message.TimeoutAnnouncement.map((e) => (e ? TimeoutAnnouncement.toJSON(e) : undefined));
        }
        else {
            obj.TimeoutAnnouncement = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimeoutAnnouncementResponse };
        message.TimeoutAnnouncement = [];
        if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
            for (const e of object.TimeoutAnnouncement) {
                message.TimeoutAnnouncement.push(TimeoutAnnouncement.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPublicationRequest = { id: 0 };
export const QueryGetPublicationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPublicationRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPublicationRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPublicationRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetPublicationResponse = {};
export const QueryGetPublicationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Publication !== undefined) {
            Publication.encode(message.Publication, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPublicationResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Publication = Publication.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPublicationResponse };
        if (object.Publication !== undefined && object.Publication !== null) {
            message.Publication = Publication.fromJSON(object.Publication);
        }
        else {
            message.Publication = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Publication !== undefined && (obj.Publication = message.Publication ? Publication.toJSON(message.Publication) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPublicationResponse };
        if (object.Publication !== undefined && object.Publication !== null) {
            message.Publication = Publication.fromPartial(object.Publication);
        }
        else {
            message.Publication = undefined;
        }
        return message;
    }
};
const baseQueryAllPublicationRequest = {};
export const QueryAllPublicationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPublicationRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPublicationRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPublicationRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPublicationResponse = {};
export const QueryAllPublicationResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Publication) {
            Publication.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPublicationResponse };
        message.Publication = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Publication.push(Publication.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPublicationResponse };
        message.Publication = [];
        if (object.Publication !== undefined && object.Publication !== null) {
            for (const e of object.Publication) {
                message.Publication.push(Publication.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Publication) {
            obj.Publication = message.Publication.map((e) => (e ? Publication.toJSON(e) : undefined));
        }
        else {
            obj.Publication = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPublicationResponse };
        message.Publication = [];
        if (object.Publication !== undefined && object.Publication !== null) {
            for (const e of object.Publication) {
                message.Publication.push(Publication.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Broadcast(request) {
        const data = QueryGetBroadcastRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'Broadcast', data);
        return promise.then((data) => QueryGetBroadcastResponse.decode(new Reader(data)));
    }
    BroadcastAll(request) {
        const data = QueryAllBroadcastRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'BroadcastAll', data);
        return promise.then((data) => QueryAllBroadcastResponse.decode(new Reader(data)));
    }
    SentAnnouncement(request) {
        const data = QueryGetSentAnnouncementRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'SentAnnouncement', data);
        return promise.then((data) => QueryGetSentAnnouncementResponse.decode(new Reader(data)));
    }
    SentAnnouncementAll(request) {
        const data = QueryAllSentAnnouncementRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'SentAnnouncementAll', data);
        return promise.then((data) => QueryAllSentAnnouncementResponse.decode(new Reader(data)));
    }
    TimeoutAnnouncement(request) {
        const data = QueryGetTimeoutAnnouncementRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'TimeoutAnnouncement', data);
        return promise.then((data) => QueryGetTimeoutAnnouncementResponse.decode(new Reader(data)));
    }
    TimeoutAnnouncementAll(request) {
        const data = QueryAllTimeoutAnnouncementRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'TimeoutAnnouncementAll', data);
        return promise.then((data) => QueryAllTimeoutAnnouncementResponse.decode(new Reader(data)));
    }
    Publication(request) {
        const data = QueryGetPublicationRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'Publication', data);
        return promise.then((data) => QueryGetPublicationResponse.decode(new Reader(data)));
    }
    PublicationAll(request) {
        const data = QueryAllPublicationRequest.encode(request).finish();
        const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'PublicationAll', data);
        return promise.then((data) => QueryAllPublicationResponse.decode(new Reader(data)));
    }
}
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
