import { PrismaClient } from '@prisma/client';
import { Context } from 'koa';

export interface GraphQLContext {
  ctx: Context;
  prisma: PrismaClient;
}
