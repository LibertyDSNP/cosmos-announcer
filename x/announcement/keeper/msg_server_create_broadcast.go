package keeper

import (
	"context"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBroadcast(goCtx context.Context, msg *types.MsgCreateBroadcast) (*types.MsgCreateBroadcastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateBroadcastResponse{}, nil
}
