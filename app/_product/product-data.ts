type Size = 'S' | 'M' | 'L';
type Color = 'white' | 'beige' | 'blue' | 'green' | 'purple';

export type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  size: Size;
  color: Color;
};

export const AVAILABLE_SIZES = ['S', 'M', 'L'] as const;
export const AVAILABLE_SORT = ['none', 'asc', 'desc'] as const;
export const AVAILABLE_COLORS = ['white', 'beige', 'blue', 'green', 'purple'] as const;
export const AVAILABLE_CATEGORIES = ['shirt', 'hoodie', 'sweatshirt', 'accessory'] as const;
