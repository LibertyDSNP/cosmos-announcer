package types

// ValidateBasic is used for validating the packet
func (p IbcBatchPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcBatchPacketData) GetBytes() ([]byte, error) {
	var modulePacket AnnouncementPacketData

	modulePacket.Packet = &AnnouncementPacketData_IbcBatchPacket{&p}

	return modulePacket.Marshal()
}
