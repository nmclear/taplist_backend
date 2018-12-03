// import * as dbBreweries from './../../dynamodb/breweries';
// import * as dbBeers from './../../dynamodb/beers';

const dbBreweries = require('./../../dynamodb/breweries');
const dbBeers = require('./../../dynamodb/beers');

module.exports = {
  Query: {
    beers: () => dbBeers.getBeers(),
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