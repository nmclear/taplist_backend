const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'usersNew';


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
        ':updatedAt': Date.now()
      },
      UpdateExpression: 'SET taplist = :taplist, updatedAt = :updatedAt',
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
  }
}
