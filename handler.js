
const { graphql } = require('graphql');
const schema = require('./graphql/schema');

// module.exports.graphql = (event, context, callback) => {
//     graphql(schema, event.body)
//         .then(result => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
//         .catch(callback);
// };

module.exports = {
  graphql: (event, context, callback) => {
    graphql(schema, event.body)
    .then(result => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
    .catch(callback);
  },
  record: (event, context, callback) => {
    event.Records.forEach((record) => {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log('DynamoDB Record: %j', record.dynamodb);
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
  }

}
