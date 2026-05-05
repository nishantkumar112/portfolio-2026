import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nishantatras.com',
      lastModified: new Date(),
    },
    {
      url: 'https://nishantatras.com/projects',
      lastModified: new Date(),
    },
  ];
}
