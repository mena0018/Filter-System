import { PrismaClient } from '@prisma/client';
import { generateProducts } from '@/lib/helper';

const prisma = new PrismaClient();

const seed = async () => {
  const products = generateProducts();

  for (const product of products) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        size: product.size,
        price: product.price,
        color: product.color,
        imageId: product.imageId,
      },
    });
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
