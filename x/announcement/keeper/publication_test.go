package keeper_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPublication(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Publication {
	items := make([]types.Publication, n)
	for i := range items {
		items[i].Id = keeper.AppendPublication(ctx, items[i])
	}
	return items
}

func TestPublicationGet(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNPublication(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPublication(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestPublicationRemove(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNPublication(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePublication(ctx, item.Id)
		_, found := keeper.GetPublication(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPublicationGetAll(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNPublication(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllPublication(ctx))
}

func TestPublicationCount(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNPublication(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPublicationCount(ctx))
}
