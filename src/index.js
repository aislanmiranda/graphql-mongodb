require('dotenv').config();
const { ApolloServer, PubSub } = require('apollo-server');
const resolvers = require('./resolvers');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const typeDefs = require('./types');
const pubsub = new PubSub();
const connectionDB = require('./config/mongoose');

const db = connectionDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: true,
  validationRules: [
    depthLimit(5), //limita a profundidade do retorno em (5)
    createComplexityLimitRule(1000, {
      onCost: cost => console.info('query cost: ', cost)
    })
  ],
  context: async ({ req, connection }) => {
    //   const token = req ? req.headers.authorization : connection.context.Authorization
    //   const currentUser = await db.collection('usuario').findOne({ token })
    return { pubsub }
  }
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});