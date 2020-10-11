import { gql } from 'apollo-server-koa';

export default gql`
  type ClientComputer {
    id: ID!
    name: String
    macAddress: String!
    isOnline: Boolean!
    isUnlocked: Boolean!
    socketID: String
    createdAt: String!
    updatedAt: String!
  }
`;
