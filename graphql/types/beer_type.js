const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const BreweryType = require('./brewery_type');

const BeerType = new GraphQLObjectType({
    name: 'BeerType',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
        addedAt: { type: new GraphQLNonNull(GraphQLString) },
        brewery: { type: BreweryType },
    }
});

module.exports = BeerType;
