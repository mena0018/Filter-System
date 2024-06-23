'use client';

import { useQuery } from '@tanstack/react-query';
import { FilterURL } from '@/app/_filter/filter-data';
import { useQueryParams } from '@/hooks/useQueryParams';
import { getProducts } from '@/app/_product/product-actions';

export function useProducts() {
  const { getQuery } = useQueryParams();
  const sortFilter = getQuery(FilterURL.Sort);
  const sizeFilter = getQuery(FilterURL.Size);
  const colorFilter = getQuery(FilterURL.Color);
  const priceFilter = getQuery(FilterURL.Price);

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['products', sortFilter, sizeFilter, colorFilter, priceFilter],
    queryFn: () => getProducts(),
  });

  return { products, isPending, isError };
}
