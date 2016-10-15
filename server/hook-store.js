const uuid = require('node-uuid');
const persist = require('./file-store.js');

let data = persist.get();

let {webhooks = []} = data;

function getWebhooks() {
    return webhooks;
}

function createWebhook(name) {
    const newWebhook = {
        id: uuid.v1(),
        name
    };

    webhooks = [...webhooks, newWebhook];

    persist.store(Object.assign({}, data, {webhooks}));

    return newWebhook;
}


module.exports = {
    getWebhooks,
    createWebhook
};