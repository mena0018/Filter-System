'use client';

import { useProducts } from '@/app/_product/useProducts';
import { ProductItem } from '@/components/features/product/product-item';
import { ProductsSkeleton } from '@/components/features/product/product-skeleton';
import { ProductEmptyState } from '@/components/features/product/product-empty-state';

export const ProductGrid = () => {
  const { products, isPending, isError } = useProducts();

  if (isPending) {
    return <ProductsSkeleton />;
  }

  if (isError || !products) {
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
