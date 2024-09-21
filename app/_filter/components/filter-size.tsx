'use client';

import { useQueryParams } from '@/hooks/useQueryParams';
import { SIZE_OPTIONS, FilterURL } from '@/app/_filter/filter-data';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FilterSize = () => {
  const { getQuery, setOrDeleteQueryMultiple } = useQueryParams();

  return (
    <AccordionItem value="size">
      <AccordionTrigger className="py-3 text-sm">
        <span className="font-medium">Size</span>
      </AccordionTrigger>

      <AccordionContent className="animate-none pt-6">
        <ul className="space-y-4">
          {SIZE_OPTIONS.map((size) => (
            <li
              key={size.value}
              className="flex items-center"
              onClick={() => setOrDeleteQueryMultiple(FilterURL.Size, size.value)}
            >
              <input
                type="checkbox"
                className="size-4 rounded border"
                checked={Boolean(getQuery(FilterURL.Size)?.includes(size.value))}
              />
              <label className="ml-3 text-sm">{size.label}</label>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
