// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: announcement/timeout_announcement.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type TimeoutAnnouncement struct {
	Id        uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Signature string `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"`
}

func (m *TimeoutAnnouncement) Reset()         { *m = TimeoutAnnouncement{} }
func (m *TimeoutAnnouncement) String() string { return proto.CompactTextString(m) }
func (*TimeoutAnnouncement) ProtoMessage()    {}
func (*TimeoutAnnouncement) Descriptor() ([]byte, []int) {
	return fileDescriptor_1ba55093f1e02108, []int{0}
}
func (m *TimeoutAnnouncement) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TimeoutAnnouncement) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TimeoutAnnouncement.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TimeoutAnnouncement) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TimeoutAnnouncement.Merge(m, src)
}
func (m *TimeoutAnnouncement) XXX_Size() int {
	return m.Size()
}
func (m *TimeoutAnnouncement) XXX_DiscardUnknown() {
	xxx_messageInfo_TimeoutAnnouncement.DiscardUnknown(m)
}

var xxx_messageInfo_TimeoutAnnouncement proto.InternalMessageInfo

func (m *TimeoutAnnouncement) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TimeoutAnnouncement) GetSignature() string {
	if m != nil {
		return m.Signature
	}
	return ""
}

func init() {
	proto.RegisterType((*TimeoutAnnouncement)(nil), "Liberty30.usappchain.announcement.TimeoutAnnouncement")
}

func init() {
	proto.RegisterFile("announcement/timeout_announcement.proto", fileDescriptor_1ba55093f1e02108)
}

var fileDescriptor_1ba55093f1e02108 = []byte{
	// 209 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4f, 0xcc, 0xcb, 0xcb,
	0x2f, 0xcd, 0x4b, 0x4e, 0xcd, 0x4d, 0xcd, 0x2b, 0xd1, 0x2f, 0xc9, 0xcc, 0x4d, 0xcd, 0x2f, 0x2d,
	0x89, 0x47, 0x16, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0xf4, 0xc9, 0x4c, 0x4a, 0x2d,
	0x2a, 0xa9, 0x34, 0x36, 0xd0, 0x2b, 0x2d, 0x4e, 0x2c, 0x28, 0x48, 0xce, 0x48, 0xcc, 0xcc, 0xd3,
	0x43, 0x56, 0x28, 0x25, 0x92, 0x9e, 0x9f, 0x9e, 0x0f, 0x56, 0xad, 0x0f, 0x62, 0x41, 0x34, 0x2a,
	0x39, 0x73, 0x09, 0x87, 0x40, 0x8c, 0x75, 0x44, 0x52, 0x2c, 0xc4, 0xc7, 0xc5, 0x94, 0x99, 0x22,
	0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x12, 0xc4, 0x94, 0x99, 0x22, 0x24, 0xc3, 0xc5, 0x59, 0x9c, 0x99,
	0x9e, 0x97, 0x58, 0x52, 0x5a, 0x94, 0x2a, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x19, 0x84, 0x10, 0x70,
	0x0a, 0x38, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c,
	0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xb3, 0xf4, 0xcc, 0x92,
	0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0x7d, 0xb8, 0x13, 0xf5, 0x4b, 0x8b, 0x75, 0x13, 0x0b,
	0x0a, 0x74, 0xc1, 0x8e, 0xd4, 0xaf, 0xd0, 0x47, 0xf5, 0x64, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b,
	0xd8, 0x75, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x4a, 0x70, 0x6d, 0xd6, 0x01, 0x01, 0x00,
	0x00,
}

func (m *TimeoutAnnouncement) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TimeoutAnnouncement) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TimeoutAnnouncement) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Signature) > 0 {
		i -= len(m.Signature)
		copy(dAtA[i:], m.Signature)
		i = encodeVarintTimeoutAnnouncement(dAtA, i, uint64(len(m.Signature)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintTimeoutAnnouncement(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTimeoutAnnouncement(dAtA []byte, offset int, v uint64) int {
	offset -= sovTimeoutAnnouncement(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TimeoutAnnouncement) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTimeoutAnnouncement(uint64(m.Id))
	}
	l = len(m.Signature)
	if l > 0 {
		n += 1 + l + sovTimeoutAnnouncement(uint64(l))
	}
	return n
}

func sovTimeoutAnnouncement(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTimeoutAnnouncement(x uint64) (n int) {
	return sovTimeoutAnnouncement(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *TimeoutAnnouncement) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTimeoutAnnouncement
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TimeoutAnnouncement: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TimeoutAnnouncement: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimeoutAnnouncement
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Signature", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimeoutAnnouncement
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTimeoutAnnouncement
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimeoutAnnouncement
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Signature = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTimeoutAnnouncement(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTimeoutAnnouncement
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTimeoutAnnouncement(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTimeoutAnnouncement
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTimeoutAnnouncement
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTimeoutAnnouncement
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTimeoutAnnouncement
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTimeoutAnnouncement
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTimeoutAnnouncement
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTimeoutAnnouncement        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTimeoutAnnouncement          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTimeoutAnnouncement = fmt.Errorf("proto: unexpected end of group")
)
