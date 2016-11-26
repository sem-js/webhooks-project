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
    deleteHookHandler(id:String): Boolean
  } 
`);

const root = { 
    hookHandlers: () => store.getWebhooks(),

    createHookHandler: ({name}) => store.createWebhook(name),
    deleteHookHandler: ({id}) => store.deleteWebhook(id)
};

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});