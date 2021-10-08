package announcement

import (
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the broadcast
	for _, elem := range genState.BroadcastList {
		k.SetBroadcast(ctx, elem)
	}

	// Set broadcast count
	k.SetBroadcastCount(ctx, genState.BroadcastCount)
	// Set all the sentAnnouncement
	for _, elem := range genState.SentAnnouncementList {
		k.SetSentAnnouncement(ctx, elem)
	}

	// Set sentAnnouncement count
	k.SetSentAnnouncementCount(ctx, genState.SentAnnouncementCount)
	// Set all the timeoutAnnouncement
	for _, elem := range genState.TimeoutAnnouncementList {
		k.SetTimeoutAnnouncement(ctx, elem)
	}

	// Set timeoutAnnouncement count
	k.SetTimeoutAnnouncementCount(ctx, genState.TimeoutAnnouncementCount)
	// Set all the publication
	for _, elem := range genState.PublicationList {
		k.SetPublication(ctx, elem)
	}

	// Set publication count
	k.SetPublicationCount(ctx, genState.PublicationCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.PortId = k.GetPort(ctx)
	genesis.BroadcastList = k.GetAllBroadcast(ctx)
	genesis.BroadcastCount = k.GetBroadcastCount(ctx)
	genesis.SentAnnouncementList = k.GetAllSentAnnouncement(ctx)
	genesis.SentAnnouncementCount = k.GetSentAnnouncementCount(ctx)
	genesis.TimeoutAnnouncementList = k.GetAllTimeoutAnnouncement(ctx)
	genesis.TimeoutAnnouncementCount = k.GetTimeoutAnnouncementCount(ctx)
	genesis.PublicationList = k.GetAllPublication(ctx)
	genesis.PublicationCount = k.GetPublicationCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
