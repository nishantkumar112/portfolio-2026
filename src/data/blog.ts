import type {BlogPost} from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'rbac-jwt-production',
    title: 'RBAC with JWT in Production',
    excerpt:
      'How I designed role-based access control so managers never see admin routes — even with a tampered token.',
    date: 'Coming soon',
    readTime: '8 min read',
    status: 'draft',
  },
  {
    slug: 'nextjs-portfolio-seo',
    title: 'Next.js Portfolio SEO Checklist',
    excerpt:
      'Metadata, Open Graph, structured data, and performance patterns that actually move the needle.',
    date: 'Coming soon',
    readTime: '6 min read',
    status: 'draft',
  },
  {
    slug: 'redis-otp-flow',
    title: 'Building a Secure OTP Flow with Redis',
    excerpt:
      'Time-expiring codes, replay protection, and UX that does not frustrate real users.',
    date: 'Coming soon',
    readTime: '10 min read',
    status: 'draft',
  },
];
