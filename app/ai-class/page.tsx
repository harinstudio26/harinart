import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './ai-class.module.css';

export const metadata={title:'AI 활용 교육'};

const programs=[
  {no:'01',title:'AI 이미지 만들기',text:'필요한 이미지를 직접 만들고 수정합니다.',image:'/images/hero.png',alt:'AI 이미지 제작을 연상시키는 하린문화예술 비주얼'},
  {no:'02',title:'작품 홍보 이미지',text:'작품이 돋보이는 홍보 이미지를 만듭니다.',image:'/images/real/enamel-02.webp',alt:'하린문화예술 칠보공예 작품'},
  {no:'03',title:'블로그 글 작성',text:'내 브랜드에 맞는 글을 쉽고 빠르게 정리합니다.',image:'/images/real/urban-01.webp',alt:'하린문화예술 어반스케치 작품'},
  {no:'04',title:'SNS · 릴스 콘텐츠',text:'짧고 눈에 들어오는 콘텐츠를 기획합니다.',image:'/images/real/knot-03.webp',alt:'하린문화예술 전통매듭 작품'},
  {no:'05',title:'상세페이지',text:'고객이 이해하기 쉬운 판매 흐름을 만듭니다.',image:'/images/real/enamel-02.webp',alt:'하린문화예술 칠보공예 작품 상세'},
  {no:'06',title:'강의자료',text:'수업안과 발표자료를 효율적으로 준비합니다.',image:'/images/real/urban-01.webp',alt:'강의자료에 활용할 수 있는 어반스케치 작품'},
  {no:'07',title:'AI 마케팅 활용',text:'홍보 메시지와 콘텐츠 계획을 세웁니다.',image:'/images/hero.png',alt:'하린문화예술 브랜드 홍보 비주얼'},
  {no:'08',title:'라이브 방송 활용',text:'방송 주제와 진행 흐름을 미리 준비합니다.',image:'/images/real/knot-03.webp',alt:'라이브 방송에 소개할 수 있는 전통매듭 작품'},
];

const details=[
  {title:'보이는 콘텐츠',text:'작품 홍보 이미지, 포스터, 카드뉴스와 상세페이지에 필요한 비주얼을 직접 만듭니다.'},
  {title:'읽히는 콘텐츠',text:'블로그, SNS, 소개문구처럼 채널과 고객에 맞는 글을 기획하고 다듬습니다.'},
  {title:'반복해서 쓰는 업무',text:'강의자료, 수업안, 라이브 방송 구성처럼 자주 반복되는 작업을 더 효율적으로 준비합니다.'},
];

export default function Page(){return <>
  <section className="page-hero">
    <p className="eyebrow">AI PRACTICAL CLASS</p>
    <h1>전통과 기술이 만나는<br/>새로운 가능성</h1>
    <p className="lead">기술을 자랑하기보다 배워서 바로 내 일에 사용하는 AI 교육을 지향합니다.</p>
  </section>

  <section className="page-summary" aria-label="프로그램 요약">
    <div><span>대상</span><b>공방 · 소상공인 · 강사 · 창작자</b></div>
    <div><span>방식</span><b>실습 중심 · 현업 적용</b></div>
    <div><span>결과</span><b>이미지 · 글 · 홍보 · 강의자료</b></div>
  </section>

  <section className="page-content">
    <div className="content-heading">
      <p className="eyebrow">PROGRAM GUIDE</p>
      <h2>프로그램 안내</h2>
      <p>글 설명은 줄이고, 어떤 작업을 배우는지 이미지와 핵심 문장으로 빠르게 볼 수 있게 구성했습니다.</p>
    </div>

    <div className={styles.programGrid}>
      {programs.map(program=><article className={styles.programCard} key={program.no}>
        <div className={styles.imageWrap}><img src={program.image} alt={program.alt}/><span>{program.no}</span></div>
        <div className={styles.cardCopy}><h3>{program.title}</h3><p>{program.text}</p></div>
      </article>)}
    </div>

    <section className="guide-panel">
      <div className="guide-copy"><p className="eyebrow">DETAIL GUIDE</p><h2>배우고 끝나지 않도록, 실제 작업까지</h2><p>하나의 기능을 많이 아는 것보다 내 사업과 수업에 필요한 결과물을 직접 만드는 데 초점을 둡니다.</p></div>
      <div className="guide-list">{details.map(item=><article key={item.title}><CheckCircle2 size={19}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
    </section>

    <div className="page-cta"><div><h3>내 일에 바로 쓰는 AI 활용을 시작해보세요.</h3><p>현재 하시는 일과 만들고 싶은 결과물을 알려주시면 필요한 방향을 함께 정리합니다.</p></div><Link href="/contact?type=ai" className="button">문의하기 <ArrowRight size={16}/></Link></div>
  </section>
</>}
