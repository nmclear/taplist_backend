const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'taplist_app_beers';

module.exports = {
  getBeers: () => {
    const params = {
      TableName: TABLE_NAME,
    };
  
    
    return db.scan(params);
  },

  getBeerById: (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };
  
    return db.get(params);
  },

  getBeersByBrewery: (breweryId) => {
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: 'brewery = :breweryId',
      ExpressionAttributeValues: { ':breweryId': breweryId },
    };
  
    return db.scan(params);
  },
  getBeersFromTapList: (taplist) => {
    if(taplist.length === 0) return [];
    const params = {
      RequestItems: {
        [TABLE_NAME]: {
          Keys: taplist.map(id => ({ id })),
        }
      }
    }

    return db.batchGet(params);
  },
  
  createBeer: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuid(),
        name: args.name,
        brewery: args.brewery,
        genre: args.genre,
        description: args.description,
        link: args.link,
        rating: args.rating,
        uri: args.uri,
        addedAt: Date.now()
      },
    };
  
    return db.createItem(params);
  },

  updateBeer: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
      ExpressionAttributeValues: {
        ':name': args.name,
        ':brewery': args.brewery,
        ':genre': args.genre,
        ':description': args.description,
        ':link': args.link,
        ':uri': args.uri,
        ':rating': args.rating,
      },
      UpdateExpression: 'SET name = :name, brewery = :brewery, genre = :genre, description = :description, link = :link, rating = :rating, uri = :uri',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, args);
  },

  deleteBeer: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
    };
  
    return db.deleteItem(params, args);
  }

}