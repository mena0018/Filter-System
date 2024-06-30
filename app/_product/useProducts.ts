'use client';

import { useQuery } from '@tanstack/react-query';
import { FilterURL } from '@/app/_filter/filter-data';
import { useQueryParams } from '@/hooks/useQueryParams';
import { getProducts } from '@/app/_product/product-actions';
import { toBodyRequest } from '@/app/_product/product-validator';

export const PRODUCTS_KEY = 'products';

export function useProducts() {
  const { getQuery } = useQueryParams();
  const sort = getQuery(FilterURL.Sort);
  const size = getQuery(FilterURL.Size);
  const color = getQuery(FilterURL.Color);
  const category = getQuery(FilterURL.Category);

  const bodyRequest = toBodyRequest({ sort, size, color, category });

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: [PRODUCTS_KEY, bodyRequest],
    queryFn: () => getProducts(bodyRequest),
  });

  return { products, isPending, isError };
}
