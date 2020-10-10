import { user } from '@prisma/client';
import { Resolvers } from '../../generated/graphql';

const resolver: Resolvers = {
  Mutation: {
    addUser: async (
      parent,
      { password, username },
      { ctx, prisma }
    ): Promise<user> => {
      console.log(parent, password, username, ctx);
      const newUser = await prisma.user.create({
        data: { username, password },
      });
      return newUser;
    },
    deleteUser: async (parent, { id }, { ctx }): Promise<boolean> => {
      console.log(parent, id, ctx);
      return true;
    },
  },
  Query: {
    users: async (_, __, { prisma }) => {
      return prisma.user.findMany();
    },
  },
};
export default resolver;
