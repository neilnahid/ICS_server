import { Resolvers } from '../../generated/graphql';

const resolver: Resolvers = {
  Query: {
    clientComputer: async (parent, args, context) => {
      const { prisma } = context;
      const { id } = args;
      return prisma.client_computer.findOne({ where: { id: parseInt(id, 2) } });
    },
    clientComputers: async (parent, args, context) => {
      const { prisma } = context;
      return prisma.client_computer.findMany();
    },
  },
};
export default resolver;
