import { gql } from 'apollo-server-koa';

export default gql`
  extend type Mutation {
    addUser(username: String!, password: String!): User
    deleteUser(id: ID!): Boolean
  }
`;
