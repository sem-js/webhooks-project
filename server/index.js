const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const store = require('./hook-store.js');

// todo(briangenisio): Break this out to a JS-based schema?
const schema = buildSchema(`
  type HookHandler {
      id: String
      name: String
  }

  type Query {
    hookHandlers: [HookHandler]
  }

  type Mutation {
    createHookHandler(name:String): HookHandler
  } 
`);

const root = { 
    hookHandlers: () => store.getWebhooks(),

    createHookHandler: ({name}) => store.createWebhook(name)
 };

var app = express();
app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));