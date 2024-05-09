'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/features/theme/theme-provider';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
