import prisma from '@/db/prisma';

export const POST = async () => {
  const products = await prisma.product.findMany();
  return new Response(JSON.stringify(products));
};
