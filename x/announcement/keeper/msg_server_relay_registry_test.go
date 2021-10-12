package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
)

func TestRelayRegistryMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateRelayRegistry(ctx, &types.MsgCreateRelayRegistry{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestRelayRegistryMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateRelayRegistry
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateRelayRegistry{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRelayRegistry{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRelayRegistry{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateRelayRegistry(ctx, &types.MsgCreateRelayRegistry{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateRelayRegistry(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestRelayRegistryMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteRelayRegistry
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteRelayRegistry{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteRelayRegistry{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteRelayRegistry{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateRelayRegistry(ctx, &types.MsgCreateRelayRegistry{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteRelayRegistry(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
