import { SIZES, COLORS } from '@/components/features/filter/filter-data';

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  size: 'S' | 'M' | 'L';
  color: 'white' | 'beige' | 'blue' | 'green' | 'purple';
};

const getRandomPrice = () => {
  const PRICES = [9.99, 19.99, 29.99, 39.99, 49.99];
  return PRICES[Math.floor(Math.random() * PRICES.length)];
};

const getName = (color: string, iterator: number) => {
  const productColor = color.slice(0, 1).toUpperCase() + color.slice(1);
  return `${productColor} shirt ${iterator + 1}`;
};

export const generateProducts = () => {
  const products: Array<Product> = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < COLORS.length; j++) {
      for (let k = 0; k < SIZES.length; k++) {
        const size = SIZES[k];
        const color = COLORS[j];
        products.push({
          size,
          color,
          name: getName(color, i),
          price: getRandomPrice(),
          id: `${color}-${size}-${i + 1}`,
          imageId: `/${color}_${i + 1}.png`,
        });
      }
    }
  }

  return products;
};
