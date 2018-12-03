const { graphqlLambda } = require('graphql-server-lambda');

const schema = require('./graphql/schema');
// Types

exports.graphql = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    // const outputWithHeader = Object.assign({}, output, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // });
    // callback(error, outputWithHeader);
    callback(error)
  };

  graphqlLambda({ schema })(event, context, callbackFilter);
};

exports.record = (event, context, callback) => {
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  callback(null, `Successfully processed ${event.Records.length} records.`);
};