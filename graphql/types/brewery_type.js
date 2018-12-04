const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Brewery {
    id: ID!
    name: String
    bio: String
    beers: [Beer]
  }
  type Query {
    breweries: [Brewery]
    brewery(id: ID!): Brewery
  }
  type Mutation {
    createBrewery(
      name: String!
      bio: String!
    ): Brewery
    updateBrewery(
      id: ID!
      name: String!
      bio: String!
    ): Brewery
    deleteBrewery(
      id: ID!
    ): Brewery
  }
`;