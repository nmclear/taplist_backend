// const {
//     GraphQLObjectType,
//     GraphQLList,
//     GraphQLID,
//     GraphQLNonNull,
//     GraphQLString
// } = require('graphql');

// const BreweryType = require('./../types/brewery_type');
// const BeerType = require('./../types/beer_type');

// const listBreweries = require('./../../resolvers/brewery/list_all_breweries');
// const viewBrewery = require('./../../resolvers/brewery/view_brewery');
// const viewBeer = require('./../../resolvers/beer/view_beer');

// const listBreweries = require('./../resolvers/brewery');

// const RootQueryType = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         breweries: {
//             type: new GraphQLList(BreweryType),
//             resolve: (parent, args) => listBreweries()
//         },
//         brewery: {
//             args: {
//                 breweryId: { type: new GraphQLNonNull(GraphQLID) },
//             },
//             type: BreweryType,
//             resolve: (parent, args) => viewBrewery(args.breweryId)
//         },
//         beer: {
//             args: {
//                 brewery: { type: new GraphQLNonNull(GraphQLString) },
//                 id: { type: new GraphQLNonNull(GraphQLID) },
//             },
//             type: BeerType,
//             resolve: (parent, args) => viewBeer(args)
//         },
//     }
// });

// module.exports = RootQueryType;
