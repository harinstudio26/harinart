import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogList } from './blog-list';

export const metadata={title:'블로그 · 소식',description:'하린문화예술의 수업 후기, 공예 이야기, 강의 소식과 AI 활용 기록'};

export default function Page(){return <>
  <section className="page-hero"><p className="eyebrow">HARIN JOURNAL</p><h1>예술과 일상이<br/>만나는 이야기</h1><p className="lead">수업과 작품, 배움과 창작의 기록을 확인된 내용부터 차곡차곡 전합니다.</p></section>
  <section className="page-content">
    <div className="content-heading"><p className="eyebrow">JOURNAL CATEGORIES</p><h2>하린문화예술의 기록</h2><p>실제 수업과 작품, 활동 내용을 기준으로 카테고리별 콘텐츠를 순차적으로 채워갑니다.</p></div>
    <BlogList/>
    <div className="page-cta"><div><h3>수업과 프로그램이 궁금하신가요?</h3><p>블로그에서 소개할 내용을 기다리기보다 지금 필요한 프로그램을 바로 문의할 수 있습니다.</p></div><Link href="/contact" className="button">문의·예약 <ArrowRight size={16}/></Link></div>
  </section>
</>}
