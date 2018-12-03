const dbBreweries = require('./../../dynamodb/breweries');
const dbBeers = require('./../../dynamodb/beers');

module.exports = {
  Query: {
    breweries: () => dbBreweries.getBreweries(),
    brewery: (_, args) => dbBreweries.getBreweryById(args.id),
  },
  Mutation: {
    createBrewery: (_, args) => dbBreweries.createBrewery(args),
    updateBrewery: (_, args) => dbBreweries.updateBrewery(args),
    deleteBrewery: (_, args) => dbBreweries.deleteBrewery(args),
  },

  Brewery: {
    beers: brewery => dbBeers.getBeersByBrewery(brewery.id),
  },
};