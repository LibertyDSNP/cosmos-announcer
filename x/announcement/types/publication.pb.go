// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: announcement/publication.proto

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

type Publication struct {
	Id               uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BatchId          string `protobuf:"bytes,2,opt,name=batchId,proto3" json:"batchId,omitempty"`
	AnnouncementType string `protobuf:"bytes,3,opt,name=announcementType,proto3" json:"announcementType,omitempty"`
	FileHash         string `protobuf:"bytes,4,opt,name=fileHash,proto3" json:"fileHash,omitempty"`
	FileUrl          string `protobuf:"bytes,5,opt,name=fileUrl,proto3" json:"fileUrl,omitempty"`
}

func (m *Publication) Reset()         { *m = Publication{} }
func (m *Publication) String() string { return proto.CompactTextString(m) }
func (*Publication) ProtoMessage()    {}
func (*Publication) Descriptor() ([]byte, []int) {
	return fileDescriptor_5fb858f20bad1c52, []int{0}
}
func (m *Publication) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Publication) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Publication.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Publication) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Publication.Merge(m, src)
}
func (m *Publication) XXX_Size() int {
	return m.Size()
}
func (m *Publication) XXX_DiscardUnknown() {
	xxx_messageInfo_Publication.DiscardUnknown(m)
}

var xxx_messageInfo_Publication proto.InternalMessageInfo

func (m *Publication) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Publication) GetBatchId() string {
	if m != nil {
		return m.BatchId
	}
	return ""
}

func (m *Publication) GetAnnouncementType() string {
	if m != nil {
		return m.AnnouncementType
	}
	return ""
}

func (m *Publication) GetFileHash() string {
	if m != nil {
		return m.FileHash
	}
	return ""
}

func (m *Publication) GetFileUrl() string {
	if m != nil {
		return m.FileUrl
	}
	return ""
}

func init() {
	proto.RegisterType((*Publication)(nil), "Liberty30.usappchain.announcement.Publication")
}

func init() { proto.RegisterFile("announcement/publication.proto", fileDescriptor_5fb858f20bad1c52) }

var fileDescriptor_5fb858f20bad1c52 = []byte{
	// 253 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4b, 0xcc, 0xcb, 0xcb,
	0x2f, 0xcd, 0x4b, 0x4e, 0xcd, 0x4d, 0xcd, 0x2b, 0xd1, 0x2f, 0x28, 0x4d, 0xca, 0xc9, 0x4c, 0x4e,
	0x2c, 0xc9, 0xcc, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0xf4, 0xc9, 0x4c, 0x4a,
	0x2d, 0x2a, 0xa9, 0x34, 0x36, 0xd0, 0x2b, 0x2d, 0x4e, 0x2c, 0x28, 0x48, 0xce, 0x48, 0xcc, 0xcc,
	0xd3, 0x43, 0xd6, 0x24, 0x25, 0x92, 0x9e, 0x9f, 0x9e, 0x0f, 0x56, 0xad, 0x0f, 0x62, 0x41, 0x34,
	0x2a, 0xcd, 0x64, 0xe4, 0xe2, 0x0e, 0x40, 0x18, 0x27, 0xc4, 0xc7, 0xc5, 0x94, 0x99, 0x22, 0xc1,
	0xa8, 0xc0, 0xa8, 0xc1, 0x12, 0xc4, 0x94, 0x99, 0x22, 0x24, 0xc1, 0xc5, 0x9e, 0x94, 0x58, 0x92,
	0x9c, 0xe1, 0x99, 0x22, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x19, 0x04, 0xe3, 0x0a, 0x69, 0x71, 0x09,
	0x20, 0x9b, 0x1f, 0x52, 0x59, 0x90, 0x2a, 0xc1, 0x0c, 0x56, 0x82, 0x21, 0x2e, 0x24, 0xc5, 0xc5,
	0x91, 0x96, 0x99, 0x93, 0xea, 0x91, 0x58, 0x9c, 0x21, 0xc1, 0x02, 0x56, 0x03, 0xe7, 0x83, 0x6c,
	0x00, 0xb1, 0x43, 0x8b, 0x72, 0x24, 0x58, 0x21, 0x36, 0x40, 0xb9, 0x4e, 0x01, 0x27, 0x1e, 0xc9,
	0x31, 0x5e, 0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7, 0x72, 0x0c, 0x17, 0x1e,
	0xcb, 0x31, 0xdc, 0x78, 0x2c, 0xc7, 0x10, 0x65, 0x96, 0x9e, 0x59, 0x92, 0x51, 0x9a, 0xa4, 0x97,
	0x9c, 0x9f, 0xab, 0x0f, 0xf7, 0xb9, 0x7e, 0x69, 0xb1, 0x6e, 0x62, 0x41, 0x81, 0x2e, 0xd8, 0xef,
	0xfa, 0x15, 0xfa, 0x28, 0x41, 0x56, 0x52, 0x59, 0x90, 0x5a, 0x9c, 0xc4, 0x06, 0xf6, 0xb4, 0x31,
	0x20, 0x00, 0x00, 0xff, 0xff, 0x23, 0x2f, 0x79, 0x02, 0x4f, 0x01, 0x00, 0x00,
}

