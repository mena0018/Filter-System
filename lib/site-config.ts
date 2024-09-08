import { env } from '@/lib/env';
import type { Metadata } from 'next';

export const SiteConfig: Metadata = {
  title: 'Filter-System',
  description: 'Full Stack filter system made with Next (app router) and Tailwind.',
};

export const API_BASE_URL = env.API_URL;
