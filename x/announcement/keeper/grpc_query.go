package keeper

import (
	"github.com/Liberty30/us-app-chain/x/announcement/types"
)

var _ types.QueryServer = Keeper{}
