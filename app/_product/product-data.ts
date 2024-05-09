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
