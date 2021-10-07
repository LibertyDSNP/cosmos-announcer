package cli

import (
	"context"
	"strconv"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListTimeoutAnnouncement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-timeout-announcement",
		Short: "list all timeoutAnnouncement",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTimeoutAnnouncementRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TimeoutAnnouncementAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowTimeoutAnnouncement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-timeout-announcement [id]",
		Short: "shows a timeoutAnnouncement",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetTimeoutAnnouncementRequest{
				Id: id,
			}

			res, err := queryClient.TimeoutAnnouncement(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
