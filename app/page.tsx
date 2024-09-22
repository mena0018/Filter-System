import { Suspense } from 'react';
import { FadeInTitle } from '@/components/fade-in-title';
import { ProductGrid } from '@/app/_product/components/product-grid';
import { FilterCategory } from '@/app/_filter/components/filter-category';
import { FilterDropdown } from '@/app/_filter/components/filter-dropdown';
import { ProductsSkeleton } from '@/app/_product/components/product-skeleton';

export default async function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="flex items-baseline justify-between border-b pb-6 pt-24 dark:border-foreground">
        <FadeInTitle
          value="High-quality cotton selection"
          className="text-lg font-bold md:text-4xl"
        />
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
