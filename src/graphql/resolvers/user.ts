import { user } from '@prisma/client';
import { Resolvers } from '../../generated/graphql';

const resolver: Resolvers = {
  Mutation: {
    addUser: async (parent, args, context): Promise<user> => {
      const { password, username } = args;
      const { prisma } = context;
      const newUser = await prisma.user.create({
        data: { username, password },
      });
      return newUser;
    },
    deleteUser: async (): Promise<boolean> => {
      return true;
    },
  },
  Query: {
    users: async (_, __, context) => {
      const { prisma } = context;
      return prisma.user.findMany();
    },
    user: async (_, { id }, { prisma }) => {
      return prisma.user.findOne({ where: { id: parseInt(id, 2) } });
    },
  },
};
export default resolver;
