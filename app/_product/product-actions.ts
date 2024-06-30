'use server';

import axios from 'axios';
import { API_BASE_URL } from '@/lib/site-config';
import { Product } from '@/app/_product/product-data';
import { ProductFilterState } from '@/app/_product/product-validator';

export const getProducts = async (filter: ProductFilterState) => {
  try {
    const response = await axios.post<Product[]>(`${API_BASE_URL}/api/products`, { filter });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
