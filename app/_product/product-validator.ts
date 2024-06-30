import { z } from 'zod';
import {
  AVAILABLE_COLORS,
  AVAILABLE_SIZES,
  AVAILABLE_SORT,
  AVAILABLE_CATEGORIES,
} from '@/app/_product/product-data';

export const ProductFilterValidator = z.object({
  sort: z.enum(AVAILABLE_SORT),
  category: z.enum(AVAILABLE_CATEGORIES),
  size: z.array(z.enum(AVAILABLE_SIZES)),
  color: z.array(z.enum(AVAILABLE_COLORS)),
});

export type ProductFilterState = z.infer<typeof ProductFilterValidator>;

export const toBodyRequest = (filter: Record<keyof ProductFilterState, string | null>) => {
  return {
    sort: filter.sort ?? AVAILABLE_SORT[0],
    category: filter.category ?? AVAILABLE_CATEGORIES[0],
    size: filter.size ? filter.size.split(',') : AVAILABLE_SIZES,
    color: filter.color ? filter.color.split(',') : AVAILABLE_COLORS,
  } as ProductFilterState;
};
