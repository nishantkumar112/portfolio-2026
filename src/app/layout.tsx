import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import PageTransition from '@/components/PageTransition';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // prevents invisible text during font load
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nishant Atras | Full-Stack Developer',
  description:
    'Portfolio of Nishant Atras — full-stack developer specialising in React, Next.js, and TypeScript.',
  keywords: ['developer', 'portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{name: 'Nishant Atras'}],
  openGraph: {
    title: 'Nishant Atras | Full-Stack Developer',
    description:
      'Full-stack developer specialising in React, Next.js, and TypeScript.',
    url: 'https://nishantatras.dev',
    siteName: 'Nishant Atras Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nishant Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishant | Software Engineer',
    description: 'Full-stack engineer building production-ready applications.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
        <PageTransition>
          <ThemeProvider>{children}</ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
