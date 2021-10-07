// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import Liberty30UsAppChainLiberty30UsappchainAnnouncement from './Liberty30/us-app-chain/Liberty30.usappchain.announcement';
export default {
    Liberty30UsAppChainLiberty30UsappchainAnnouncement: load(Liberty30UsAppChainLiberty30UsappchainAnnouncement, 'Liberty30.usappchain.announcement'),
};
function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: ' + fullns);
        }
        else {
            store.registerModule([fullns], mod);
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns + '/init', null, {
                        root: true
                    });
                }
            });
        }
    };
}
