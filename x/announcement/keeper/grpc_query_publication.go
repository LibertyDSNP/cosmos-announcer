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

func (k Keeper) PublicationAll(c context.Context, req *types.QueryAllPublicationRequest) (*types.QueryAllPublicationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var publications []types.Publication
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	publicationStore := prefix.NewStore(store, types.KeyPrefix(types.PublicationKey))

	pageRes, err := query.Paginate(publicationStore, req.Pagination, func(key []byte, value []byte) error {
		var publication types.Publication
		if err := k.cdc.Unmarshal(value, &publication); err != nil {
			return err
		}

		publications = append(publications, publication)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPublicationResponse{Publication: publications, Pagination: pageRes}, nil
}

func (k Keeper) Publication(c context.Context, req *types.QueryGetPublicationRequest) (*types.QueryGetPublicationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	publication, found := k.GetPublication(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPublicationResponse{Publication: publication}, nil
}
