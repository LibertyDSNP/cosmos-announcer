package keeper_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNSentAnnouncement(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SentAnnouncement {
	items := make([]types.SentAnnouncement, n)
	for i := range items {
		items[i].Id = keeper.AppendSentAnnouncement(ctx, items[i])
	}
	return items
}

func TestSentAnnouncementGet(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNSentAnnouncement(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSentAnnouncement(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestSentAnnouncementRemove(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNSentAnnouncement(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSentAnnouncement(ctx, item.Id)
		_, found := keeper.GetSentAnnouncement(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSentAnnouncementGetAll(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNSentAnnouncement(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSentAnnouncement(ctx))
}

func TestSentAnnouncementCount(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNSentAnnouncement(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSentAnnouncementCount(ctx))
}
