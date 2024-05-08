import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { PropsWithChildren } from 'react';
import { SiteConfig } from '@/lib/site-config';
import { Inter as FontSans } from 'next/font/google';
import { ModeToggle } from '@/components/features/theme/theme-toggle';

const fontSans = FontSans({ subsets: ['latin'] });
export const metadata: Metadata = SiteConfig;

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body
        suppressHydrationWarning
        className={cn('font-sans antialiased', fontSans.className)}
      >
        <Providers>
          <aside className="absolute right-2 top-5 md:right-5">
            <ModeToggle />
          </aside>
          {children}
        </Providers>
      </body>
    </html>
  );
}
