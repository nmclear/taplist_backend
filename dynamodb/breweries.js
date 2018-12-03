const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'breweriesNew';


module.exports = {

  getBreweries: () => {
    const params = {
      TableName: TABLE_NAME,
      AttributesToGet: [
        'id',
        'name',
        'bio',
      ],
    };
  
    return db.scan(params);
  },

  getBreweryById: (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };
    return db.get(params);
  },

  createBrewery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuid(),
        name: args.name,
        bio: args.bio,
        // beers: [],
        addedAt: Date.now(),
      },
    };
    return db.createItem(params);
  },

  updateBrewery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
      ExpressionAttributeValues: {
        ':name': args.name,
        ':bio': args.bio,
      },
      UpdateExpression: 'SET name = :name, bio = :bio',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, args);
  },

  deleteBrewery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
    };
  
    return db.deleteItem(params, args);
  }
}
