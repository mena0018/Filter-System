import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ProductFilterValidator } from '@/app/_product/product-validator';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const filter = ProductFilterValidator.safeParse(body.filter);

    if (!filter.success) {
      return NextResponse.json({ error: 'Invalid product filter state' }, { status: 400 });
    }

    const { color, size, sort, category, price } = filter.data;
    const products = await prisma.product.findMany({
      where: {
        size: { in: size },
        color: { in: color },
        name: { contains: category },
        price: price ? { gte: price[0], lte: price[1] } : undefined,
      },
      orderBy: sort !== 'none' ? { price: sort } : undefined,
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
