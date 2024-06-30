'use client';

import { useQueryParams } from '@/hooks/useQueryParams';
import { COLOR_FILTERS, FilterURL } from '@/app/_filter/filter-data';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FilterColor = () => {
  const { getQuery, setOrDeleteQueryMultiple } = useQueryParams();

  return (
    <AccordionItem value="color">
      <AccordionTrigger className="py-3 text-sm">
        <span className="font-medium">Color</span>
      </AccordionTrigger>

      <AccordionContent className="animate-none pt-6">
        <ul className="space-y-4">
          {COLOR_FILTERS.options.map((colorOption) => (
            <li
              key={colorOption.value}
              className="flex items-center"
              onClick={() => setOrDeleteQueryMultiple(FilterURL.Color, colorOption.value)}
            >
              <input
                type="checkbox"
                className="size-4 rounded border"
                checked={Boolean(getQuery(FilterURL.Color)?.includes(colorOption.value))}
              />
              <label className="ml-3 text-sm">{colorOption.label}</label>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
