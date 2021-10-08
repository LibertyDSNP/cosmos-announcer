/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'Liberty30.usappchain.announcement';
const baseAnnouncementPacketData = {};
export const AnnouncementPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.ibcBatchPacket !== undefined) {
            IbcBatchPacketData.encode(message.ibcBatchPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnnouncementPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ibcBatchPacket = IbcBatchPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAnnouncementPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcBatchPacket !== undefined && object.ibcBatchPacket !== null) {
            message.ibcBatchPacket = IbcBatchPacketData.fromJSON(object.ibcBatchPacket);
        }
        else {
            message.ibcBatchPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.ibcBatchPacket !== undefined && (obj.ibcBatchPacket = message.ibcBatchPacket ? IbcBatchPacketData.toJSON(message.ibcBatchPacket) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAnnouncementPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcBatchPacket !== undefined && object.ibcBatchPacket !== null) {
            message.ibcBatchPacket = IbcBatchPacketData.fromPartial(object.ibcBatchPacket);
        }
        else {
            message.ibcBatchPacket = undefined;
        }
        return message;
    }
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    }
};
const baseIbcBatchPacketData = { announcementType: '', fileHash: '', fileUrl: '', creator: '', refId: '' };
export const IbcBatchPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.announcementType !== '') {
            writer.uint32(10).string(message.announcementType);
        }
        if (message.fileHash !== '') {
            writer.uint32(18).string(message.fileHash);
        }
        if (message.fileUrl !== '') {
            writer.uint32(26).string(message.fileUrl);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        if (message.refId !== '') {
            writer.uint32(42).string(message.refId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcBatchPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.announcementType = reader.string();
                    break;
                case 2:
                    message.fileHash = reader.string();
                    break;
                case 3:
                    message.fileUrl = reader.string();
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.refId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcBatchPacketData };
        if (object.announcementType !== undefined && object.announcementType !== null) {
            message.announcementType = String(object.announcementType);
        }
        else {
            message.announcementType = '';
        }
        if (object.fileHash !== undefined && object.fileHash !== null) {
            message.fileHash = String(object.fileHash);
        }
        else {
            message.fileHash = '';
        }
        if (object.fileUrl !== undefined && object.fileUrl !== null) {
            message.fileUrl = String(object.fileUrl);
        }
        else {
            message.fileUrl = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.refId !== undefined && object.refId !== null) {
            message.refId = String(object.refId);
        }
        else {
            message.refId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.announcementType !== undefined && (obj.announcementType = message.announcementType);
        message.fileHash !== undefined && (obj.fileHash = message.fileHash);
        message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl);
        message.creator !== undefined && (obj.creator = message.creator);
        message.refId !== undefined && (obj.refId = message.refId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcBatchPacketData };
        if (object.announcementType !== undefined && object.announcementType !== null) {
            message.announcementType = object.announcementType;
        }
        else {
            message.announcementType = '';
        }
        if (object.fileHash !== undefined && object.fileHash !== null) {
            message.fileHash = object.fileHash;
        }
        else {
            message.fileHash = '';
        }
        if (object.fileUrl !== undefined && object.fileUrl !== null) {
            message.fileUrl = object.fileUrl;
        }
        else {
            message.fileUrl = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.refId !== undefined && object.refId !== null) {
            message.refId = object.refId;
        }
        else {
            message.refId = '';
        }
        return message;
    }
};
const baseIbcBatchPacketAck = { batchId: '', refId: '' };
export const IbcBatchPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.batchId !== '') {
            writer.uint32(10).string(message.batchId);
        }
        if (message.refId !== '') {
            writer.uint32(18).string(message.refId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcBatchPacketAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchId = reader.string();
                    break;
                case 2:
                    message.refId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcBatchPacketAck };
        if (object.batchId !== undefined && object.batchId !== null) {
            message.batchId = String(object.batchId);
        }
        else {
            message.batchId = '';
        }
        if (object.refId !== undefined && object.refId !== null) {
            message.refId = String(object.refId);
        }
        else {
            message.refId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.refId !== undefined && (obj.refId = message.refId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcBatchPacketAck };
        if (object.batchId !== undefined && object.batchId !== null) {
            message.batchId = object.batchId;
        }
        else {
            message.batchId = '';
        }
        if (object.refId !== undefined && object.refId !== null) {
            message.refId = object.refId;
        }
        else {
            message.refId = '';
        }
        return message;
    }
};
