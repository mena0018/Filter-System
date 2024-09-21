'use client';

import { Toaster } from 'sonner';
import { PropsWithChildren, Suspense } from 'react';
import { ThemeToggle } from '@/styles/theme/theme-toggle';
import { ThemeProvider } from '@/styles/theme/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <ThemeToggle />
          <Toaster richColors closeButton position="top-right" />
          {children}
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
