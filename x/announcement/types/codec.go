package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgSendIbcBatch{}, "announcement/SendIbcBatch", nil)
	cdc.RegisterConcrete(&MsgCreateBroadcast{}, "announcement/CreateBroadcast", nil)
	cdc.RegisterConcrete(&MsgCreateRelayRegistry{}, "announcement/CreateRelayRegistry", nil)
	cdc.RegisterConcrete(&MsgUpdateRelayRegistry{}, "announcement/UpdateRelayRegistry", nil)
	cdc.RegisterConcrete(&MsgDeleteRelayRegistry{}, "announcement/DeleteRelayRegistry", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcBatch{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBroadcast{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRelayRegistry{},
		&MsgUpdateRelayRegistry{},
		&MsgDeleteRelayRegistry{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
