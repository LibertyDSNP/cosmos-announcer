package keeper

import (
	"encoding/binary"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetSentAnnouncementCount get the total number of sentAnnouncement
func (k Keeper) GetSentAnnouncementCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SentAnnouncementCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetSentAnnouncementCount set the total number of sentAnnouncement
func (k Keeper) SetSentAnnouncementCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SentAnnouncementCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendSentAnnouncement appends a sentAnnouncement in the store with a new id and update the count
func (k Keeper) AppendSentAnnouncement(
	ctx sdk.Context,
	sentAnnouncement types.SentAnnouncement,
) uint64 {
	// Create the sentAnnouncement
	count := k.GetSentAnnouncementCount(ctx)

	// Set the ID of the appended value
	sentAnnouncement.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAnnouncementKey))
	appendedValue := k.cdc.MustMarshal(&sentAnnouncement)
	store.Set(GetSentAnnouncementIDBytes(sentAnnouncement.Id), appendedValue)

	// Update sentAnnouncement count
	k.SetSentAnnouncementCount(ctx, count+1)

	return count
}

// SetSentAnnouncement set a specific sentAnnouncement in the store
func (k Keeper) SetSentAnnouncement(ctx sdk.Context, sentAnnouncement types.SentAnnouncement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAnnouncementKey))
	b := k.cdc.MustMarshal(&sentAnnouncement)
	store.Set(GetSentAnnouncementIDBytes(sentAnnouncement.Id), b)
}

// GetSentAnnouncement returns a sentAnnouncement from its id
func (k Keeper) GetSentAnnouncement(ctx sdk.Context, id uint64) (val types.SentAnnouncement, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAnnouncementKey))
	b := store.Get(GetSentAnnouncementIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSentAnnouncement removes a sentAnnouncement from the store
func (k Keeper) RemoveSentAnnouncement(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAnnouncementKey))
	store.Delete(GetSentAnnouncementIDBytes(id))
}

// GetAllSentAnnouncement returns all sentAnnouncement
func (k Keeper) GetAllSentAnnouncement(ctx sdk.Context) (list []types.SentAnnouncement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAnnouncementKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SentAnnouncement
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSentAnnouncementIDBytes returns the byte representation of the ID
func GetSentAnnouncementIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSentAnnouncementIDFromBytes returns ID in uint64 format from a byte array
func GetSentAnnouncementIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
