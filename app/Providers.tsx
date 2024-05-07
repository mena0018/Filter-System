'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/components/features/theme/theme-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
