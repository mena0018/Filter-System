import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Providers } from '@/app/providers';
import { baseMetadata } from '@/lib/site-config';

const fontSans = FontSans({ subsets: ['latin'] });
export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body suppressHydrationWarning className={cn('font-sans antialiased', fontSans.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
