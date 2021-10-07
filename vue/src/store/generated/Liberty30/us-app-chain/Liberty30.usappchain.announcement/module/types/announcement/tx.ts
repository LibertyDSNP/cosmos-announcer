/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface MsgSendIbcBatch {
  creator: string
  port: string
  channelID: string
  timeoutTimestamp: number
  announcementType: string
  fileHash: string
  fileUrl: string
}

export interface MsgSendIbcBatchResponse {}

const baseMsgSendIbcBatch: object = { creator: '', port: '', channelID: '', timeoutTimestamp: 0, announcementType: '', fileHash: '', fileUrl: '' }

export const MsgSendIbcBatch = {
  encode(message: MsgSendIbcBatch, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.port !== '') {
      writer.uint32(18).string(message.port)
    }
    if (message.channelID !== '') {
      writer.uint32(26).string(message.channelID)
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp)
    }
    if (message.announcementType !== '') {
      writer.uint32(42).string(message.announcementType)
    }
    if (message.fileHash !== '') {
      writer.uint32(50).string(message.fileHash)
    }
    if (message.fileUrl !== '') {
      writer.uint32(58).string(message.fileUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendIbcBatch } as MsgSendIbcBatch
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.port = reader.string()
          break
        case 3:
          message.channelID = reader.string()
          break
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.announcementType = reader.string()
          break
        case 6:
          message.fileHash = reader.string()
          break
        case 7:
          message.fileUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendIbcBatch {
    const message = { ...baseMsgSendIbcBatch } as MsgSendIbcBatch
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port)
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp)
    } else {
      message.timeoutTimestamp = 0
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

  toJSON(message: MsgSendIbcBatch): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.port !== undefined && (obj.port = message.port)
    message.channelID !== undefined && (obj.channelID = message.channelID)
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp)
    message.announcementType !== undefined && (obj.announcementType = message.announcementType)
    message.fileHash !== undefined && (obj.fileHash = message.fileHash)
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendIbcBatch>): MsgSendIbcBatch {
    const message = { ...baseMsgSendIbcBatch } as MsgSendIbcBatch
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = object.timeoutTimestamp
    } else {
      message.timeoutTimestamp = 0
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

const baseMsgSendIbcBatchResponse: object = {}

export const MsgSendIbcBatchResponse = {
  encode(_: MsgSendIbcBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendIbcBatchResponse } as MsgSendIbcBatchResponse
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

  fromJSON(_: any): MsgSendIbcBatchResponse {
    const message = { ...baseMsgSendIbcBatchResponse } as MsgSendIbcBatchResponse
    return message
  },

  toJSON(_: MsgSendIbcBatchResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendIbcBatchResponse>): MsgSendIbcBatchResponse {
    const message = { ...baseMsgSendIbcBatchResponse } as MsgSendIbcBatchResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcBatch(request: MsgSendIbcBatch): Promise<MsgSendIbcBatchResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SendIbcBatch(request: MsgSendIbcBatch): Promise<MsgSendIbcBatchResponse> {
    const data = MsgSendIbcBatch.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Msg', 'SendIbcBatch', data)
    return promise.then((data) => MsgSendIbcBatchResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
