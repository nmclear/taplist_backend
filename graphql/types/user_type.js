const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type User {
    phone: ID
    code: Int
    codeValid: Boolean
    authStatus: Boolean
    taplist: [Beer]
  }
  type Query {
    users: [User]
    user(phone: ID!): User
  }
  type Mutation {
    createUser(
      phone: ID
    ): User
    updateUser(
      phone: ID!
      code: Int
      codeValid: Boolean
      taplist: [String]
    ): User
    deleteUser(
      phone: ID!
    ): User
    authorizeUser(
      phone: ID
      code: Int
      codeValid: Boolean
      authStatus: Boolean
    ): User
    addBeerToTaplist(
      phone: ID
      taplist: [String]
      beer: String
    ): User
    resetTaplist(
      phone:ID
      taplist: [String]
    ): User
  }
`;