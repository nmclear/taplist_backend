const { GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt } = require('graphql');

const BeerType = require('./../../types/beer_type');
const BreweryType = require('./../../types/brewery_type');

// const addBeerToBrewery = require('../../../resolvers/beer/add_beer_to_brewery');

module.exports = {
    type: BeerType,
    // type: BreweryType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
        brewery: { type: BreweryType }
    },
    // resolve: (parent, args) => addBeerToBrewery(args)
};
