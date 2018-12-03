const { GraphQLObjectType } = require('graphql');

const addBrewery = require('./brewery/add_brewery');
// const removeBrewery = require('./brewery/remove_brewery');

const addBeerToBrewery = require('./beer/add_beer_to_brewery');
// const removeBeerFromBrewery = require('./brewery/remove_beer_from_brewery');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBrewery,
    // removeBrewery,
    addBeerToBrewery,
    // removeBeerFromBrewery
  },
});

module.exports = mutation;
