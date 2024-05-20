'use server';

import axios from 'axios';
import { Product } from '@/app/_product/product-data';

export const getProducts = async (sort: string | null) => {
  const response = await axios.post<Product[]>('http://localhost:3000/api/products', {
    filter: { sort },
  });
  return response.data;
};
