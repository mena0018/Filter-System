'use client';

import debounce from 'lodash.debounce';
import { Slider } from '@/components/ui/slider';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FilterURL, PRICE_OPTIONS } from '@/app/_filter/filter-data';
import { DEFAULT_PRICE, MIN_PRICE, MAX_PRICE } from '@/app/_product/product-data';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FilterPrice = () => {
  const { getQuery, setQuery } = useQueryParams();

  const price = getQuery(FilterURL.Price) ?? JSON.stringify(DEFAULT_PRICE);
  const [priceFormatted] = JSON.parse(price);

  const debouncedSubmit = debounce(
    (range: number[]) => setQuery(FilterURL.Price, JSON.stringify(range)),
    500,
  );

  return (
    <AccordionItem value="price">
      <AccordionTrigger className="py-3 text-sm">
        <span className="font-medium">Price</span>
      </AccordionTrigger>

      <AccordionContent className="animate-none pt-6">
        <ul className="space-y-4">
          {PRICE_OPTIONS.map((price, priceIndex) => (
            <li
              key={`price-${priceIndex}`}
              className="flex items-center"
              onClick={() => setQuery(FilterURL.Price, JSON.stringify(price.value))}
            >
              <input
                type="radio"
                className="size-4 rounded border"
                checked={Boolean(getQuery(FilterURL.Price)?.includes(JSON.stringify(price.value)))}
              />
              <label className="ml-3 text-sm">{price.label}</label>
            </li>
          ))}

          <li className="flex flex-col gap-4 text-center">
            <Slider
              step={5}
              min={MIN_PRICE}
              max={MAX_PRICE}
              defaultValue={DEFAULT_PRICE}
              onValueChange={(range) => debouncedSubmit(range)}
            />
            <p>{priceFormatted} €</p>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
