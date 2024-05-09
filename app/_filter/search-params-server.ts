import { SORT_OPTIONS_KEYS } from '@/app/_filter/filter-data';
import { createSearchParamsCache, parseAsStringLiteral } from 'nuqs/server';

export const searchParams = {
  sort: parseAsStringLiteral(SORT_OPTIONS_KEYS),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
