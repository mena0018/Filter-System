export const SORT_OPTIONS = [
  { name: 'None', value: 'none' },
  { name: 'Price: Low to High', value: 'asc' },
  { name: 'Price: High to Low', value: 'desc' },
] as const;

export const CATEGORIES = [
  { name: 'T-shirt', value: 'shirt', href: '#' },
  { name: 'Hoodies', value: 'hoodie', href: '#' },
  { name: 'Sweatshirts', value: 'sweatshirt', href: '#' },
  { name: 'Accessories', value: 'accessory', href: '#' },
] as const;

export const COLOR_FILTERS = {
  id: 'color',
  name: 'Color',
  options: [
    { value: 'white', label: 'White' },
    { value: 'beige', label: 'Beige' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'purple', label: 'Purple' },
  ] as const,
};

export enum FilterURL {
  Sort = 'sort',
  Size = 'size',
  Color = 'color',
  Category = 'category',
}
