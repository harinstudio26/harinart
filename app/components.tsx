import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Item = { name: string; description: string };
type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  audience?: string;
  format?: string;
  ctaType?: string;
  ctaTitle?: string;
};

export const pageData: Record<string, PageData> = {
  about: { eyebrow: 'ABOUT HARIN', title: '예술과 사람이 만나\n배움이 이어지는 곳', intro: '전통의 아름다움과 오늘의 감각, 사람과 배움이 자연스럽게 이어지는 문화예술 플랫폼입니다.', ctaTitle:'하린문화예술과 함께할 프로그램이 궁금하신가요?', items: [
    {name:'하린문화예술 소개',description:'전통공예와 생활예술, 교육을 통해 사람과 일상을 잇는 문화예술 브랜드입니다.'},
    {name:'브랜드 스토리',description:'손으로 만드는 가치와 따뜻한 배움, 일상 속 예술 경험을 한곳에 연결합니다.'},
    {name:'대표 소개',description:'[대표 경력 입력 예정]\n[강의 경력 입력 예정]\n[자격사항 입력 예정]'},
    {name:'활동 분야',description:'전통매듭·칠보·액세서리, 타로·캘리그라피·어반스케치, 기관 출강과 AI 활용교육을 폭넓게 연결합니다.'},
    {name:'운영 철학',description:'완성도만큼 만드는 과정의 기쁨을 소중히 여기며, 처음 시작하는 분도 편안하게 참여할 수 있도록 돕습니다.'},
    {name:'교육 방향',description:'참여자의 속도와 목적을 존중하고, 배운 내용을 일상과 현장에서 활용할 수 있는 실용적인 수업을 지향합니다.'},
  ]},
  craft: { eyebrow: 'CRAFT CLASS', title: '손으로 배우는 특별한 시간,\n공예 클래스', intro: '재료를 만지고 천천히 완성하는 과정 속에서 나만의 감각과 손의 즐거움을 발견합니다.', audience:'입문자 · 취미 · 체험 · 정규수강', format:'원데이 · 정규 · 맞춤 수업', ctaType:'class', ctaTitle:'어떤 공예부터 시작할지 고민되시나요?', items: [
    {name:'전통매듭',description:'전통 매듭 기법을 익히며 노리개, 장식소품, 생활소품으로 응용하는 공예 프로그램입니다.'},
    {name:'칠보공예',description:'금속 위에 유약을 올리고 소성하여 빛과 색이 살아 있는 작품을 만드는 공예 프로그램입니다.'},
    {name:'액세서리 수공예',description:'다양한 소재와 부자재를 활용해 나만의 액세서리를 완성하는 생활공예 프로그램입니다.'},
    {name:'원데이 클래스',description:'짧은 시간 안에 한 작품을 완성하며 공예의 즐거움을 가볍게 경험하는 수업입니다.'},
    {name:'정규 강의',description:'기초부터 응용까지 단계적으로 배우며 자신만의 표현과 완성도를 높이는 과정입니다.'},
  ]},
  group: { eyebrow: 'GROUP CLASS', title: '예술이 찾아가는\n더 넓은 시간', intro: '기관의 대상과 목적, 인원과 시간에 맞춰 가장 알맞은 문화예술 경험을 제안합니다.', audience:'학교 · 복지기관 · 기업 · 단체', format:'대상 · 인원 · 예산 맞춤 구성', ctaType:'group', ctaTitle:'기관 목적에 맞는 프로그램을 함께 구성해보세요.', items: [
    {name:'복지기관',description:'참여자의 신체적·정서적 특성을 고려한 편안한 공예와 감성예술 활동을 제안합니다.'},
    {name:'학교',description:'연령과 교육 목표에 맞춰 창의성과 집중력을 키우는 체험형 예술 수업을 운영합니다.'},
    {name:'기업',description:'구성원의 휴식과 소통을 돕는 워크숍형 문화예술 프로그램으로 구성합니다.'},
    {name:'지역단체',description:'지역 구성원이 함께 만들고 교류할 수 있는 참여형 예술 프로그램을 운영합니다.'},
    {name:'평생학습기관',description:'배움의 지속성과 성취를 고려한 단계별 생활예술 교육을 제안합니다.'},
    {name:'문화센터',description:'다양한 연령이 일상 가까이에서 즐길 수 있는 정기·특강 프로그램을 구성합니다.'},
  ]},
  healing: { eyebrow: 'HEALING ART', title: '예술로 마음을 돌보는\n감성의 시간', intro: '차분한 예술 활동과 자기이해의 시간을 통해 일상에 작은 쉼과 새로운 시선을 더합니다.', audience:'개인 · 소그룹 · 기관 프로그램', format:'체험 · 정규 · 맞춤 진행', ctaType:'healing', ctaTitle:'나에게 맞는 감성예술 프로그램을 찾아보세요.', items: [
    {name:'타로 리딩 · 타로 교육',description:'카드의 이미지와 상징을 통해 자신의 마음을 차분히 바라보고, 그림과 이야기로 의미를 풀어가는 시간입니다.'},
    {name:'캘리그라피',description:'좋아하는 문장을 손글씨로 표현하며 호흡과 마음을 가다듬는 생활예술 프로그램입니다.'},
    {name:'어반스케치',description:'카페, 거리, 건물과 여행지 등 일상의 풍경을 나만의 선과 색으로 기록하는 생활예술입니다.'},
    {name:'감성 · 힐링 프로그램',description:'색과 선, 손의 움직임을 통해 감정을 표현하고 편안한 쉼을 경험하는 예술 활동입니다.'},
  ]},
  ai: { eyebrow: 'AI PRACTICAL CLASS', title: '전통과 기술이 만나는\n새로운 가능성', intro: '기술을 자랑하기보다 배워서 바로 내 일에 사용하는 AI 교육을 지향합니다.', audience:'공방 · 소상공인 · 강사 · 창작자', format:'실습 중심 · 현업 적용', ctaType:'ai', ctaTitle:'내 일에 바로 쓰는 AI 활용을 시작해보세요.', items: [
    {name:'AI 이미지 만들기',description:'공방 운영자, 강사, 소상공인이 필요한 이미지를 직접 만들고 수정하는 실전 교육입니다.'},
    {name:'작품 홍보 이미지',description:'작품의 매력을 살린 포스터, 카드뉴스와 홍보 비주얼을 쉽고 빠르게 제작합니다.'},
    {name:'블로그 글 작성',description:'내 브랜드의 말투와 정보를 담은 읽기 좋은 블로그 콘텐츠를 만드는 방법을 익힙니다.'},
    {name:'SNS · 릴스 콘텐츠',description:'게시물과 짧은 영상에 활용할 문구, 구성, 아이디어를 실습 중심으로 다룹니다.'},
    {name:'상세페이지',description:'상품과 프로그램의 장점을 고객의 질문 순서에 맞춰 설득력 있게 보여주는 구조를 배웁니다.'},
    {name:'강의자료',description:'수업안, 활동지와 발표자료를 AI로 효율적으로 기획하고 다듬는 방법을 익힙니다.'},
    {name:'AI 마케팅 활용',description:'고객과 채널에 맞는 홍보 메시지와 콘텐츠 계획을 실무 중심으로 세웁니다.'},
    {name:'라이브 방송 활용',description:'방송 주제, 진행 구성과 소개 문구를 AI와 함께 준비하고 반복 활용하는 방법을 익힙니다.'},
  ]},
};

