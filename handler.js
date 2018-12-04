
const { graphql } = require('graphql');
const { ApolloServer } = require('apollo-server-lambda');
const schema = require('./graphql/schema');
// const { typeDefs, resolvers } = require('./graphql/schema');

// module.exports.graphql = (event, context, callback) => {
//     graphql(schema, event.body)
//         .then(result => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
//         .catch(callback);
// };

// const server = new ApolloServer({
//   schema
// });

// exports.graphql = server.createHandler();

const server = new ApolloServer({
  // typeDefs,
  // resolvers,
  schema,
  formatError: error => error,
  formatResponse: response => response,
});

exports.graphql = server.createHandler({
  cors: {
    orgin: '*'
  }
})

// module.exports = {
//   graphql: (event, context, callback) => {
//     graphql(schema, event.body)
//     .then(result => 
//       {
//         console.log('================')
//         console.log('yo it hit this point.')
//         console.log(event.body)
//         console.log('================')
//       return callback(null, {statusCode: 200, body: JSON.stringify(result)})
//       }
//       )
//     .catch(callback);
//   },


  // record: (event, context, callback) => {
  //   event.Records.forEach((record) => {
  //     console.log(record.eventID);
  //     console.log(record.eventName);
  //     console.log('DynamoDB Record: %j', record.dynamodb);
  //   });
  //   callback(null, `Successfully processed ${event.Records.length} records.`);
  // }

// }
