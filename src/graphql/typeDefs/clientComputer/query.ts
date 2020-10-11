import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    clientComputer(id: ID!): ClientComputer
    clientComputers: [ClientComputer]
  }
`;
