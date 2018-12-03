const { GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');

const BreweryType = require('./../../types/brewery_type');
const BeerType = require('./../../types/beer_type');

// const addBrewery = require('./../../../resolvers/brewery/add_brewery');

module.exports = {
    type: BreweryType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        beers: {
            type: new GraphQLList(BeerType)
        }
    },
    // resolve: (parent, args) => addBrewery(args)
};
