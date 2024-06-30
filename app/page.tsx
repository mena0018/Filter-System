import { Suspense } from 'react';
import { ProductGrid } from '@/components/features/product/product-grid';
import { FilterCategory } from '@/components/features/filter/filter-category';
import { FilterDropdown } from '@/components/features/filter/filter-dropdown';
import { ProductsSkeleton } from '@/components/features/product/product-skeleton';

export default async function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="flex items-baseline justify-between border-b pb-6 pt-24 dark:border-foreground">
        <h1 className="text-lg font-bold md:text-4xl">High-quality cotton selection</h1>
        <FilterDropdown />
      </header>

      <main className="pb-24 pt-6">
        <article className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <FilterCategory />
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductGrid />
          </Suspense>
        </article>
      </main>
    </section>
  );
}
