package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdCreateBroadcast() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-broadcast [from-id] [url] [content-hash]",
		Short: "Broadcast message createBroadcast",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFromId := args[0]
			argUrl := args[1]
			argContentHash := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBroadcast(
				clientCtx.GetFromAddress().String(),
				argFromId,
				argUrl,
				argContentHash,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
