package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.AnnouncementKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
