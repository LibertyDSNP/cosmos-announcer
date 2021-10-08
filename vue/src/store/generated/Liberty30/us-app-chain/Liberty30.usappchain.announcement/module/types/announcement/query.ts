/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Broadcast } from '../announcement/broadcast'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { SentAnnouncement } from '../announcement/sent_announcement'
import { TimeoutAnnouncement } from '../announcement/timeout_announcement'
import { Publication } from '../announcement/publication'

export const protobufPackage = 'Liberty30.usappchain.announcement'

export interface QueryGetBroadcastRequest {
  id: number
}

export interface QueryGetBroadcastResponse {
  Broadcast: Broadcast | undefined
}

export interface QueryAllBroadcastRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBroadcastResponse {
  Broadcast: Broadcast[]
  pagination: PageResponse | undefined
}

export interface QueryGetSentAnnouncementRequest {
  id: number
}

export interface QueryGetSentAnnouncementResponse {
  SentAnnouncement: SentAnnouncement | undefined
}

export interface QueryAllSentAnnouncementRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSentAnnouncementResponse {
  SentAnnouncement: SentAnnouncement[]
  pagination: PageResponse | undefined
}

export interface QueryGetTimeoutAnnouncementRequest {
  id: number
}

export interface QueryGetTimeoutAnnouncementResponse {
  TimeoutAnnouncement: TimeoutAnnouncement | undefined
}

export interface QueryAllTimeoutAnnouncementRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTimeoutAnnouncementResponse {
  TimeoutAnnouncement: TimeoutAnnouncement[]
  pagination: PageResponse | undefined
}

export interface QueryGetPublicationRequest {
  id: number
}

export interface QueryGetPublicationResponse {
  Publication: Publication | undefined
}

export interface QueryAllPublicationRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPublicationResponse {
  Publication: Publication[]
  pagination: PageResponse | undefined
}

const baseQueryGetBroadcastRequest: object = { id: 0 }

