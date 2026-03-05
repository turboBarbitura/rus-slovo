import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://slova-po-russki.ru';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/168-fz`,
      lastModified: new Date('2026-03-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}