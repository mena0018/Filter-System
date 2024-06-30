import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ProductFilterValidator } from '@/app/_product/product-validator';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { color, size, sort, category } = ProductFilterValidator.parse(body.filter);

  const products = await prisma.product.findMany({
    where: {
      size: { in: size },
      color: { in: color },
      name: { contains: category },
    },
    orderBy: sort !== 'none' ? { price: sort } : undefined,
  });

  return NextResponse.json(products);
};
