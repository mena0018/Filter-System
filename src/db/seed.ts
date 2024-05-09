import prisma from '@/db/prisma';
import { generateProducts } from '@/lib/helper';

const seed = async () => {
  const products = generateProducts();

  for (const product of products) {
    await prisma.product.create({ data: product });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
