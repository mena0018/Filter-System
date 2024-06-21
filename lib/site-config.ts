import type { Metadata } from 'next';

export const SiteConfig: Metadata = {
  title: 'Filter-System',
  description: 'Full Stack filter system made with Next (app router) and Tailwind.',
};

const isLocalDev = process.env.NODE_ENV === 'development';

const API_URL_DEVELOPMENT = process.env.API_URL_DEV;
const API_URL_PRODUCTION = process.env.API_URL_PROD;

export const API_BASE_URL = isLocalDev ? API_URL_DEVELOPMENT : API_URL_PRODUCTION;
