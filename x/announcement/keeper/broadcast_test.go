package keeper_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNBroadcast(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Broadcast {
	items := make([]types.Broadcast, n)
	for i := range items {
		items[i].Id = keeper.AppendBroadcast(ctx, items[i])
	}
	return items
}

func TestBroadcastGet(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNBroadcast(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetBroadcast(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestBroadcastRemove(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNBroadcast(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBroadcast(ctx, item.Id)
		_, found := keeper.GetBroadcast(ctx, item.Id)
		require.False(t, found)
	}
}

func TestBroadcastGetAll(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNBroadcast(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllBroadcast(ctx))
}

func TestBroadcastCount(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNBroadcast(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetBroadcastCount(ctx))
}
