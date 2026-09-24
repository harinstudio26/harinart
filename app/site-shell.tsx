'use client';
// restore-build-marker

import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const nav = [
  {label:'소개', href:'/about', items:['하린문화예술 소개','브랜드 스토리','대표 소개','활동 분야','운영 철학','교육 방향']},
  {label:'공예클래스', href:'/craft', items:['전통매듭','칠보공예','액세서리 수공예','원데이 클래스','정규 강의']},
  {label:'출강·단체수업', href:'/group-class', items:['복지기관','학교','기업','지역단체','평생학습기관','문화센터']},
  {label:'감성예술', href:'/healing-art', items:['타로 리딩 · 타로 교육','캘리그라피','어반스케치','감성 · 힐링 프로그램']},
  {label:'AI활용교육', href:'/ai-class', items:['AI 이미지 만들기','작품 홍보 이미지','블로그 글 작성','SNS · 릴스 콘텐츠','상세페이지','강의자료','AI 마케팅 활용','라이브 방송 활용']},
  {label:'작품샵', href:'https://smartstore.naver.com/yjgongbang'},
  {label:'갤러리', href:'/gallery'}, {label:'블로그', href:'/blog'}, {label:'문의·예약', href:'/contact'},
];

function HeaderNav({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const prefix = mobile ? 'mobile' : 'desktop';
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setExpanded(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !navRef.current?.contains(document.activeElement)) return;
      const trigger = navRef.current.querySelector<HTMLButtonElement>('button[aria-expanded="true"]');
      if (trigger) { trigger.focus(); setExpanded(null); }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, []);
  const navigate = () => { setExpanded(null); onNavigate(); };
  return <nav ref={navRef} className={mobile ? 'mobile-nav' : 'desktop-nav'} aria-label={mobile ? '모바일 메뉴' : '주요 메뉴'}>
    {nav.map(({label, href, items}) => {
      const active = pathname === href || pathname.startsWith(`${href}/`);
      const external = href.startsWith('https://');
      const id = `${prefix}-${href.slice(1)}`;
      return items ? <div className="nav-group" key={href} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setExpanded(current => current === href ? null : current);
      }}>
        <button type="button" className={`nav-trigger${active ? ' active' : ''}`} aria-expanded={expanded === href} aria-controls={id}
          onClick={() => setExpanded(expanded === href ? null : href)}>{label}<ChevronDown size={14} aria-hidden="true"/></button>
        <div id={id} className="nav-submenu" hidden={expanded !== href}>
          <Link href={href} onClick={navigate} className="nav-overview">{label} 전체보기</Link>
          {items.map((item, i) => <Link key={item} href={`${href}#program-${i + 1}`} onClick={navigate}>{item}</Link>)}
        </div>
      </div> : <Link key={href} href={href} onClick={navigate} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}
        target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
        aria-label={external ? label+' · 네이버 스마트스토어 (새 창)' : undefined}>{label}</Link>;
    })}
  </nav>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return <>
    <a className="skip-link" href="#main-content">본문 바로가기</a>
    <header className="header">
      <div className="nav">
        <Link href="/" className="logo" aria-label="하린문화예술 홈">
          <b>하린문화예술</b><small>HARIN CULTURE & ARTS</small>
        </Link>
        <HeaderNav onNavigate={() => setOpen(false)}/>
        <div className="nav-actions">
          <Link href="/contact" className="nav-cta">문의하기</Link>
          <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && <HeaderNav mobile onNavigate={() => setOpen(false)}/>}
    </header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer>
      <div className="footer-grid">
        <div className="footer-brand"><div className="logo"><b>하린문화예술</b><small>HARIN CULTURE & ARTS</small></div><p>손끝의 예술, 마음에 닿는 시간.<br/>배움과 창작이 일상으로 이어지는 문화예술을 만듭니다.</p></div>
        <div className="footer-links"><b>PROGRAM</b><Link href="/craft">공예클래스</Link><Link href="/group-class">출강·단체수업</Link><Link href="/healing-art">감성예술</Link><Link href="/ai-class">AI 활용교육</Link></div>
        <div className="footer-links"><b>EXPLORE</b><a href="https://smartstore.naver.com/yjgongbang" target="_blank" rel="noopener noreferrer" aria-label="작품샵 · 네이버 스마트스토어 (새 창)">작품샵</a><Link href="/gallery">갤러리</Link><Link href="/blog">블로그</Link><Link href="/contact">문의·예약</Link></div>
      </div>
      <div className="footer-bottom"><small>© 2026 HARIN CULTURE & ARTS. All rights reserved.</small><Link href="/contact">프로그램·작품 문의</Link></div>
    </footer>
  </>;
}
