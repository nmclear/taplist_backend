const { makeExecutableSchema } = require('graphql-tools');
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const BreweryType = require('./types/brewery_type');
const BeerType = require('./types/beer_type');
const UserType = require('./types/user_type');

const breweryResolver = require('./resolvers/brewery');
const beerResolver = require('./resolvers/beer');
const userResolver = require('./resolvers/user');

const typeDefs = mergeTypes([BreweryType, BeerType, UserType]);
const resolvers = mergeResolvers([breweryResolver, beerResolver, userResolver]);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
