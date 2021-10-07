/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface AnnouncementPacketData {
  noData: NoData | undefined
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcBatchPacket: IbcBatchPacketData | undefined
}

export interface NoData {}

/** IbcBatchPacketData defines a struct for the packet payload */
export interface IbcBatchPacketData {
  announcementType: string
  fileHash: string
  fileUrl: string
  creator: string
}

/** IbcBatchPacketAck defines a struct for the packet acknowledgment */
export interface IbcBatchPacketAck {
  batchId: string
}

const baseAnnouncementPacketData: object = {}

export const AnnouncementPacketData = {
  encode(message: AnnouncementPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim()
    }
    if (message.ibcBatchPacket !== undefined) {
      IbcBatchPacketData.encode(message.ibcBatchPacket, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AnnouncementPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAnnouncementPacketData } as AnnouncementPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32())
          break
        case 2:
          message.ibcBatchPacket = IbcBatchPacketData.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AnnouncementPacketData {
    const message = { ...baseAnnouncementPacketData } as AnnouncementPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcBatchPacket !== undefined && object.ibcBatchPacket !== null) {
      message.ibcBatchPacket = IbcBatchPacketData.fromJSON(object.ibcBatchPacket)
    } else {
      message.ibcBatchPacket = undefined
    }
    return message
  },

  toJSON(message: AnnouncementPacketData): unknown {
    const obj: any = {}
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined)
    message.ibcBatchPacket !== undefined && (obj.ibcBatchPacket = message.ibcBatchPacket ? IbcBatchPacketData.toJSON(message.ibcBatchPacket) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<AnnouncementPacketData>): AnnouncementPacketData {
    const message = { ...baseAnnouncementPacketData } as AnnouncementPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcBatchPacket !== undefined && object.ibcBatchPacket !== null) {
      message.ibcBatchPacket = IbcBatchPacketData.fromPartial(object.ibcBatchPacket)
    } else {
      message.ibcBatchPacket = undefined
    }
    return message
  }
}

const baseNoData: object = {}

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNoData } as NoData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData
    return message
  },

  toJSON(_: NoData): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData
    return message
  }
}

const baseIbcBatchPacketData: object = { announcementType: '', fileHash: '', fileUrl: '', creator: '' }

export const IbcBatchPacketData = {
  encode(message: IbcBatchPacketData, writer: Writer = Writer.create()): Writer {
    if (message.announcementType !== '') {
      writer.uint32(10).string(message.announcementType)
    }
    if (message.fileHash !== '') {
      writer.uint32(18).string(message.fileHash)
    }
    if (message.fileUrl !== '') {
      writer.uint32(26).string(message.fileUrl)
    }
    if (message.creator !== '') {
      writer.uint32(34).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcBatchPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcBatchPacketData } as IbcBatchPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.announcementType = reader.string()
          break
        case 2:
          message.fileHash = reader.string()
          break
        case 3:
          message.fileUrl = reader.string()
          break
        case 4:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcBatchPacketData {
    const message = { ...baseIbcBatchPacketData } as IbcBatchPacketData
    if (object.announcementType !== undefined && object.announcementType !== null) {
      message.announcementType = String(object.announcementType)
    } else {
      message.announcementType = ''
    }
    if (object.fileHash !== undefined && object.fileHash !== null) {
      message.fileHash = String(object.fileHash)
    } else {
      message.fileHash = ''
    }
    if (object.fileUrl !== undefined && object.fileUrl !== null) {
      message.fileUrl = String(object.fileUrl)
    } else {
      message.fileUrl = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: IbcBatchPacketData): unknown {
    const obj: any = {}
    message.announcementType !== undefined && (obj.announcementType = message.announcementType)
    message.fileHash !== undefined && (obj.fileHash = message.fileHash)
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<IbcBatchPacketData>): IbcBatchPacketData {
    const message = { ...baseIbcBatchPacketData } as IbcBatchPacketData
    if (object.announcementType !== undefined && object.announcementType !== null) {
      message.announcementType = object.announcementType
    } else {
      message.announcementType = ''
    }
    if (object.fileHash !== undefined && object.fileHash !== null) {
      message.fileHash = object.fileHash
    } else {
      message.fileHash = ''
    }
    if (object.fileUrl !== undefined && object.fileUrl !== null) {
      message.fileUrl = object.fileUrl
    } else {
      message.fileUrl = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseIbcBatchPacketAck: object = { batchId: '' }

export const IbcBatchPacketAck = {
  encode(message: IbcBatchPacketAck, writer: Writer = Writer.create()): Writer {
    if (message.batchId !== '') {
      writer.uint32(10).string(message.batchId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcBatchPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcBatchPacketAck } as IbcBatchPacketAck
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.batchId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcBatchPacketAck {
    const message = { ...baseIbcBatchPacketAck } as IbcBatchPacketAck
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = String(object.batchId)
    } else {
      message.batchId = ''
    }
    return message
  },

  toJSON(message: IbcBatchPacketAck): unknown {
    const obj: any = {}
    message.batchId !== undefined && (obj.batchId = message.batchId)
    return obj
  },

  fromPartial(object: DeepPartial<IbcBatchPacketAck>): IbcBatchPacketAck {
    const message = { ...baseIbcBatchPacketAck } as IbcBatchPacketAck
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = object.batchId
    } else {
      message.batchId = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
