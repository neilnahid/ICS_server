import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-koa';
import { Context } from 'koa';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const createGraphQLServer = (prisma: PrismaClient) => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx: Context) => {
      return {
        ctx,
        prisma,
      };
    },
  });
};

export default createGraphQLServer;
