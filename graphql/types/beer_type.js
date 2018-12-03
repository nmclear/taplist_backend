module.exports = `
  type Beer {
    id: ID!
    name: String!
    brewery: Brewery!
    genre: String!
    description: String!
    link: String!
    rating: Int!
    addedAt: String!
  }
  type Query {
    beers: [Beer]
    beer(id: ID!): Beer
  }
  type Mutation {
    createBeer(
      name: String!
      brewery: String!
      genre: String!
      description: String!
      link: String!
      rating: Int!
    ): Beer
    updateBeer(
      id: ID!
      name: String!
      brewery: String!
      genre: String!
      description: String!
      link: String!
      rating: Int!
    ): Beer
    deleteBeer(
      id: ID!
    ): Beer
  }
`;
