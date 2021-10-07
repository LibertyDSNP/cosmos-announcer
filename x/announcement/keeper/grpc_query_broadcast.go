package keeper

import (
	"context"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastAll(c context.Context, req *types.QueryAllBroadcastRequest) (*types.QueryAllBroadcastResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var broadcasts []types.Broadcast
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	broadcastStore := prefix.NewStore(store, types.KeyPrefix(types.BroadcastKey))

	pageRes, err := query.Paginate(broadcastStore, req.Pagination, func(key []byte, value []byte) error {
		var broadcast types.Broadcast
		if err := k.cdc.Unmarshal(value, &broadcast); err != nil {
			return err
		}

		broadcasts = append(broadcasts, broadcast)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBroadcastResponse{Broadcast: broadcasts, Pagination: pageRes}, nil
}

func (k Keeper) Broadcast(c context.Context, req *types.QueryGetBroadcastRequest) (*types.QueryGetBroadcastResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	broadcast, found := k.GetBroadcast(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetBroadcastResponse{Broadcast: broadcast}, nil
}
