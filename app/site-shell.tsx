'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const nav = [
  ['소개', '/about'], ['공예클래스', '/craft'], ['출강·단체수업', '/group-class'],
  ['감성예술', '/healing-art'], ['AI활용교육', '/ai-class'], ['작품샵', '/shop'],
  ['갤러리', '/gallery'], ['블로그', '/blog'], ['문의·예약', '/contact'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="header"><div className="nav">
      <Link href="/" className="logo" aria-label="하린문화예술 홈"><b>하린문화예술</b><small>HARIN CULTURE & ARTS</small></Link>
      <nav className="desktop-nav" aria-label="주요 메뉴">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <div className="nav-actions"><Link href="/contact" className="nav-cta">문의하기</Link><button className="menu" onClick={() => setOpen(!open)} aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button></div>
    </div>{open && <nav className="mobile-nav" aria-label="모바일 메뉴">{nav.map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}</nav>}</header>
    <main>{children}</main>
    <footer><div className="footer-grid"><div className="logo"><b>하린문화예술</b><small>HARIN CULTURE & ARTS</small></div><p>손끝의 예술, 마음에 닿는 시간<br/>전통과 오늘의 감각을 잇고, 예술이 있는 더 따뜻한 일상을 만들어갑니다.</p><div><Link href="/about">소개</Link><Link href="/craft">공예클래스</Link><Link href="/shop">작품샵</Link><Link href="/contact">문의·예약</Link></div></div><small>© 2026 HARIN CULTURE & ARTS. All rights reserved.</small></footer>
  </>;
}
