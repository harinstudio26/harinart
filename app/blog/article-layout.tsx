'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import styles from './article-layout.module.css';

type Heading = { id: string; text: string };

export function ArticleLayout({ children }: { children: ReactNode }) {
  const content = useRef<HTMLDivElement>(null);
  const mobile = useRef<HTMLDetailsElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const nodes = Array.from(content.current?.querySelectorAll<HTMLHeadingElement>('h2') ?? []);
    const used = new Set<string>();
    const items = nodes.map((node, index) => {
      const base = node.id || `section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (used.has(id)) id = `${base}-${suffix++}`;
      node.id = id;
      node.tabIndex = -1;
      used.add(id);
      return { id, text: node.textContent ?? '' };
    });
    setHeadings(items);
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerHeight = document.querySelector('header.header')?.getBoundingClientRect().height ?? 84;
      let current = nodes[0]?.id ?? '';
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= headerHeight + 48) current = node.id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    let hashId = window.location.hash.slice(1);
    try { hashId = decodeURIComponent(hashId); } catch { /* Ignore malformed URL fragments. */ }
    const hashTarget = nodes.find(node => node.id === hashId);
    if (hashTarget) hashTarget.scrollIntoView();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [children]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (mobile.current) mobile.current.open = false;
    const target = document.getElementById(id);
    history.pushState(null, '', `#${id}`);
    requestAnimationFrame(() => {
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      setActive(id);
    });
  };
  const links = <ol>{headings.map(heading => <li key={heading.id}><a href={`#${heading.id}`} aria-current={active === heading.id ? 'location' : undefined} onClick={event => navigate(event, heading.id)}>{heading.text}</a></li>)}</ol>;

  return <div className={styles.layout}>
    <aside className={styles.sidebar} aria-label="글 목차"><nav className={styles.sticky} aria-label="본문 목차"><p className={styles.label}>이 글의 목차</p>{links}<Link className={styles.listLink} href="/blog">← 블로그 목록</Link></nav></aside>
    <details className={styles.mobile} ref={mobile}><summary>이 글의 목차 <span>펼치기·접기</span></summary><nav aria-label="모바일 본문 목차">{links}</nav></details>
    <div className={styles.content} ref={content}>{children}</div>
  </div>;
}
