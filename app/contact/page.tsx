import type { Metadata } from 'next';
import { products } from '../shop/data';
import { ContactForm } from './contact-form';
import './contact.css';

export const metadata: Metadata = {
  title: '문의·예약',
  description: '하린문화예술 공예 클래스, 기관 출강, 감성예술, AI 활용교육, 작품 구매 및 주문제작 문의.',
};

const typeMap: Record<string, string> = {
  class: '수강·체험 문의',
  group: '출강·단체수업',
  ai: 'AI 활용교육',
  healing: '타로·감성예술',
  product: '작품 구매',
  custom: '주문제작',
  collaboration: '협업 문의',
  other: '기타',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; product?: string }>;
}) {
  const query = await searchParams;
  const product = products.find((item) => item.slug === query.product);

  return <>
    <section className="page-hero contact-hero">
      <p className="eyebrow">CONTACT & RESERVATION</p>
      <h1>언제든지,<br/>편하게 문의해주세요.</h1>
      <p className="lead">수강 신청, 체험, 기관 출강, 작품 구매,<br className="mobile-break"/> 강의 및 협업에 관한 문의를 편하게 남겨주세요.</p>
    </section>
    <ContactForm
      initialType={typeMap[query.type ?? ''] ?? '수강·체험 문의'}
      initialInterest={product ? `${product.category} · ${product.name} (${product.slug})` : ''}
    />
  </>;
}
