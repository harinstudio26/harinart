import type { Metadata } from 'next';
export const siteUrl = 'https://harinart.vercel.app';
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteUrl).toString();
  return { title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: '하린문화예술', locale: 'ko_KR', type: 'website', images: [{ url: '/opengraph-image.png', alt: '하린문화예술' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image.png'] },
  };
}
