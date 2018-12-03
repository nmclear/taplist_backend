const uuid = require('uuid/v1');
// import * as db from './index';
const db = require('./index');

const TABLE_NAME = process.env.TABLE_NAME;

module.exports = function getBreweries() {
  const params = {
    TableName: TABLE_NAME,
    AttributesToGet: [
      'id',
      'name',
      'bio',
    ],
  };

  return db.scan(params);
}

module.exports = function getBreweryById(id) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };

  return db.get(params);
}

module.exports = function createBrewery(args) {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: uuid(),
      name: args.name,
      bio: args.bio,
      // beers: [],
      // breweryId: uuidv1(),
      addedAt: Date.now(),
    },
  };

  return db.createItem(params);
}

module.exports = function updateBrewery(args) {
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
}

module.exports = function deleteBrewery(args) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}