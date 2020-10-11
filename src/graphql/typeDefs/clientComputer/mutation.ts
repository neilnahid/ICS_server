import { gql } from 'apollo-server-koa';

export default gql`
  extend type Mutation {
    lockComputer(id: ID!): Boolean!
    unlockComputer(id: ID!): Boolean!
    addTime(id: ID!, timeInMinutes: Int!): Boolean!
    minusTime(id: ID!, timeInMinutes: Int!): Boolean!
  }
`;
