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

function deleteWebhook(id) {
    const index = webhooks.findIndex(hook => hook.id === id);

    if(index < 0) return false;

    webhooks = [
        ...webhooks.slice(0, index),
        ...webhooks.slice(index + 1)
    ];

    persist.store(Object.assign({}, data, {webhooks}));

    return true;
}


module.exports = {
    getWebhooks,
    createWebhook,
    deleteWebhook
};