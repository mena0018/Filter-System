'use client';

import { useProducts } from '@/app/_product/useProducts';
import { ProductItem } from '@/app/_product/components/product-item';
import { ProductsSkeleton } from '@/app/_product/components/product-skeleton';
import { ProductEmptyState } from '@/app/_product/components/product-empty-state';

export const ProductGrid = () => {
  const { products, isPending, isError } = useProducts();

  if (isPending) {
    return <ProductsSkeleton />;
  }

  if (isError || !products || !products.length) {
    return <ProductEmptyState />;
  }

  return (
    <ul className="grid grid-cols-1 gap-8 overflow-scroll sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
