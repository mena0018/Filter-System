'use client';

import { PropsWithChildren, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/features/theme/theme-provider';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <Suspense>{children}</Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
