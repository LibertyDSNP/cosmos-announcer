package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRelayRegistry{}

func NewMsgCreateRelayRegistry(creator string, owner string, destChannel string) *MsgCreateRelayRegistry {
	return &MsgCreateRelayRegistry{
		Creator:     creator,
		Owner:       owner,
		DestChannel: destChannel,
	}
}

func (msg *MsgCreateRelayRegistry) Route() string {
	return RouterKey
}

func (msg *MsgCreateRelayRegistry) Type() string {
	return "CreateRelayRegistry"
}

func (msg *MsgCreateRelayRegistry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRelayRegistry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRelayRegistry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRelayRegistry{}

func NewMsgUpdateRelayRegistry(creator string, id uint64, owner string, destChannel string) *MsgUpdateRelayRegistry {
	return &MsgUpdateRelayRegistry{
		Id:          id,
		Creator:     creator,
		Owner:       owner,
		DestChannel: destChannel,
	}
}

func (msg *MsgUpdateRelayRegistry) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRelayRegistry) Type() string {
	return "UpdateRelayRegistry"
}

func (msg *MsgUpdateRelayRegistry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRelayRegistry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRelayRegistry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRelayRegistry{}

func NewMsgDeleteRelayRegistry(creator string, id uint64) *MsgDeleteRelayRegistry {
	return &MsgDeleteRelayRegistry{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRelayRegistry) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRelayRegistry) Type() string {
	return "DeleteRelayRegistry"
}

func (msg *MsgDeleteRelayRegistry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRelayRegistry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRelayRegistry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
