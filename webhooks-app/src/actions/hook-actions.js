import {action, observable} from 'mobx';

import {dataClient} from '../data-client.js';
import appState from '../state/app-state';

const fetchHooks = action(() => {
    dataClient.query(`
    query {
        hookHandlers {
            id, name
        }
    }`).then(response => {
        action(() => {
            response.hookHandlers.forEach(hook => appState.hooks.push(observable(hook)));
        })();
    });
});

export {
    fetchHooks
};
