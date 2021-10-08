/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface Publication {
  id: number
  batchId: string
  announcementType: string
  fileHash: string
  fileUrl: string
}

const basePublication: object = { id: 0, batchId: '', announcementType: '', fileHash: '', fileUrl: '' }

export const Publication = {
  encode(message: Publication, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.batchId !== '') {
      writer.uint32(18).string(message.batchId)
    }
    if (message.announcementType !== '') {
      writer.uint32(26).string(message.announcementType)
    }
    if (message.fileHash !== '') {
      writer.uint32(34).string(message.fileHash)
    }
    if (message.fileUrl !== '') {
      writer.uint32(42).string(message.fileUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Publication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePublication } as Publication
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.batchId = reader.string()
          break
        case 3:
          message.announcementType = reader.string()
          break
        case 4:
          message.fileHash = reader.string()
          break
        case 5:
          message.fileUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Publication {
    const message = { ...basePublication } as Publication
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = String(object.batchId)
    } else {
      message.batchId = ''
    }
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
    return message
  },

  toJSON(message: Publication): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.batchId !== undefined && (obj.batchId = message.batchId)
    message.announcementType !== undefined && (obj.announcementType = message.announcementType)
    message.fileHash !== undefined && (obj.fileHash = message.fileHash)
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl)
    return obj
  },

  fromPartial(object: DeepPartial<Publication>): Publication {
    const message = { ...basePublication } as Publication
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = object.batchId
    } else {
      message.batchId = ''
    }
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
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
