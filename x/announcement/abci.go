package announcement

import (
	"github.com/Liberty30/us-app-chain/x/announcement/keeper"
	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/modules/core/02-client/types"
	"time"
)

func sendAnnouncements(ctx sdk.Context, k keeper.Keeper, channels []string) {
	broadcastAnnouncements := k.GetAllBroadcast(ctx)
	numberOfBroadcasts := len(broadcastAnnouncements)
	ctx.Logger().Info("EndBlock time!!!", "count of pending broadcasts", numberOfBroadcasts)
	if len(channels) > 0 && numberOfBroadcasts > 0 {
		// Build a new publication.
		// Save? somewhere a parquet file. TODO.
		publication := types.Publication{
			AnnouncementType: "1",
			FileHash:         "tbd",
			FileUrl:          "tbd",
		}
		publicationId := k.AppendPublication(ctx, publication)

		packet := types.IbcBatchPacketData{
			AnnouncementType: publication.AnnouncementType,
			FileHash:         publication.FileHash,
			FileUrl:          publication.FileUrl,
			Creator:          "",
			RefId:            publicationId,
		}

		expireInTwoMinues := uint64(time.Now().Add(2 * time.Minute).UnixMilli())
		var errs []error
		for _, channelId := range channels {
			err := k.TransmitIbcBatchPacket(ctx, packet, types.PortID, channelId, clienttypes.ZeroHeight(), expireInTwoMinues)
			if err != nil {
				errs = append(errs, err)
			}
		}

		if len(errs) == len(channels) {
			ctx.Logger().Error("Failed to transmit IBC batch packet to anyone!", "error message", errs[0].Error())
			// Likely handle the issue of if the data is good or not
			// Instead of removing, tag for next setup
			k.RemovePublication(ctx, publicationId)
		} else {
			// Remove this once we switch to the Transient Store
			// Cleanup the now batched broadcast announcements
			for _, ba := range broadcastAnnouncements {
				k.RemoveBroadcast(ctx, ba.Id)
			}
		}
	}
}

func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	// Here we are at the end of the block
	// How can I get the stuff included in the block?
	// Or should I rely on state?

	// Get channels
	relayChannels := ["channel-0"]

	if len(relayChannels) == 0 {
		return
	}

	broadcastAnnouncements := k.GetAllBroadcast(ctx)
	numberOfBroadcasts := len(broadcastAnnouncements)
	ctx.Logger().Info("EndBlock time!!!", "count of pending broadcasts", numberOfBroadcasts)
	if numberOfBroadcasts > 0 {
		// Build a new publication.
		// Save? somewhere a parquet file. TODO.
		publication := types.Publication{
			AnnouncementType: "1",
			FileHash:         "tbd",
			FileUrl:          "tbd",
		}
		publicationId := k.AppendPublication(ctx, publication)

		packet := types.IbcBatchPacketData{
			AnnouncementType: publication.AnnouncementType,
			FileHash:         publication.FileHash,
			FileUrl:          publication.FileUrl,
			Creator:          "",
			RefId:            publicationId,
		}

		expireInTwoMinues := 2 * time.Minute
		err := k.TransmitIbcBatchPacket(ctx, packet, types.PortID, channelId, clienttypes.ZeroHeight(), uint64(time.Now().Add(expireInTwoMinues).UnixMilli()))
		if err != nil {
			ctx.Logger().Error("Failed to transmit IBC batch packet", "error message", err.Error())
			// Likely handle the issue of if the data is good or not
			k.RemovePublication(ctx, publicationId)
		} else {
			// Cleanup the now batched broadcast announcements
			for _, ba := range broadcastAnnouncements {
				k.RemoveBroadcast(ctx, ba.Id)
			}
		}
	}

}
