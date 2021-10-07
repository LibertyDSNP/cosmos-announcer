/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface Broadcast {
  id: number
  contentHash: string
  fromId: string
  url: string
  signature: string
}

const baseBroadcast: object = { id: 0, contentHash: '', fromId: '', url: '', signature: '' }

export const Broadcast = {
  encode(message: Broadcast, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.contentHash !== '') {
      writer.uint32(18).string(message.contentHash)
    }
    if (message.fromId !== '') {
      writer.uint32(26).string(message.fromId)
    }
    if (message.url !== '') {
      writer.uint32(34).string(message.url)
    }
    if (message.signature !== '') {
      writer.uint32(42).string(message.signature)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Broadcast {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBroadcast } as Broadcast
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.contentHash = reader.string()
          break
        case 3:
          message.fromId = reader.string()
          break
        case 4:
          message.url = reader.string()
          break
        case 5:
          message.signature = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Broadcast {
    const message = { ...baseBroadcast } as Broadcast
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.contentHash !== undefined && object.contentHash !== null) {
      message.contentHash = String(object.contentHash)
    } else {
      message.contentHash = ''
    }
    if (object.fromId !== undefined && object.fromId !== null) {
      message.fromId = String(object.fromId)
    } else {
      message.fromId = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature)
    } else {
      message.signature = ''
    }
    return message
  },

  toJSON(message: Broadcast): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.contentHash !== undefined && (obj.contentHash = message.contentHash)
    message.fromId !== undefined && (obj.fromId = message.fromId)
    message.url !== undefined && (obj.url = message.url)
    message.signature !== undefined && (obj.signature = message.signature)
    return obj
  },

  fromPartial(object: DeepPartial<Broadcast>): Broadcast {
    const message = { ...baseBroadcast } as Broadcast
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.contentHash !== undefined && object.contentHash !== null) {
      message.contentHash = object.contentHash
    } else {
      message.contentHash = ''
    }
    if (object.fromId !== undefined && object.fromId !== null) {
      message.fromId = object.fromId
    } else {
      message.fromId = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature
    } else {
      message.signature = ''
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
