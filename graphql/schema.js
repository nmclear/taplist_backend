const { makeExecutableSchema } = require('graphql-tools');
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const BreweryType = require('./types/brewery_type');
const BeerType = require('./types/beer_type');

const breweryResolver = require('./resolvers/brewery');
const beerResolver = require('./resolvers/beer');

const typeDefs = mergeTypes([BreweryType, BeerType]);
const resolvers = mergeResolvers([breweryResolver, beerResolver]);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});