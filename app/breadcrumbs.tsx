import Link from 'next/link';
import { siteUrl } from './seo';
import styles from './breadcrumbs.module.css';
type Crumb = { name: string; path: string };
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: '홈', path: '/' }, ...items];
  const data = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: new URL(item.path, siteUrl).toString() })) };
  return <>
    <nav className={styles.breadcrumbs} aria-label="현재 위치"><ol>{crumbs.map((item, index) => <li key={item.path}>{index > 0 && <span aria-hidden="true">/</span>}{index === crumbs.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}</li>)}</ol></nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}/>
  </>;
}
