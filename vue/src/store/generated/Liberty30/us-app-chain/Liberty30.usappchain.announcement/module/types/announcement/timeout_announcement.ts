/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface TimeoutAnnouncement {
  id: number
  signature: string
}

const baseTimeoutAnnouncement: object = { id: 0, signature: '' }

export const TimeoutAnnouncement = {
  encode(message: TimeoutAnnouncement, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.signature !== '') {
      writer.uint32(18).string(message.signature)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): TimeoutAnnouncement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTimeoutAnnouncement } as TimeoutAnnouncement
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.signature = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): TimeoutAnnouncement {
    const message = { ...baseTimeoutAnnouncement } as TimeoutAnnouncement
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature)
    } else {
      message.signature = ''
    }
    return message
  },

  toJSON(message: TimeoutAnnouncement): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.signature !== undefined && (obj.signature = message.signature)
    return obj
  },

  fromPartial(object: DeepPartial<TimeoutAnnouncement>): TimeoutAnnouncement {
    const message = { ...baseTimeoutAnnouncement } as TimeoutAnnouncement
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
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
