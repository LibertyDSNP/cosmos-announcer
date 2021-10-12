package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/Liberty30/us-app-chain/testutil/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
)

func TestRelayRegistryQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNRelayRegistry(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetRelayRegistryRequest
		response *types.QueryGetRelayRegistryResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetRelayRegistryRequest{Id: msgs[0].Id},
			response: &types.QueryGetRelayRegistryResponse{RelayRegistry: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetRelayRegistryRequest{Id: msgs[1].Id},
			response: &types.QueryGetRelayRegistryResponse{RelayRegistry: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetRelayRegistryRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.RelayRegistry(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestRelayRegistryQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNRelayRegistry(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllRelayRegistryRequest {
		return &types.QueryAllRelayRegistryRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.RelayRegistryAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.RelayRegistry), step)
			require.Subset(t, msgs, resp.RelayRegistry)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.RelayRegistryAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.RelayRegistry), step)
			require.Subset(t, msgs, resp.RelayRegistry)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.RelayRegistryAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.RelayRegistryAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
