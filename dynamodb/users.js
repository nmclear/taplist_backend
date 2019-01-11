const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'taplist_app_users';


module.exports = {

  getUsers: () => {
    const params = {
      TableName: TABLE_NAME,
    };
  
    return db.scan(params);
  },

  getUserByPhone: (phone) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone,
      },
    };
    return db.get(params);
  },
  
  updateUser: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone: args.phone,
      },
      ExpressionAttributeValues: {
        ':taplist': args.taplist,
        ':dateNow': Date.now()
      },
      UpdateExpression: 'SET taplist = :taplist, updatedAt = :dateNow',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, args);
  },

  deleteUser: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone: args.phone,
      },
    };
  
    return db.deleteItem(params, args);
  },
  addBeerToTaplist: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone: args.phone,
      },
      ExpressionAttributeValues: {
        // ':taplist': args.taplist,
        ':beer': [args.beer],
        ':beerId':  args.beer,
        ':dateNow': Date.now()
      },
      ConditionExpression: 'NOT contains (taplist, :beerId)',
      UpdateExpression: 'SET taplist = list_append(taplist, :beer), updatedAt = :dateNow',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, args);
  },
  resetTaplist: (phone) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone,
      },
      ExpressionAttributeValues: {
        ':emptyList': [],
        ':dateNow': Date.now()
      },
      UpdateExpression: 'SET taplist = :emptyList, updatedAt = :dateNow',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, { phone });
  }
}
