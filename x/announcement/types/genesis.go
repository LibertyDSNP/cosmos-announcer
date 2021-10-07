package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:               PortID,
		BroadcastList:        []Broadcast{},
		SentAnnouncementList: []SentAnnouncement{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in broadcast
	broadcastIdMap := make(map[uint64]bool)
	broadcastCount := gs.GetBroadcastCount()
	for _, elem := range gs.BroadcastList {
		if _, ok := broadcastIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for broadcast")
		}
		if elem.Id >= broadcastCount {
			return fmt.Errorf("broadcast id should be lower or equal than the last id")
		}
		broadcastIdMap[elem.Id] = true
	}
	// Check for duplicated ID in sentAnnouncement
	sentAnnouncementIdMap := make(map[uint64]bool)
	sentAnnouncementCount := gs.GetSentAnnouncementCount()
	for _, elem := range gs.SentAnnouncementList {
		if _, ok := sentAnnouncementIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sentAnnouncement")
		}
		if elem.Id >= sentAnnouncementCount {
			return fmt.Errorf("sentAnnouncement id should be lower or equal than the last id")
		}
		sentAnnouncementIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
