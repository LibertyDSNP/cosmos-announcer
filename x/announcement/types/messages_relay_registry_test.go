package types

import (
	"testing"

	"github.com/Liberty30/us-app-chain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateRelayRegistry_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateRelayRegistry
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateRelayRegistry{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateRelayRegistry{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateRelayRegistry_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateRelayRegistry
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateRelayRegistry{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateRelayRegistry{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteRelayRegistry_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteRelayRegistry
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteRelayRegistry{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteRelayRegistry{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
