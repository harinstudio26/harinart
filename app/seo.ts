import type { Metadata } from 'next';

export const siteUrl = 'https://harinart.vercel.app';

export function pageMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: '하린문화예술',
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: '하린문화예술 | 직관과 기술을 잇다',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}
