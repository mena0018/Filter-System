import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    API_URL_DEV: z.string(),
    API_URL_PROD: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {},
});
