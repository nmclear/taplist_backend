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
      // ExpressionAttributeValues: {
      //   ':phone': phone
      // },
      ConditionExpression: 'attribute_not_exists(phone)',
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
        ':true': true,
        ':false': false,
        ':dateNow': Date.now()
      },
      ConditionExpression: 'authStatus = :false',
      UpdateExpression: 'SET code = :code, codeValid = :false, updatedAt = :dateNow, authStatus = :true',
      ReturnValues: 'ALL_NEW',
    };
  
    return db.updateItem(params, { phone });
  },

}
