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

func (k Keeper) RelayRegistryAll(c context.Context, req *types.QueryAllRelayRegistryRequest) (*types.QueryAllRelayRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var relayRegistrys []types.RelayRegistry
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	relayRegistryStore := prefix.NewStore(store, types.KeyPrefix(types.RelayRegistryKey))

	pageRes, err := query.Paginate(relayRegistryStore, req.Pagination, func(key []byte, value []byte) error {
		var relayRegistry types.RelayRegistry
		if err := k.cdc.Unmarshal(value, &relayRegistry); err != nil {
			return err
		}

		relayRegistrys = append(relayRegistrys, relayRegistry)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRelayRegistryResponse{RelayRegistry: relayRegistrys, Pagination: pageRes}, nil
}

func (k Keeper) RelayRegistry(c context.Context, req *types.QueryGetRelayRegistryRequest) (*types.QueryGetRelayRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	relayRegistry, found := k.GetRelayRegistry(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetRelayRegistryResponse{RelayRegistry: relayRegistry}, nil
}
