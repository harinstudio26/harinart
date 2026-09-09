'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  ['소개', '/about'], ['공예클래스', '/craft'], ['출강·단체수업', '/group-class'],
  ['감성예술', '/healing-art'], ['AI활용교육', '/ai-class'], ['작품샵', '/shop'],
  ['갤러리', '/gallery'], ['블로그', '/blog'], ['문의·예약', '/contact'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return <>
    <a className="skip-link" href="#main-content">본문 바로가기</a>
    <header className="header">
      <div className="nav">
        <Link href="/" className="logo" aria-label="하린문화예술 홈">
          <b>하린문화예술</b><small>HARIN CULTURE & ARTS</small>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <Link href={href} className={isActive(href) ? 'active' : ''} aria-current={isActive(href) ? 'page' : undefined} key={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="nav-cta">문의하기</Link>
          <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="모바일 메뉴">{nav.map(([label, href]) => <Link href={href} className={isActive(href) ? 'active' : ''} aria-current={isActive(href) ? 'page' : undefined} onClick={() => setOpen(false)} key={href}>{label}</Link>)}</nav>}
    </header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer>
      <div className="footer-grid">
        <div className="footer-brand"><div className="logo"><b>하린문화예술</b><small>HARIN CULTURE & ARTS</small></div><p>손끝의 예술, 마음에 닿는 시간.<br/>배움과 창작이 일상으로 이어지는 문화예술을 만듭니다.</p></div>
        <div className="footer-links"><b>PROGRAM</b><Link href="/craft">공예클래스</Link><Link href="/group-class">출강·단체수업</Link><Link href="/healing-art">감성예술</Link><Link href="/ai-class">AI 활용교육</Link></div>
        <div className="footer-links"><b>EXPLORE</b><Link href="/shop">작품샵</Link><Link href="/gallery">갤러리</Link><Link href="/blog">블로그</Link><Link href="/contact">문의·예약</Link></div>
      </div>
      <div className="footer-bottom"><small>© 2026 HARIN CULTURE & ARTS. All rights reserved.</small><Link href="/contact">프로그램·작품 문의</Link></div>
    </footer>
  </>;
}
