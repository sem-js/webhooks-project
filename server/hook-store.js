const uuid = require('node-uuid');
const mongodb = require('mongo-db').default;
 
const cfg = {
  database: 'database',
  collection: 'database',
  user: 'database',
  password: 'database',
  host: 'mongo.local',
  port: 27017,
};

const uri = process.env.MONGO_URI;
const db  = new mongodb(uri, 'webhooks', true);

function getWebhooks() {
    return db.find();
}

function getWebhook(id) {
    return db.find({id})
        .then(hooks => {
            if(hooks.length <= 0) return Promise.reject('Webhook Not found');

            return hooks[0];
        });
}

function createWebhook(name) {
    const newWebhook = {
        id: uuid.v1(),
        name
    };

    return db.insert(newWebhook).then(() => newWebhook);
}

function deleteWebhook(id) {
    return db.remove({id});
}

module.exports = {
    getWebhooks,
    getWebhook,
    createWebhook,
    deleteWebhook
};