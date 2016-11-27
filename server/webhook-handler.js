const store = require('./hook-store.js');

function webhookHandler(io) {
    return function(req, res) {
        const id = req.params.id;

        const handler = store.getWebhook(id);

        if(!handler) {
            res.send("FAIL");
            return;
        }

        res.send("OK");

        io.emit("webhook", {
            webhookId: handler.id,
            webhookName: handler.name,
            query: req.query
        });
    };
}

module.exports = webhookHandler;