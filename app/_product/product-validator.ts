import { z } from 'zod';
import {
  AVAILABLE_SORT,
  AVAILABLE_SIZES,
  AVAILABLE_PRICE,
  AVAILABLE_COLORS,
  AVAILABLE_CATEGORIES,
} from '@/app/_product/product-data';

export const ProductFilterValidator = z.object({
  sort: z.enum(AVAILABLE_SORT),
  category: z.enum(AVAILABLE_CATEGORIES),
  size: z.array(z.enum(AVAILABLE_SIZES)),
  color: z.array(z.enum(AVAILABLE_COLORS)),
  price: z.tuple([z.number(), z.number()]),
});

export type ProductFilterState = z.infer<typeof ProductFilterValidator>;
type ProductFilterSource = Record<keyof ProductFilterState, string | null>;

export type ValidatedProductFilterState =
  | { success: false }
  | { success: true; data: ProductFilterState };

export const toBodyRequest = (filter: ProductFilterSource): ValidatedProductFilterState => {
  const bodyRequest = {
    sort: filter.sort ?? AVAILABLE_SORT[0],
    category: filter.category ?? AVAILABLE_CATEGORIES[0],
    price: filter.price ? JSON.parse(filter.price) : AVAILABLE_PRICE[0],
    size: filter.size ? filter.size.split(',') : AVAILABLE_SIZES,
    color: filter.color ? filter.color.split(',') : AVAILABLE_COLORS,
  };

  const result = ProductFilterValidator.safeParse(bodyRequest);

  if (!result.success) {
    return { success: false };
  }

  return { success: true, data: result.data };
};
