import { PrismaClient } from '@prisma/client';
import clientPayload from './interfaces/clientPayload';

export default ({ macAddress, socketID }: clientPayload) => {
  const prisma = new PrismaClient();
  prisma.client_computer.update({
    data: {
      isUnlocked: false,
    },
    where: {
      macAddress,
      socketID,
    },
  });
};
