package keeper

import (
	"context"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBroadcast(goCtx context.Context, msg *types.MsgCreateBroadcast) (*types.MsgCreateBroadcastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Append the new Broadcast announcement
	k.AppendBroadcast(ctx, types.Broadcast{
		ContentHash: msg.ContentHash,
		FromId:      msg.FromId,
		Url:         msg.Url,
		Signature:   string(msg.GetSignBytes()),
		CreatedAt:   uint64(ctx.BlockTime().UnixMilli()),
	})

	dsnpAnnouncmentUri := "dsnp://" + msg.FromId + "/" + msg.ContentHash

	ctx.Logger().Info("Created Broadcast!", "dsnpAnnouncmentUri", dsnpAnnouncmentUri)

	return &types.MsgCreateBroadcastResponse{
		DsnpAnnouncmentUri: dsnpAnnouncmentUri,
	}, nil
}
