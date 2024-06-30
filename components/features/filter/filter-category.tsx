'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FilterURL, CATEGORIES } from '@/app/_filter/filter-data';
import { AVAILABLE_CATEGORIES } from '@/app/_product/product-data';
import { FilterColor } from '@/components/features/filter/filter-color';

export const FilterCategory = () => {
  const { getQuery, setQuery } = useQueryParams();

  useEffect(() => {
    setQuery(FilterURL.Category, AVAILABLE_CATEGORIES[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hidden lg:block">
      <ul className="space-y-4 border-b pb-6 text-sm font-medium dark:border-foreground">
        {CATEGORIES.map((category) => (
          <li key={category.value} onClick={() => setQuery(FilterURL.Category, category.value)}>
            <button
              className={cn({ 'opacity-60': category.value !== getQuery(FilterURL.Category) })}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <Accordion type="multiple" className="animate-none">
        <FilterColor />
      </Accordion>
    </div>
  );
};
