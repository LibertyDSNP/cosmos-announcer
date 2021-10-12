package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBroadcast{}

func NewMsgCreateBroadcast(creator string, fromId string, url string, contentHash string) *MsgCreateBroadcast {
	return &MsgCreateBroadcast{
		Creator:     creator,
		FromId:      fromId,
		Url:         url,
		ContentHash: contentHash,
	}
}

func (msg *MsgCreateBroadcast) Route() string {
	return RouterKey
}

func (msg *MsgCreateBroadcast) Type() string {
	return "CreateBroadcast"
}

func (msg *MsgCreateBroadcast) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBroadcast) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBroadcast) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