func (m *Publication) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Publication) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Publication) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.FileUrl) > 0 {
		i -= len(m.FileUrl)
		copy(dAtA[i:], m.FileUrl)
		i = encodeVarintPublication(dAtA, i, uint64(len(m.FileUrl)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.FileHash) > 0 {
		i -= len(m.FileHash)
		copy(dAtA[i:], m.FileHash)
		i = encodeVarintPublication(dAtA, i, uint64(len(m.FileHash)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AnnouncementType) > 0 {
		i -= len(m.AnnouncementType)
		copy(dAtA[i:], m.AnnouncementType)
		i = encodeVarintPublication(dAtA, i, uint64(len(m.AnnouncementType)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.BatchId) > 0 {
		i -= len(m.BatchId)
		copy(dAtA[i:], m.BatchId)
		i = encodeVarintPublication(dAtA, i, uint64(len(m.BatchId)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintPublication(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintPublication(dAtA []byte, offset int, v uint64) int {
	offset -= sovPublication(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Publication) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovPublication(uint64(m.Id))
	}
	l = len(m.BatchId)
	if l > 0 {
		n += 1 + l + sovPublication(uint64(l))
	}
	l = len(m.AnnouncementType)
	if l > 0 {
		n += 1 + l + sovPublication(uint64(l))
	}
	l = len(m.FileHash)
	if l > 0 {
		n += 1 + l + sovPublication(uint64(l))
	}
	l = len(m.FileUrl)
	if l > 0 {
		n += 1 + l + sovPublication(uint64(l))
	}
	return n
}

func sovPublication(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPublication(x uint64) (n int) {
	return sovPublication(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Publication) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPublication
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
			return fmt.Errorf("proto: Publication: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Publication: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPublication
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
				return fmt.Errorf("proto: wrong wireType = %d for field BatchId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPublication
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
				return ErrInvalidLengthPublication
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPublication
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BatchId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AnnouncementType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPublication
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
				return ErrInvalidLengthPublication
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPublication
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AnnouncementType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FileHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPublication
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
				return ErrInvalidLengthPublication
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPublication
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FileHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FileUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPublication
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
				return ErrInvalidLengthPublication
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPublication
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FileUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPublication(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPublication
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
func skipPublication(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPublication
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
					return 0, ErrIntOverflowPublication
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
					return 0, ErrIntOverflowPublication
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
				return 0, ErrInvalidLengthPublication
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPublication
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPublication
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPublication        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPublication          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPublication = fmt.Errorf("proto: unexpected end of group")
)
