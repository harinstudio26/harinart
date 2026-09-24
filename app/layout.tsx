import type { Metadata } from 'next';
import './globals.css';
import './shop.css';
import './real-photos.css';
import { SiteShell } from './site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://harinart.vercel.app'),

  title: {
    default: '하린문화예술 | 직관과 기술을 잇다',
    template: '%s | 하린문화예술',
  },

  description:
    '타로, 수공예, AI 창작과 콘텐츠 브랜딩을 연결하는 하린문화예술입니다.',

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    title: '하린문화예술 | 직관과 기술을 잇다',
    description: '타로 · 수공예 · AI 창작 · 콘텐츠 브랜딩',
    url: 'https://harinart.vercel.app',
    siteName: '하린문화예술',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '하린문화예술 | 직관과 기술을 잇다',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: '하린문화예술 | 직관과 기술을 잇다',
    description: '타로 · 수공예 · AI 창작 · 콘텐츠 브랜딩',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://harinart.vercel.app/#organization', name: '하린문화예술', alternateName: 'HARIN CULTURE & ARTS', url: 'https://harinart.vercel.app', description: '전통공예, 감성예술, 문화예술교육과 AI 활용교육을 연결하는 문화예술 브랜드', sameAs: ['https://smartstore.naver.com/yjgongbang'] },
    { '@type': 'WebSite', '@id': 'https://harinart.vercel.app/#website', url: 'https://harinart.vercel.app', name: '하린문화예술', inLanguage: 'ko-KR', publisher: { '@id': 'https://harinart.vercel.app/#organization' } },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/><SiteShell>{children}</SiteShell></body></html>}
