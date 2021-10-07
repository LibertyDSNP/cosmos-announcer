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

func (k Keeper) SentAnnouncementAll(c context.Context, req *types.QueryAllSentAnnouncementRequest) (*types.QueryAllSentAnnouncementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sentAnnouncements []types.SentAnnouncement
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sentAnnouncementStore := prefix.NewStore(store, types.KeyPrefix(types.SentAnnouncementKey))

	pageRes, err := query.Paginate(sentAnnouncementStore, req.Pagination, func(key []byte, value []byte) error {
		var sentAnnouncement types.SentAnnouncement
		if err := k.cdc.Unmarshal(value, &sentAnnouncement); err != nil {
			return err
		}

		sentAnnouncements = append(sentAnnouncements, sentAnnouncement)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSentAnnouncementResponse{SentAnnouncement: sentAnnouncements, Pagination: pageRes}, nil
}

func (k Keeper) SentAnnouncement(c context.Context, req *types.QueryGetSentAnnouncementRequest) (*types.QueryGetSentAnnouncementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	sentAnnouncement, found := k.GetSentAnnouncement(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetSentAnnouncementResponse{SentAnnouncement: sentAnnouncement}, nil
}
