package keeper

import (
	"encoding/binary"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPublicationCount get the total number of publication
func (k Keeper) GetPublicationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PublicationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPublicationCount set the total number of publication
func (k Keeper) SetPublicationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PublicationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPublication appends a publication in the store with a new id and update the count
func (k Keeper) AppendPublication(
	ctx sdk.Context,
	publication types.Publication,
) uint64 {
	// Create the publication
	count := k.GetPublicationCount(ctx)

	// Set the ID of the appended value
	publication.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicationKey))
	appendedValue := k.cdc.MustMarshal(&publication)
	store.Set(GetPublicationIDBytes(publication.Id), appendedValue)

	// Update publication count
	k.SetPublicationCount(ctx, count+1)

	return count
}

// SetPublication set a specific publication in the store
func (k Keeper) SetPublication(ctx sdk.Context, publication types.Publication) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicationKey))
	b := k.cdc.MustMarshal(&publication)
	store.Set(GetPublicationIDBytes(publication.Id), b)
}

// GetPublication returns a publication from its id
func (k Keeper) GetPublication(ctx sdk.Context, id uint64) (val types.Publication, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicationKey))
	b := store.Get(GetPublicationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePublication removes a publication from the store
func (k Keeper) RemovePublication(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicationKey))
	store.Delete(GetPublicationIDBytes(id))
}

// GetAllPublication returns all publication
func (k Keeper) GetAllPublication(ctx sdk.Context) (list []types.Publication) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Publication
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPublicationIDBytes returns the byte representation of the ID
func GetPublicationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPublicationIDFromBytes returns ID in uint64 format from a byte array
func GetPublicationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
