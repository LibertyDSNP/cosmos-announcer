package keeper_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNRelayRegistry(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.RelayRegistry {
	items := make([]types.RelayRegistry, n)
	for i := range items {
		items[i].Id = keeper.AppendRelayRegistry(ctx, items[i])
	}
	return items
}

func TestRelayRegistryGet(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNRelayRegistry(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetRelayRegistry(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestRelayRegistryRemove(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNRelayRegistry(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRelayRegistry(ctx, item.Id)
		_, found := keeper.GetRelayRegistry(ctx, item.Id)
		require.False(t, found)
	}
}

func TestRelayRegistryGetAll(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNRelayRegistry(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllRelayRegistry(ctx))
}

func TestRelayRegistryCount(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNRelayRegistry(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetRelayRegistryCount(ctx))
}
