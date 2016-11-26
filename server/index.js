const express = require('express');
const gqlMiddleware = require('./gql.js');

var app = express();

app.use('/api/graphql', gqlMiddleware);
app.use(express.static('public'));


app.listen(4000, () => console.log('Now browse to localhost:4000/api/graphql'));