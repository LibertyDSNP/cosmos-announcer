package announcement_test

import (
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		PortId: types.PortID,
		BroadcastList: []types.Broadcast{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		BroadcastCount: 2,
		SentAnnouncementList: []types.SentAnnouncement{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SentAnnouncementCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.AnnouncementKeeper(t)
	announcement.InitGenesis(ctx, *k, genesisState)
	got := announcement.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Equal(t, genesisState.PortId, got.PortId)
	require.Len(t, got.BroadcastList, len(genesisState.BroadcastList))
	require.Subset(t, genesisState.BroadcastList, got.BroadcastList)
	require.Equal(t, genesisState.BroadcastCount, got.BroadcastCount)
	require.Len(t, got.SentAnnouncementList, len(genesisState.SentAnnouncementList))
	require.Subset(t, genesisState.SentAnnouncementList, got.SentAnnouncementList)
	require.Equal(t, genesisState.SentAnnouncementCount, got.SentAnnouncementCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
