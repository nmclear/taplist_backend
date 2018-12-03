const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = require('graphql');

const BeerType = require('./beer_type');

const BreweryType = new GraphQLObjectType({
    name: 'BreweryType',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        addedAt: { type: new GraphQLNonNull(GraphQLString) },
        beers: {
            type: new GraphQLList(BeerType)
        }
    }
});

module.exports = BreweryType;
