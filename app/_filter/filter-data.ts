export const SORT_OPTIONS_KEYS = ['none', 'price-asc', 'price-desc'] as const;

export const SORT_OPTIONS = [
  { name: 'None', value: 'none' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
] as const;
