package keeper_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNTimeoutAnnouncement(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.TimeoutAnnouncement {
	items := make([]types.TimeoutAnnouncement, n)
	for i := range items {
		items[i].Id = keeper.AppendTimeoutAnnouncement(ctx, items[i])
	}
	return items
}

func TestTimeoutAnnouncementGet(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNTimeoutAnnouncement(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTimeoutAnnouncement(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestTimeoutAnnouncementRemove(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNTimeoutAnnouncement(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimeoutAnnouncement(ctx, item.Id)
		_, found := keeper.GetTimeoutAnnouncement(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTimeoutAnnouncementGetAll(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNTimeoutAnnouncement(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllTimeoutAnnouncement(ctx))
}

func TestTimeoutAnnouncementCount(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	items := createNTimeoutAnnouncement(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTimeoutAnnouncementCount(ctx))
}