export const QueryGetBroadcastRequest = {
  encode(message: QueryGetBroadcastRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBroadcastRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBroadcastRequest } as QueryGetBroadcastRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBroadcastRequest {
    const message = { ...baseQueryGetBroadcastRequest } as QueryGetBroadcastRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBroadcastRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBroadcastRequest>): QueryGetBroadcastRequest {
    const message = { ...baseQueryGetBroadcastRequest } as QueryGetBroadcastRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBroadcastResponse: object = {}

export const QueryGetBroadcastResponse = {
  encode(message: QueryGetBroadcastResponse, writer: Writer = Writer.create()): Writer {
    if (message.Broadcast !== undefined) {
      Broadcast.encode(message.Broadcast, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBroadcastResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBroadcastResponse } as QueryGetBroadcastResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Broadcast = Broadcast.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBroadcastResponse {
    const message = { ...baseQueryGetBroadcastResponse } as QueryGetBroadcastResponse
    if (object.Broadcast !== undefined && object.Broadcast !== null) {
      message.Broadcast = Broadcast.fromJSON(object.Broadcast)
    } else {
      message.Broadcast = undefined
    }
    return message
  },

  toJSON(message: QueryGetBroadcastResponse): unknown {
    const obj: any = {}
    message.Broadcast !== undefined && (obj.Broadcast = message.Broadcast ? Broadcast.toJSON(message.Broadcast) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBroadcastResponse>): QueryGetBroadcastResponse {
    const message = { ...baseQueryGetBroadcastResponse } as QueryGetBroadcastResponse
    if (object.Broadcast !== undefined && object.Broadcast !== null) {
      message.Broadcast = Broadcast.fromPartial(object.Broadcast)
    } else {
      message.Broadcast = undefined
    }
    return message
  }
}

const baseQueryAllBroadcastRequest: object = {}

export const QueryAllBroadcastRequest = {
  encode(message: QueryAllBroadcastRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBroadcastRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBroadcastRequest } as QueryAllBroadcastRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBroadcastRequest {
    const message = { ...baseQueryAllBroadcastRequest } as QueryAllBroadcastRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBroadcastRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBroadcastRequest>): QueryAllBroadcastRequest {
    const message = { ...baseQueryAllBroadcastRequest } as QueryAllBroadcastRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBroadcastResponse: object = {}

export const QueryAllBroadcastResponse = {
  encode(message: QueryAllBroadcastResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Broadcast) {
      Broadcast.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBroadcastResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBroadcastResponse } as QueryAllBroadcastResponse
    message.Broadcast = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Broadcast.push(Broadcast.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBroadcastResponse {
    const message = { ...baseQueryAllBroadcastResponse } as QueryAllBroadcastResponse
    message.Broadcast = []
    if (object.Broadcast !== undefined && object.Broadcast !== null) {
      for (const e of object.Broadcast) {
        message.Broadcast.push(Broadcast.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBroadcastResponse): unknown {
    const obj: any = {}
    if (message.Broadcast) {
      obj.Broadcast = message.Broadcast.map((e) => (e ? Broadcast.toJSON(e) : undefined))
    } else {
      obj.Broadcast = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBroadcastResponse>): QueryAllBroadcastResponse {
    const message = { ...baseQueryAllBroadcastResponse } as QueryAllBroadcastResponse
    message.Broadcast = []
    if (object.Broadcast !== undefined && object.Broadcast !== null) {
      for (const e of object.Broadcast) {
        message.Broadcast.push(Broadcast.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSentAnnouncementRequest: object = { id: 0 }

export const QueryGetSentAnnouncementRequest = {
  encode(message: QueryGetSentAnnouncementRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSentAnnouncementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSentAnnouncementRequest } as QueryGetSentAnnouncementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSentAnnouncementRequest {
    const message = { ...baseQueryGetSentAnnouncementRequest } as QueryGetSentAnnouncementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSentAnnouncementRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSentAnnouncementRequest>): QueryGetSentAnnouncementRequest {
    const message = { ...baseQueryGetSentAnnouncementRequest } as QueryGetSentAnnouncementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSentAnnouncementResponse: object = {}

export const QueryGetSentAnnouncementResponse = {
  encode(message: QueryGetSentAnnouncementResponse, writer: Writer = Writer.create()): Writer {
    if (message.SentAnnouncement !== undefined) {
      SentAnnouncement.encode(message.SentAnnouncement, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSentAnnouncementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSentAnnouncementResponse } as QueryGetSentAnnouncementResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SentAnnouncement = SentAnnouncement.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSentAnnouncementResponse {
    const message = { ...baseQueryGetSentAnnouncementResponse } as QueryGetSentAnnouncementResponse
    if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
      message.SentAnnouncement = SentAnnouncement.fromJSON(object.SentAnnouncement)
    } else {
      message.SentAnnouncement = undefined
    }
    return message
  },

  toJSON(message: QueryGetSentAnnouncementResponse): unknown {
    const obj: any = {}
    message.SentAnnouncement !== undefined && (obj.SentAnnouncement = message.SentAnnouncement ? SentAnnouncement.toJSON(message.SentAnnouncement) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSentAnnouncementResponse>): QueryGetSentAnnouncementResponse {
    const message = { ...baseQueryGetSentAnnouncementResponse } as QueryGetSentAnnouncementResponse
    if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
      message.SentAnnouncement = SentAnnouncement.fromPartial(object.SentAnnouncement)
    } else {
      message.SentAnnouncement = undefined
    }
    return message
  }
}

const baseQueryAllSentAnnouncementRequest: object = {}

export const QueryAllSentAnnouncementRequest = {
  encode(message: QueryAllSentAnnouncementRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSentAnnouncementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSentAnnouncementRequest } as QueryAllSentAnnouncementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSentAnnouncementRequest {
    const message = { ...baseQueryAllSentAnnouncementRequest } as QueryAllSentAnnouncementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSentAnnouncementRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSentAnnouncementRequest>): QueryAllSentAnnouncementRequest {
    const message = { ...baseQueryAllSentAnnouncementRequest } as QueryAllSentAnnouncementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSentAnnouncementResponse: object = {}

export const QueryAllSentAnnouncementResponse = {
  encode(message: QueryAllSentAnnouncementResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SentAnnouncement) {
      SentAnnouncement.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSentAnnouncementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSentAnnouncementResponse } as QueryAllSentAnnouncementResponse
    message.SentAnnouncement = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SentAnnouncement.push(SentAnnouncement.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSentAnnouncementResponse {
    const message = { ...baseQueryAllSentAnnouncementResponse } as QueryAllSentAnnouncementResponse
    message.SentAnnouncement = []
    if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
      for (const e of object.SentAnnouncement) {
        message.SentAnnouncement.push(SentAnnouncement.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSentAnnouncementResponse): unknown {
    const obj: any = {}
    if (message.SentAnnouncement) {
      obj.SentAnnouncement = message.SentAnnouncement.map((e) => (e ? SentAnnouncement.toJSON(e) : undefined))
    } else {
      obj.SentAnnouncement = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSentAnnouncementResponse>): QueryAllSentAnnouncementResponse {
    const message = { ...baseQueryAllSentAnnouncementResponse } as QueryAllSentAnnouncementResponse
    message.SentAnnouncement = []
    if (object.SentAnnouncement !== undefined && object.SentAnnouncement !== null) {
      for (const e of object.SentAnnouncement) {
        message.SentAnnouncement.push(SentAnnouncement.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetTimeoutAnnouncementRequest: object = { id: 0 }

export const QueryGetTimeoutAnnouncementRequest = {
  encode(message: QueryGetTimeoutAnnouncementRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutAnnouncementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeoutAnnouncementRequest } as QueryGetTimeoutAnnouncementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTimeoutAnnouncementRequest {
    const message = { ...baseQueryGetTimeoutAnnouncementRequest } as QueryGetTimeoutAnnouncementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetTimeoutAnnouncementRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeoutAnnouncementRequest>): QueryGetTimeoutAnnouncementRequest {
    const message = { ...baseQueryGetTimeoutAnnouncementRequest } as QueryGetTimeoutAnnouncementRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetTimeoutAnnouncementResponse: object = {}

export const QueryGetTimeoutAnnouncementResponse = {
  encode(message: QueryGetTimeoutAnnouncementResponse, writer: Writer = Writer.create()): Writer {
    if (message.TimeoutAnnouncement !== undefined) {
      TimeoutAnnouncement.encode(message.TimeoutAnnouncement, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutAnnouncementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeoutAnnouncementResponse } as QueryGetTimeoutAnnouncementResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TimeoutAnnouncement = TimeoutAnnouncement.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTimeoutAnnouncementResponse {
    const message = { ...baseQueryGetTimeoutAnnouncementResponse } as QueryGetTimeoutAnnouncementResponse
    if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
      message.TimeoutAnnouncement = TimeoutAnnouncement.fromJSON(object.TimeoutAnnouncement)
    } else {
      message.TimeoutAnnouncement = undefined
    }
    return message
  },

  toJSON(message: QueryGetTimeoutAnnouncementResponse): unknown {
    const obj: any = {}
    message.TimeoutAnnouncement !== undefined &&
      (obj.TimeoutAnnouncement = message.TimeoutAnnouncement ? TimeoutAnnouncement.toJSON(message.TimeoutAnnouncement) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeoutAnnouncementResponse>): QueryGetTimeoutAnnouncementResponse {
    const message = { ...baseQueryGetTimeoutAnnouncementResponse } as QueryGetTimeoutAnnouncementResponse
    if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
      message.TimeoutAnnouncement = TimeoutAnnouncement.fromPartial(object.TimeoutAnnouncement)
    } else {
      message.TimeoutAnnouncement = undefined
    }
    return message
  }
}

const baseQueryAllTimeoutAnnouncementRequest: object = {}

export const QueryAllTimeoutAnnouncementRequest = {
  encode(message: QueryAllTimeoutAnnouncementRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutAnnouncementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeoutAnnouncementRequest } as QueryAllTimeoutAnnouncementRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTimeoutAnnouncementRequest {
    const message = { ...baseQueryAllTimeoutAnnouncementRequest } as QueryAllTimeoutAnnouncementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeoutAnnouncementRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeoutAnnouncementRequest>): QueryAllTimeoutAnnouncementRequest {
    const message = { ...baseQueryAllTimeoutAnnouncementRequest } as QueryAllTimeoutAnnouncementRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTimeoutAnnouncementResponse: object = {}

export const QueryAllTimeoutAnnouncementResponse = {
  encode(message: QueryAllTimeoutAnnouncementResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.TimeoutAnnouncement) {
      TimeoutAnnouncement.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutAnnouncementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeoutAnnouncementResponse } as QueryAllTimeoutAnnouncementResponse
    message.TimeoutAnnouncement = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TimeoutAnnouncement.push(TimeoutAnnouncement.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTimeoutAnnouncementResponse {
    const message = { ...baseQueryAllTimeoutAnnouncementResponse } as QueryAllTimeoutAnnouncementResponse
    message.TimeoutAnnouncement = []
    if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
      for (const e of object.TimeoutAnnouncement) {
        message.TimeoutAnnouncement.push(TimeoutAnnouncement.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeoutAnnouncementResponse): unknown {
    const obj: any = {}
    if (message.TimeoutAnnouncement) {
      obj.TimeoutAnnouncement = message.TimeoutAnnouncement.map((e) => (e ? TimeoutAnnouncement.toJSON(e) : undefined))
    } else {
      obj.TimeoutAnnouncement = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeoutAnnouncementResponse>): QueryAllTimeoutAnnouncementResponse {
    const message = { ...baseQueryAllTimeoutAnnouncementResponse } as QueryAllTimeoutAnnouncementResponse
    message.TimeoutAnnouncement = []
    if (object.TimeoutAnnouncement !== undefined && object.TimeoutAnnouncement !== null) {
      for (const e of object.TimeoutAnnouncement) {
        message.TimeoutAnnouncement.push(TimeoutAnnouncement.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPublicationRequest: object = { id: 0 }

export const QueryGetPublicationRequest = {
  encode(message: QueryGetPublicationRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPublicationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPublicationRequest } as QueryGetPublicationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPublicationRequest {
    const message = { ...baseQueryGetPublicationRequest } as QueryGetPublicationRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetPublicationRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPublicationRequest>): QueryGetPublicationRequest {
    const message = { ...baseQueryGetPublicationRequest } as QueryGetPublicationRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetPublicationResponse: object = {}

export const QueryGetPublicationResponse = {
  encode(message: QueryGetPublicationResponse, writer: Writer = Writer.create()): Writer {
    if (message.Publication !== undefined) {
      Publication.encode(message.Publication, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPublicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPublicationResponse } as QueryGetPublicationResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Publication = Publication.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPublicationResponse {
    const message = { ...baseQueryGetPublicationResponse } as QueryGetPublicationResponse
    if (object.Publication !== undefined && object.Publication !== null) {
      message.Publication = Publication.fromJSON(object.Publication)
    } else {
      message.Publication = undefined
    }
    return message
  },

  toJSON(message: QueryGetPublicationResponse): unknown {
    const obj: any = {}
    message.Publication !== undefined && (obj.Publication = message.Publication ? Publication.toJSON(message.Publication) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPublicationResponse>): QueryGetPublicationResponse {
    const message = { ...baseQueryGetPublicationResponse } as QueryGetPublicationResponse
    if (object.Publication !== undefined && object.Publication !== null) {
      message.Publication = Publication.fromPartial(object.Publication)
    } else {
      message.Publication = undefined
    }
    return message
  }
}

const baseQueryAllPublicationRequest: object = {}

export const QueryAllPublicationRequest = {
  encode(message: QueryAllPublicationRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPublicationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPublicationRequest } as QueryAllPublicationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPublicationRequest {
    const message = { ...baseQueryAllPublicationRequest } as QueryAllPublicationRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPublicationRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPublicationRequest>): QueryAllPublicationRequest {
    const message = { ...baseQueryAllPublicationRequest } as QueryAllPublicationRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPublicationResponse: object = {}

export const QueryAllPublicationResponse = {
  encode(message: QueryAllPublicationResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Publication) {
      Publication.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPublicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPublicationResponse } as QueryAllPublicationResponse
    message.Publication = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Publication.push(Publication.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPublicationResponse {
    const message = { ...baseQueryAllPublicationResponse } as QueryAllPublicationResponse
    message.Publication = []
    if (object.Publication !== undefined && object.Publication !== null) {
      for (const e of object.Publication) {
        message.Publication.push(Publication.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPublicationResponse): unknown {
    const obj: any = {}
    if (message.Publication) {
      obj.Publication = message.Publication.map((e) => (e ? Publication.toJSON(e) : undefined))
    } else {
      obj.Publication = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPublicationResponse>): QueryAllPublicationResponse {
    const message = { ...baseQueryAllPublicationResponse } as QueryAllPublicationResponse
    message.Publication = []
    if (object.Publication !== undefined && object.Publication !== null) {
      for (const e of object.Publication) {
        message.Publication.push(Publication.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a broadcast by id. */
  Broadcast(request: QueryGetBroadcastRequest): Promise<QueryGetBroadcastResponse>
  /** Queries a list of broadcast items. */
  BroadcastAll(request: QueryAllBroadcastRequest): Promise<QueryAllBroadcastResponse>
  /** Queries a sentAnnouncement by id. */
  SentAnnouncement(request: QueryGetSentAnnouncementRequest): Promise<QueryGetSentAnnouncementResponse>
  /** Queries a list of sentAnnouncement items. */
  SentAnnouncementAll(request: QueryAllSentAnnouncementRequest): Promise<QueryAllSentAnnouncementResponse>
  /** Queries a timeoutAnnouncement by id. */
  TimeoutAnnouncement(request: QueryGetTimeoutAnnouncementRequest): Promise<QueryGetTimeoutAnnouncementResponse>
  /** Queries a list of timeoutAnnouncement items. */
  TimeoutAnnouncementAll(request: QueryAllTimeoutAnnouncementRequest): Promise<QueryAllTimeoutAnnouncementResponse>
  /** Queries a publication by id. */
  Publication(request: QueryGetPublicationRequest): Promise<QueryGetPublicationResponse>
  /** Queries a list of publication items. */
  PublicationAll(request: QueryAllPublicationRequest): Promise<QueryAllPublicationResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Broadcast(request: QueryGetBroadcastRequest): Promise<QueryGetBroadcastResponse> {
    const data = QueryGetBroadcastRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'Broadcast', data)
    return promise.then((data) => QueryGetBroadcastResponse.decode(new Reader(data)))
  }

  BroadcastAll(request: QueryAllBroadcastRequest): Promise<QueryAllBroadcastResponse> {
    const data = QueryAllBroadcastRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'BroadcastAll', data)
    return promise.then((data) => QueryAllBroadcastResponse.decode(new Reader(data)))
  }

  SentAnnouncement(request: QueryGetSentAnnouncementRequest): Promise<QueryGetSentAnnouncementResponse> {
    const data = QueryGetSentAnnouncementRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'SentAnnouncement', data)
    return promise.then((data) => QueryGetSentAnnouncementResponse.decode(new Reader(data)))
  }

  SentAnnouncementAll(request: QueryAllSentAnnouncementRequest): Promise<QueryAllSentAnnouncementResponse> {
    const data = QueryAllSentAnnouncementRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'SentAnnouncementAll', data)
    return promise.then((data) => QueryAllSentAnnouncementResponse.decode(new Reader(data)))
  }

  TimeoutAnnouncement(request: QueryGetTimeoutAnnouncementRequest): Promise<QueryGetTimeoutAnnouncementResponse> {
    const data = QueryGetTimeoutAnnouncementRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'TimeoutAnnouncement', data)
    return promise.then((data) => QueryGetTimeoutAnnouncementResponse.decode(new Reader(data)))
  }

  TimeoutAnnouncementAll(request: QueryAllTimeoutAnnouncementRequest): Promise<QueryAllTimeoutAnnouncementResponse> {
    const data = QueryAllTimeoutAnnouncementRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'TimeoutAnnouncementAll', data)
    return promise.then((data) => QueryAllTimeoutAnnouncementResponse.decode(new Reader(data)))
  }

  Publication(request: QueryGetPublicationRequest): Promise<QueryGetPublicationResponse> {
    const data = QueryGetPublicationRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'Publication', data)
    return promise.then((data) => QueryGetPublicationResponse.decode(new Reader(data)))
  }

  PublicationAll(request: QueryAllPublicationRequest): Promise<QueryAllPublicationResponse> {
    const data = QueryAllPublicationRequest.encode(request).finish()
    const promise = this.rpc.request('Liberty30.usappchain.announcement.Query', 'PublicationAll', data)
    return promise.then((data) => QueryAllPublicationResponse.decode(new Reader(data)))
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
