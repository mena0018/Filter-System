import { expect, describe, it } from 'vitest';
import { generateProducts, getName, getRandomPrice } from '@/lib/helper';
import {
  AVAILABLE_PRICE,
  AVAILABLE_SIZES,
  AVAILABLE_COLORS,
  GENERATED_PRODUCT_NUMBER,
} from '@/app/_product/product-data';

describe(getRandomPrice, () => {
  it('should return a price from the list of predefined prices', () => {
    const price = getRandomPrice();
    expect(AVAILABLE_PRICE).toContain(price);
  });

  it('should fail if the price is not in the list of predefined prices', () => {
    const incorrectPrice = 999;
    expect(AVAILABLE_PRICE).not.toContain(incorrectPrice);
  });
});

describe(getName, () => {
  it('should return a name with the first letter capitalized and the iterator incremented by 1', () => {
    const blueProductName = getName('blue', 0);
    expect(blueProductName).toBe('Blue shirt 1');
  });

  it('should return the correct name with incremented iterator', () => {
    const redProductName = getName('red', 10);
    expect(redProductName).toBe('Red shirt 11');
  });

  it('should handle color strings with uppercase letters', () => {
    const greenProductName = getName('Green', 1);
    expect(greenProductName).toBe('Green shirt 2');
  });
});

describe(generateProducts, () => {
  const products = generateProducts();

  it('should generate the correct number of products', () => {
    const expectedProductCount =
      GENERATED_PRODUCT_NUMBER * AVAILABLE_COLORS.length * AVAILABLE_SIZES.length;
    expect(products).toBeInstanceOf(Array);
    expect(products.length).toBe(expectedProductCount);
  });

  it('should generate products with correct properties and types', () => {
    for (const product of products) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('imageId');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('size');
      expect(product).toHaveProperty('color');
      expect(product).toHaveProperty('price');

      expect(typeof product.id).toBe('string');
      expect(typeof product.imageId).toBe('string');
      expect(typeof product.name).toBe('string');
      expect(AVAILABLE_SIZES).toContain(product.size);
      expect(AVAILABLE_PRICE).toContain(product.price);
      expect(AVAILABLE_COLORS).toContain(product.color);
    }
  });
});
