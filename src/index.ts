import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import typeDefs from './graphql/typeDefs';

(async () => {
  const app = new Koa();
  const server = new ApolloServer({ typeDefs });
  app.use(server.getMiddleware());
  app.listen(3000, () => {
    console.log('http://localhost:3000 🚀');
  });
})();
