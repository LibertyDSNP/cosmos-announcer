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

func TestSentAnnouncementQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNSentAnnouncement(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetSentAnnouncementRequest
		response *types.QueryGetSentAnnouncementResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetSentAnnouncementRequest{Id: msgs[0].Id},
			response: &types.QueryGetSentAnnouncementResponse{SentAnnouncement: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetSentAnnouncementRequest{Id: msgs[1].Id},
			response: &types.QueryGetSentAnnouncementResponse{SentAnnouncement: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetSentAnnouncementRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.SentAnnouncement(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestSentAnnouncementQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.AnnouncementKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNSentAnnouncement(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllSentAnnouncementRequest {
		return &types.QueryAllSentAnnouncementRequest{
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
			resp, err := keeper.SentAnnouncementAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.SentAnnouncement), step)
			require.Subset(t, msgs, resp.SentAnnouncement)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.SentAnnouncementAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.SentAnnouncement), step)
			require.Subset(t, msgs, resp.SentAnnouncement)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.SentAnnouncementAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.SentAnnouncementAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
