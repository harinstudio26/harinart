import type { Metadata } from 'next';
import './globals.css';
import './shop.css';
import './real-photos.css';
import { SiteShell } from './site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://harinart.vercel.app'),
  title: { default: '하린문화예술 | 공예·예술·교육·AI 활용', template: '%s | 하린문화예술' },
  description: '전통매듭, 칠보, 액세서리, 타로, 캘리그라피, 어반스케치, 작품 판매와 AI 활용 교육을 잇는 따뜻한 문화예술 플랫폼',
  openGraph: {
    title: '하린문화예술',
    description: '손끝의 예술, 마음에 닿는 시간',
    url: 'https://harinart.vercel.app',
    siteName: '하린문화예술',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: '하린문화예술 - 손끝의 예술, 마음에 닿는 시간' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '하린문화예술',
    description: '손끝의 예술, 마음에 닿는 시간',
    images: ['/opengraph-image.png'],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://harinart.vercel.app/#organization', name: '하린문화예술', alternateName: 'HARIN CULTURE & ARTS', url: 'https://harinart.vercel.app', description: '전통공예, 감성예술, 문화예술교육과 AI 활용교육을 연결하는 문화예술 브랜드', sameAs: ['https://smartstore.naver.com/yjgongbang'] },
    { '@type': 'WebSite', '@id': 'https://harinart.vercel.app/#website', url: 'https://harinart.vercel.app', name: '하린문화예술', inLanguage: 'ko-KR', publisher: { '@id': 'https://harinart.vercel.app/#organization' } },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/><SiteShell>{children}</SiteShell></body></html>}
