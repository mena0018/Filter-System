'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getProducts } from '@/app/_product/product-actions';

export function useProducts() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['products', sort],
    queryFn: () => getProducts(sort),
  });

  return { products, isPending, isError };
}
