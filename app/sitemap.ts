import type { MetadataRoute } from 'next';
import { articles } from './blog/articles';
const base = 'https://harinart.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ['', 'about', 'craft', 'group-class', 'healing-art', 'ai-class', 'shop', 'gallery', 'blog', 'blog/gemstone-hairpins', 'contact'].map(path => ({
    url: path ? `${base}/${path}` : base, lastModified: new Date(), changeFrequency: path === 'blog' ? 'weekly' : 'monthly', priority: path === '' ? 1 : path === 'contact' || path === 'shop' ? 0.9 : 0.8,
  }));
  return [...pages, ...articles.map(article => ({ url: `${base}/blog/${article.slug}`, lastModified: new Date(`${article.date}T00:00:00+09:00`), changeFrequency: 'monthly' as const, priority: 0.8 }))];
}
