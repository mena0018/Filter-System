import { AVAILABLE_COLORS, AVAILABLE_SIZES, Product } from '@/app/_product/product-data';

const getRandomPrice = () => {
  const PRICES = [9.99, 19.99, 29.99, 39.99, 49.99];
  return PRICES[Math.floor(Math.random() * PRICES.length)];
};

const getName = (color: string, iterator: number) => {
  const productColor = color.slice(0, 1).toUpperCase() + color.slice(1);
  return `${productColor} shirt ${iterator + 1}`;
};

export const generateProducts = () => {
  const products: Product[] = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < AVAILABLE_COLORS.length; j++) {
      for (let k = 0; k < AVAILABLE_SIZES.length; k++) {
        const size = AVAILABLE_SIZES[k];
        const color = AVAILABLE_COLORS[j];
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
