package keeper

import (
	"encoding/binary"

	"github.com/Liberty30/us-app-chain/x/announcement/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetRelayRegistryCount get the total number of relayRegistry
func (k Keeper) GetRelayRegistryCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RelayRegistryCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetRelayRegistryCount set the total number of relayRegistry
func (k Keeper) SetRelayRegistryCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RelayRegistryCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendRelayRegistry appends a relayRegistry in the store with a new id and update the count
func (k Keeper) AppendRelayRegistry(
	ctx sdk.Context,
	relayRegistry types.RelayRegistry,
) uint64 {
	// Create the relayRegistry
	count := k.GetRelayRegistryCount(ctx)

	// Set the ID of the appended value
	relayRegistry.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RelayRegistryKey))
	appendedValue := k.cdc.MustMarshal(&relayRegistry)
	store.Set(GetRelayRegistryIDBytes(relayRegistry.Id), appendedValue)

	// Update relayRegistry count
	k.SetRelayRegistryCount(ctx, count+1)

	return count
}

// SetRelayRegistry set a specific relayRegistry in the store
func (k Keeper) SetRelayRegistry(ctx sdk.Context, relayRegistry types.RelayRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RelayRegistryKey))
	b := k.cdc.MustMarshal(&relayRegistry)
	store.Set(GetRelayRegistryIDBytes(relayRegistry.Id), b)
}

// GetRelayRegistry returns a relayRegistry from its id
func (k Keeper) GetRelayRegistry(ctx sdk.Context, id uint64) (val types.RelayRegistry, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RelayRegistryKey))
	b := store.Get(GetRelayRegistryIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRelayRegistry removes a relayRegistry from the store
func (k Keeper) RemoveRelayRegistry(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RelayRegistryKey))
	store.Delete(GetRelayRegistryIDBytes(id))
}

// GetAllRelayRegistry returns all relayRegistry
func (k Keeper) GetAllRelayRegistry(ctx sdk.Context) (list []types.RelayRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RelayRegistryKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RelayRegistry
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRelayRegistryIDBytes returns the byte representation of the ID
func GetRelayRegistryIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRelayRegistryIDFromBytes returns ID in uint64 format from a byte array
func GetRelayRegistryIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
