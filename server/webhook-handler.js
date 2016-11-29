const store = require('./hook-store.js');

function webhookHandler(io) {
    return function(req, res) {
        const id = req.params.id;

        store.getWebhook(id)
            .then(handler => {
                res.send("OK");

                io.emit("webhook", {
                    webhookId: handler.id,
                    webhookName: handler.name,
                    query: req.query
                });
            })
            .catch(err => {
                res.send("FAIL");
            });
    };
}

module.exports = webhookHandler;