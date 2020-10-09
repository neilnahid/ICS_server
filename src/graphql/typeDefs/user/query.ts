import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User]
    userss: User
  }
`;
