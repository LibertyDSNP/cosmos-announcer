package keeper

import (
	"encoding/binary"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetBroadcastCount get the total number of broadcast
func (k Keeper) GetBroadcastCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BroadcastCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetBroadcastCount set the total number of broadcast
func (k Keeper) SetBroadcastCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BroadcastCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendBroadcast appends a broadcast in the store with a new id and update the count
func (k Keeper) AppendBroadcast(
	ctx sdk.Context,
	broadcast types.Broadcast,
) uint64 {
	// Create the broadcast
	count := k.GetBroadcastCount(ctx)

	// Set the ID of the appended value
	broadcast.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BroadcastKey))
	appendedValue := k.cdc.MustMarshal(&broadcast)
	store.Set(GetBroadcastIDBytes(broadcast.Id), appendedValue)

	// Update broadcast count
	k.SetBroadcastCount(ctx, count+1)

	return count
}

// SetBroadcast set a specific broadcast in the store
func (k Keeper) SetBroadcast(ctx sdk.Context, broadcast types.Broadcast) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BroadcastKey))
	b := k.cdc.MustMarshal(&broadcast)
	store.Set(GetBroadcastIDBytes(broadcast.Id), b)
}

// GetBroadcast returns a broadcast from its id
func (k Keeper) GetBroadcast(ctx sdk.Context, id uint64) (val types.Broadcast, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BroadcastKey))
	b := store.Get(GetBroadcastIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBroadcast removes a broadcast from the store
func (k Keeper) RemoveBroadcast(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BroadcastKey))
	store.Delete(GetBroadcastIDBytes(id))
}

// GetAllBroadcast returns all broadcast
func (k Keeper) GetAllBroadcast(ctx sdk.Context) (list []types.Broadcast) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BroadcastKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Broadcast
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBroadcastIDBytes returns the byte representation of the ID
func GetBroadcastIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBroadcastIDFromBytes returns ID in uint64 format from a byte array
func GetBroadcastIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
