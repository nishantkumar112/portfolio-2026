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

const siteUrl = 'https://nishantatras.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nishant Atras | Full-Stack Developer',
    template: '%s | Nishant Atras',
  },
  description:
    'Full-stack developer building production-ready web apps with React, Next.js, and TypeScript. Available for freelance and full-time work.',
  keywords: [
    'full-stack developer',
    'React developer',
    'Next.js',
    'TypeScript',
    'freelance developer',
    'portfolio',
  ],
  authors: [{name: 'Nishant Atras', url: siteUrl}],
  creator: 'Nishant Atras',
  robots: {index: true, follow: true},
  alternates: {canonical: siteUrl},
  openGraph: {
    title: 'Nishant Atras | Full-Stack Developer',
    description:
      'Full-stack developer specialising in React, Next.js, and TypeScript.',
    url: siteUrl,
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nishant Atras',
  url: siteUrl,
  jobTitle: 'Full-Stack Developer',
  sameAs: [
    'https://github.com/nishantkumar112',
    'https://www.linkedin.com/in/nishantatras/',
  ],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js'],
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
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <PageTransition>
          <ThemeProvider>{children}</ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
