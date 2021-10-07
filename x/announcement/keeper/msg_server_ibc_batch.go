package keeper

import (
	"context"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/modules/core/02-client/types"
)

func (k msgServer) SendIbcBatch(goCtx context.Context, msg *types.MsgSendIbcBatch) (*types.MsgSendIbcBatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcBatchPacketData

	packet.AnnouncementType = msg.AnnouncementType
	packet.FileHash = msg.FileHash
	packet.FileUrl = msg.FileUrl

	// Transmit the packet
	err := k.TransmitIbcBatchPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcBatchResponse{}, nil
}
