import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GalleryCollection } from './gallery-collection';

export const metadata={title:'갤러리',description:'하린문화예술의 공예 작품, 수업 현장, 출강, 캘리그라피와 어반스케치 활동 기록'};

export default function Page(){return <>
  <section className="page-hero"><p className="eyebrow">GALLERY</p><h1>손끝에서 피어난<br/>우리의 순간들</h1><p className="lead">작품과 수업, 출강과 전시의 기록을 실제 자료가 준비되는 순서대로 모아갑니다.</p></section>
  <section className="page-content">
    <div className="content-heading"><p className="eyebrow">HARIN MOMENTS</p><h2>분야별 기록</h2><p>카테고리를 눌러 보고 싶은 활동을 골라볼 수 있습니다.</p></div>
    <GalleryCollection/>
    <div className="page-cta"><div><h3>이런 프로그램을 우리 기관에서도 진행하고 싶으신가요?</h3><p>관심 분야와 대상, 인원, 일정을 알려주시면 출강 프로그램 상담으로 연결됩니다.</p></div><Link href="/contact?type=group" className="button">출강 문의 <ArrowRight size={16}/></Link></div>
  </section>
</>}
