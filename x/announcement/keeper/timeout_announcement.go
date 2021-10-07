package keeper

import (
	"encoding/binary"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetTimeoutAnnouncementCount get the total number of timeoutAnnouncement
func (k Keeper) GetTimeoutAnnouncementCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimeoutAnnouncementCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTimeoutAnnouncementCount set the total number of timeoutAnnouncement
func (k Keeper) SetTimeoutAnnouncementCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimeoutAnnouncementCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTimeoutAnnouncement appends a timeoutAnnouncement in the store with a new id and update the count
func (k Keeper) AppendTimeoutAnnouncement(
	ctx sdk.Context,
	timeoutAnnouncement types.TimeoutAnnouncement,
) uint64 {
	// Create the timeoutAnnouncement
	count := k.GetTimeoutAnnouncementCount(ctx)

	// Set the ID of the appended value
	timeoutAnnouncement.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutAnnouncementKey))
	appendedValue := k.cdc.MustMarshal(&timeoutAnnouncement)
	store.Set(GetTimeoutAnnouncementIDBytes(timeoutAnnouncement.Id), appendedValue)

	// Update timeoutAnnouncement count
	k.SetTimeoutAnnouncementCount(ctx, count+1)

	return count
}

// SetTimeoutAnnouncement set a specific timeoutAnnouncement in the store
func (k Keeper) SetTimeoutAnnouncement(ctx sdk.Context, timeoutAnnouncement types.TimeoutAnnouncement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutAnnouncementKey))
	b := k.cdc.MustMarshal(&timeoutAnnouncement)
	store.Set(GetTimeoutAnnouncementIDBytes(timeoutAnnouncement.Id), b)
}

// GetTimeoutAnnouncement returns a timeoutAnnouncement from its id
func (k Keeper) GetTimeoutAnnouncement(ctx sdk.Context, id uint64) (val types.TimeoutAnnouncement, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutAnnouncementKey))
	b := store.Get(GetTimeoutAnnouncementIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTimeoutAnnouncement removes a timeoutAnnouncement from the store
func (k Keeper) RemoveTimeoutAnnouncement(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutAnnouncementKey))
	store.Delete(GetTimeoutAnnouncementIDBytes(id))
}

// GetAllTimeoutAnnouncement returns all timeoutAnnouncement
func (k Keeper) GetAllTimeoutAnnouncement(ctx sdk.Context) (list []types.TimeoutAnnouncement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutAnnouncementKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TimeoutAnnouncement
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimeoutAnnouncementIDBytes returns the byte representation of the ID
func GetTimeoutAnnouncementIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimeoutAnnouncementIDFromBytes returns ID in uint64 format from a byte array
func GetTimeoutAnnouncementIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
