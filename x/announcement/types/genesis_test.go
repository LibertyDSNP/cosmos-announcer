package types_test

import (
	"testing"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				TimeoutAnnouncementList: []types.TimeoutAnnouncement{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TimeoutAnnouncementCount: 2,
				PublicationList: []types.Publication{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				PublicationCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated broadcast",
			genState: &types.GenesisState{
				BroadcastList: []types.Broadcast{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid broadcast count",
			genState: &types.GenesisState{
				BroadcastList: []types.Broadcast{
					{
						Id: 1,
					},
				},
				BroadcastCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated sentAnnouncement",
			genState: &types.GenesisState{
				SentAnnouncementList: []types.SentAnnouncement{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid sentAnnouncement count",
			genState: &types.GenesisState{
				SentAnnouncementList: []types.SentAnnouncement{
					{
						Id: 1,
					},
				},
				SentAnnouncementCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated timeoutAnnouncement",
			genState: &types.GenesisState{
				TimeoutAnnouncementList: []types.TimeoutAnnouncement{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid timeoutAnnouncement count",
			genState: &types.GenesisState{
				TimeoutAnnouncementList: []types.TimeoutAnnouncement{
					{
						Id: 1,
					},
				},
				TimeoutAnnouncementCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated publication",
			genState: &types.GenesisState{
				PublicationList: []types.Publication{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid publication count",
			genState: &types.GenesisState{
				PublicationList: []types.Publication{
					{
						Id: 1,
					},
				},
				PublicationCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
