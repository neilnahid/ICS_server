import { PrismaClient } from '@prisma/client';
import Koa from 'koa';
import createGraphQLServer from './graphql';

(async () => {
  const app = new Koa();
  const prisma = new PrismaClient();
  const graphQLServer = createGraphQLServer(prisma);
  app.use(graphQLServer.getMiddleware());
  app.listen(3000, () => {
    console.log('http://localhost:3000 🚀');
  });
})();
