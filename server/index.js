const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const gqlMiddleware = require('./gql.js');
const webhookMiddleware = require('./webhook-handler.js');

app.set("port", (process.env.PORT || 4000));

app.use('/api/graphql', gqlMiddleware);
app.use('/hook/:id', webhookMiddleware(io));
app.use(express.static('public'));

server.listen(app.get("port"), () => console.log('Now browse to localhost:4000/api/graphql'));