export const SORT_OPTIONS = [
  { name: 'None', value: 'none' },
  { name: 'Price: Low to High', value: 'asc' },
  { name: 'Price: High to Low', value: 'desc' },
] as const;

export const CATEGORIES_OPTIONS = [
  { name: 'T-shirt', value: 'shirt' },
  { name: 'Hoodies', value: 'hoodie' },
  { name: 'Sweatshirts', value: 'sweatshirt' },
  { name: 'Accessories', value: 'accessory' },
] as const;

export const COLOR_OPTIONS = [
  { value: 'white', label: 'White' },
  { value: 'beige', label: 'Beige' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'purple', label: 'Purple' },
] as const;

export enum FilterURL {
  Sort = 'sort',
  Size = 'size',
  Color = 'color',
  Category = 'category',
}
