package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group announcement queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListBroadcast())
	cmd.AddCommand(CmdShowBroadcast())
	cmd.AddCommand(CmdListSentAnnouncement())
	cmd.AddCommand(CmdShowSentAnnouncement())
	cmd.AddCommand(CmdListTimeoutAnnouncement())
	cmd.AddCommand(CmdShowTimeoutAnnouncement())
	cmd.AddCommand(CmdListPublication())
	cmd.AddCommand(CmdShowPublication())
	cmd.AddCommand(CmdListRelayRegistry())
	cmd.AddCommand(CmdShowRelayRegistry())
	// this line is used by starport scaffolding # 1

	return cmd
}
