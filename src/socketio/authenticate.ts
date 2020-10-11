import { PrismaClient } from '@prisma/client';
import clientPayload from './interfaces/clientPayload';

const authenticate = async ({ macAddress, socketID }: clientPayload) => {
  const prisma = new PrismaClient();
  const clientPC = await prisma.client_computer.upsert({
    update: {
      macAddress,
      socketID,
      isOnline: true,
      isUnlocked: false,
    },
    where: {
      macAddress,
    },
    create: {
      macAddress,
      socketID,
      isOnline: true,
      isUnlocked: false,
    },
  });
  prisma.client_computer.update({
    data: { ...clientPC, name: `PC-${clientPC.id}` },
    where: {
      id: clientPC.id,
    },
  });
};
export default authenticate;
