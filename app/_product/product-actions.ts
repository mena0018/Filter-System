'use server';

import axios from 'axios';
import { API_BASE_URL } from '@/lib/site-config';
import { Product } from '@/app/_product/product-data';

export const getProducts = async () => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/api/products`);
  return response.data;
};
