package keeper

import (
	"context"
	"fmt"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRelayRegistry(goCtx context.Context, msg *types.MsgCreateRelayRegistry) (*types.MsgCreateRelayRegistryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var relayRegistry = types.RelayRegistry{
		Creator:     msg.Creator,
		Owner:       msg.Owner,
		DestChannel: msg.DestChannel,
	}

	id := k.AppendRelayRegistry(
		ctx,
		relayRegistry,
	)

	return &types.MsgCreateRelayRegistryResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRelayRegistry(goCtx context.Context, msg *types.MsgUpdateRelayRegistry) (*types.MsgUpdateRelayRegistryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var relayRegistry = types.RelayRegistry{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Owner:       msg.Owner,
		DestChannel: msg.DestChannel,
	}

	// Checks that the element exists
	val, found := k.GetRelayRegistry(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRelayRegistry(ctx, relayRegistry)

	return &types.MsgUpdateRelayRegistryResponse{}, nil
}

func (k msgServer) DeleteRelayRegistry(goCtx context.Context, msg *types.MsgDeleteRelayRegistry) (*types.MsgDeleteRelayRegistryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetRelayRegistry(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRelayRegistry(ctx, msg.Id)

	return &types.MsgDeleteRelayRegistryResponse{}, nil
}
