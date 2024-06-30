'use client';

import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FilterColor } from '@/components/features/filter/filter-color';
import { FilterURL, CATEGORIES_OPTIONS } from '@/app/_filter/filter-data';

export const FilterCategory = () => {
  const { getQuery, setOrDeleteQuery } = useQueryParams();

  return (
    <div className="hidden lg:block">
      <ul className="space-y-4 border-b pb-6 text-sm font-medium dark:border-foreground">
        {CATEGORIES_OPTIONS.map((category) => (
          <li
            key={category.value}
            onClick={() => setOrDeleteQuery(FilterURL.Category, category.value)}
          >
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
