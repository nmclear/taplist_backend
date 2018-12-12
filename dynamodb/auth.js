const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'usersNew';


module.exports = {
    
  createUserByPhoneAndCode: ({ phone, code }) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        phone,
        code,
        taplist: [],
        codeValid: true,
        authStatus: false,
        addedAt: Date.now(),
        updatedAt: Date.now()
      },
    };
    return db.createItem(params);
  },

  updateSuccessAuthStatusByPhone: (phone) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        phone,
      },
      ExpressionAttributeValues: {
        ':code': 0,
        ':codeValid': false,
        ':authStatus': true,
        ':updatedAt': Date.now()
      },
      UpdateExpression: 'SET code = :code, codeValid = :codeValid, updatedAt = :updatedAt, authStatus = :authStatus',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, { phone });
  },

}
