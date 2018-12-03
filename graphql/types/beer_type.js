module.exports = `
  type Beer {
    id: ID!
    name: String!
    brewery: Brewery!
    genre: String!
    description: String!
    link: String!
    rating: Float!
    uri: String!
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
      uri: String!
      rating: Float!
    ): Beer
    updateBeer(
      id: ID!
      name: String!
      brewery: String!
      genre: String!
      description: String!
      link: String!
      uri: String!
      rating: Float!
    ): Beer
    deleteBeer(
      id: ID!
    ): Beer
  }
`;
