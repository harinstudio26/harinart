import type { MetadataRoute } from 'next';
import { siteUrl } from './seo';
export default function robots(): MetadataRoute.Robots {
  return { rules: [
    { userAgent: '*', allow: '/' },
    { userAgent: ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'], allow: '/' },
  ], sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl };
}
