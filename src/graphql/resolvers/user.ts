import { Resolvers } from '../../generated/graphql';

const resolver: Resolvers = {
  Mutation: {
    addUser: async (
      parent,
      { password, username },
      { ctx }
    ): Promise<boolean> => {
      console.log(parent, password, username, ctx);

      return true;
    },
    deleteUser: async (parent, { id }, { ctx }): Promise<boolean> => {
      console.log(parent, id, ctx);

      return true;
    },
  },
};
export default resolver;
