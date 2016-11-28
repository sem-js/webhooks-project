const uuid = require('node-uuid');
const mongodb = require('mongodb');

const uri = process.env.MONGO_URI;

function webhooksDb(callback) {
    return new Promise((resolve, reject) => {
        mongodb.MongoClient.connect(uri, (err, db) => {
            if(err) reject(err);
            resolve(db);
        });
    });
}

function findWebhooks(query) {
    return webhooksDb()
        .then(db => {
            const collection = db.collection('webhooks');

            return new Promise((resolve, reject) => {
                collection.find(query).toArray((err, docs) => {
                    if(err) return reject(err);

                    resolve(docs);
                    db.close();
                })
            });
        });
}

function getWebhooks() {
    return findWebhooks({});
}

function getWebhook(id) {
    return findWebhooks({id});
}

function createWebhook(name) {
    return webhooksDb()
        .then(db => {
            const collection = db.collection('webhooks');

            const newWebhook = {
                id: uuid.v1(),
                name
            };

            return new Promise((resolve, reject) => {
                collection.insert(newWebhook, (err, result) => {
                    if(err) return reject(err);

                    resolve(newWebhook);
                    db.close();
                });
            })
        });
}

function deleteWebhook(id) {
    return webhooksDb()
        .then(db => {
            const collection = db.collection('webhooks');

            return new Promise((resolve, reject) => {
                collection.deleteOne({id}, (err, result) => {
                    if(err) return reject(err);

                    resolve(true);
                    db.close();
                })
            });
        });
}


module.exports = {
    getWebhooks,
    getWebhook,
    createWebhook,
    deleteWebhook
};