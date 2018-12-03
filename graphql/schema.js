// const { GraphQLSchema } = require('graphql');

// const RootQueryType = require('./queries/root_query_type');
// const mutations = require('./mutations');

// module.exports = new GraphQLSchema({
//   query: RootQueryType,
//   mutation: mutations
// });

const { makeExecutableSchema } = require('graphql-tools');
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const BreweryType = require('./types/brewery_type');
const BeerType = require('./types/beer_type');

// Resolvers
const breweryResolver = require('./resolvers/brewery');
const beerResolver = require('./resolvers/beer');

const typeDefs = mergeTypes([BreweryType, BeerType]);
const resolvers = mergeResolvers([breweryResolver, beerResolver]);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});