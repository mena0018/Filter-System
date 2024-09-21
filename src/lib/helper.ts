import {
  Product,
  AVAILABLE_SIZES,
  AVAILABLE_PRICE,
  AVAILABLE_COLORS,
  GENERATED_PRODUCT_NUMBER,
} from '@/app/_product/product-data';

export const getRandomPrice = () => {
  return AVAILABLE_PRICE[Math.floor(Math.random() * AVAILABLE_PRICE.length)];
};

export const getName = (color: string, iterator: number) => {
  const productColor = color.slice(0, 1).toUpperCase() + color.slice(1);
  return `${productColor} shirt ${iterator + 1}`;
};

export const generateProducts = () => {
  const products: Product[] = [];

  for (let i = 0; i < GENERATED_PRODUCT_NUMBER; i++) {
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
