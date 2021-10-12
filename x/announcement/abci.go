package announcement

import (
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	// Here we are at the end of the block
	// How can I get the stuff included in the block?
	// Or should I rely on state?
}