export function StandardPage({ data }: { data: PageData }) {
  const isAbout = data.eyebrow === 'ABOUT HARIN';
  const href = data.ctaType ? `/contact?type=${data.ctaType}` : '/contact';
  return <>
    <section className="page-hero"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title.split('\n').map((line, i) => <span key={line}>{line}{i === 0 && <br/>}</span>)}</h1><p className="lead">{data.intro}</p></section>
    <section className="page-content">
      <div className={`program-grid ${isAbout ? 'about-grid' : ''}`}>{data.items.map((item, i) => <article className="program" key={item.name}><span className="eyebrow">0{i + 1}</span><h3>{item.name}</h3><p>{item.description.split('\n').map(x => <span key={x}>{x}<br/></span>)}</p>{!isAbout && <div className="program-meta"><b>추천 대상</b><span>{data.audience}</span><b>진행 방식</b><span>{data.format}</span></div>}</article>)}</div>
      {data.eyebrow === 'GROUP CLASS' && <div className="process"><h2>수업은 이렇게 진행됩니다</h2><p>문의 접수 → 대상·인원 확인 → 프로그램 제안 → 일정 조정 → 수업 진행</p></div>}
      <div className="page-cta"><div><h3>{data.ctaTitle ?? '프로그램이 궁금하신가요?'}</h3><p>일정, 대상, 인원과 원하는 방향을 남겨주시면 알맞은 방법을 함께 찾겠습니다.</p></div><Link href={href} className="button">문의하기 <ArrowRight size={16}/></Link></div>
    </section>
  </>;
}
