/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- Scrollable comparison tables must be keyboard accessible. */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '../../breadcrumbs';
import { siteUrl } from '../../seo';
import { ArticleLayout } from '../article-layout';
import { articles, type ArticleImage } from '../articles';
import styles from '../article.module.css';

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const url = `${siteUrl}/blog/${slug}`;
  return {
    title: article.title, description: article.description, keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, type: 'article', url, siteName: '하린문화예술', locale: 'ko_KR', publishedTime: `${article.date}T00:00:00+09:00`, images: [{ url: article.thumbnail.src, width: 1440, height: 960, alt: article.thumbnail.alt }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.thumbnail.src] },
  };
}
function Photo({ image, priority = false }: { image: ArticleImage; priority?: boolean }) {
  return <figure className={styles.figure}><Image src={image.src} width={1440} height={960} alt={image.alt} sizes="(max-width: 860px) calc(100vw - 40px), 820px" priority={priority}/><figcaption>{image.caption}<span className={styles.disclosure}>AI로 제작한 이해를 돕기 위한 이미지</span></figcaption></figure>;
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const url = `${siteUrl}/blog/${slug}`;
  const structuredData = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${url}#article`, headline: article.title, description: article.description, mainEntityOfPage: url, url, inLanguage: 'ko-KR', articleSection: article.category, keywords: article.keywords.join(', '), datePublished: `${article.date}T00:00:00+09:00`, dateModified: `${article.date}T00:00:00+09:00`, image: [new URL(article.thumbnail.src, siteUrl).href], author: { '@type': 'Organization', name: '하린문화예술', url: siteUrl }, publisher: { '@id': `${siteUrl}/#organization` } };
  return <ArticleLayout><article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/>
    <Breadcrumbs items={[{ name: '블로그', path: '/blog' }, { name: article.title, path: `/blog/${slug}` }]}/>
    <header className={styles.header}><p className={styles.category}>{article.category} · 입문 가이드</p><h1>{article.title}</h1><p className={styles.meta}>하린문화예술 · <time dateTime={article.date}>{article.date.replaceAll('-', '.')}</time></p></header>
    {article.intro.map(text => <p key={text}>{text}</p>)}
    <Photo image={article.thumbnail} priority/>
    <section className={styles.summary}><h2 id="at-a-glance">핵심 요약</h2><ul>{article.summary.map(text => <li key={text}>{text}</li>)}</ul></section>
    {article.sections.map(section => <section key={section.id}><h2 id={section.id}>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}{section.table && <section className={styles.tableWrap} aria-label={`${section.table.caption} (가로 스크롤 가능)`} tabIndex={0}><table><caption>{section.table.caption}</caption><thead><tr>{section.table.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></section>}{section.image && <Photo image={section.image}/>}</section>)}
    <section><h2 id="closing">마무리하며</h2><p>{article.closing}</p></section>
    <section className={styles.cta}><h2 id="classes-and-contact">관련 수업·문의 안내</h2><p>{article.cta}</p><div className={styles.links}>{article.links.map(link => <Link href={link.href} key={link.href}>{link.label} →</Link>)}</div></section>
    <details className={styles.sources}><summary>참고한 안내와 자료</summary><p>운영 정보는 홈페이지 안내를 기준으로 작성했습니다. 개별 수업의 개설 여부와 조건은 문의 시 확인해주세요.</p><ul>{article.sources.map(source => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}</ul></details>
    <Link href="/blog" className={styles.back}>← 블로그 목록으로</Link>
  </article></ArticleLayout>;
}
