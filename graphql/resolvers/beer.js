const dbBreweries = require('./../../dynamodb/breweries');
const dbBeers = require('./../../dynamodb/beers');

module.exports = {
  Query: {
    beers: (_, args) => dbBeers.getBeers(),
    beer: (_, args) => dbBeers.getBeerById(args.id),
  },
  Mutation: {
    createBeer: (_, args) => dbBeers.createBeer(args),
    updateBeer: (_, args) => dbBeers.updateBeer(args),
    deleteBeer: (_, args) => dbBeers.deleteBeer(args),
  },
  Beer: {
    brewery: beer => dbBreweries.getBreweryById(beer.brewery),
  },
};