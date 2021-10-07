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

func (k Keeper) TimeoutAnnouncementAll(c context.Context, req *types.QueryAllTimeoutAnnouncementRequest) (*types.QueryAllTimeoutAnnouncementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timeoutAnnouncements []types.TimeoutAnnouncement
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timeoutAnnouncementStore := prefix.NewStore(store, types.KeyPrefix(types.TimeoutAnnouncementKey))

	pageRes, err := query.Paginate(timeoutAnnouncementStore, req.Pagination, func(key []byte, value []byte) error {
		var timeoutAnnouncement types.TimeoutAnnouncement
		if err := k.cdc.Unmarshal(value, &timeoutAnnouncement); err != nil {
			return err
		}

		timeoutAnnouncements = append(timeoutAnnouncements, timeoutAnnouncement)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimeoutAnnouncementResponse{TimeoutAnnouncement: timeoutAnnouncements, Pagination: pageRes}, nil
}

func (k Keeper) TimeoutAnnouncement(c context.Context, req *types.QueryGetTimeoutAnnouncementRequest) (*types.QueryGetTimeoutAnnouncementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	timeoutAnnouncement, found := k.GetTimeoutAnnouncement(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTimeoutAnnouncementResponse{TimeoutAnnouncement: timeoutAnnouncement}, nil
}
