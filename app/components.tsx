import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type Item = { name: string; description: string };
type GuideItem = { title: string; text: string };
type SummaryItem = { label: string; value: string };
type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  summary?: SummaryItem[];
  ctaType?: string;
  ctaTitle?: string;
  guideTitle?: string;
  guideIntro?: string;
  guideItems?: GuideItem[];
};

export const pageData: Record<string, PageData> = {
  about: {
    eyebrow: 'ABOUT HARIN',
    title: '예술과 사람이 만나\n배움이 이어지는 곳',
    intro: '전통의 아름다움과 오늘의 감각, 사람과 배움이 자연스럽게 이어지는 문화예술 플랫폼입니다.',
    summary:[
      {label:'분야',value:'전통공예 · 감성예술 · AI 활용'},
      {label:'방식',value:'체험 · 정규 · 기관 출강'},
      {label:'방향',value:'배움 · 창작 · 실생활 활용'},
    ],
    ctaTitle:'하린문화예술과 함께할 프로그램이 궁금하신가요?',
    guideTitle:'하린문화예술이 중요하게 생각하는 것',
    guideIntro:'기술과 결과만 남는 수업보다 과정에서 느끼는 즐거움과 배운 뒤의 활용까지 함께 생각합니다.',
    guideItems:[
      {title:'처음 시작해도 편안하게',text:'익숙하지 않은 분야도 단계적으로 이해하고 직접 해볼 수 있도록 구성합니다.'},
      {title:'손으로 배우고 경험하기',text:'설명만 듣기보다 직접 만들고 그리고 말해보는 과정을 중요하게 생각합니다.'},
      {title:'배움이 일상으로 이어지게',text:'취미와 창작, 기관 프로그램과 홍보까지 배운 내용을 실제 생활과 현장에 연결합니다.'},
    ],
    items: [
      {name:'하린문화예술 소개',description:'전통공예와 생활예술, 교육을 통해 사람과 일상을 잇는 문화예술 브랜드입니다.'},
      {name:'브랜드 스토리',description:'손으로 만드는 가치와 따뜻한 배움, 일상 속 예술 경험을 한곳에 연결합니다.'},
      {name:'대표 소개',description:'대표 경력, 강의 이력과 자격사항은 확인된 내용을 기준으로 순차적으로 정리합니다.'},
      {name:'활동 분야',description:'전통매듭·칠보·액세서리, 타로·캘리그라피·어반스케치, 기관 출강과 AI 활용교육을 폭넓게 연결합니다.'},
      {name:'운영 철학',description:'완성도만큼 만드는 과정의 기쁨을 소중히 여기며, 처음 시작하는 분도 편안하게 참여할 수 있도록 돕습니다.'},
      {name:'교육 방향',description:'참여자의 속도와 목적을 존중하고, 배운 내용을 일상과 현장에서 활용할 수 있는 실용적인 수업을 지향합니다.'},
    ],
  },
  craft: {
    eyebrow: 'CRAFT CLASS',
    title: '손으로 배우는 특별한 시간,\n공예 클래스',
    intro: '재료를 만지고 천천히 완성하는 과정 속에서 나만의 감각과 손의 즐거움을 발견합니다.',
    summary:[
      {label:'추천',value:'입문 · 취미 · 체험 · 꾸준한 배움'},
      {label:'방식',value:'원데이 · 정규 · 맞춤 수업'},
      {label:'분야',value:'전통매듭 · 칠보 · 액세서리'},
    ],
    ctaType:'class',
    ctaTitle:'어떤 공예부터 시작할지 고민되시나요?',
    guideTitle:'내게 맞는 방식으로 배워보세요',
    guideIntro:'처음 가볍게 체험하고 싶은지, 기초부터 차근차근 배우고 싶은지에 따라 수업 방향을 선택할 수 있습니다.',
    guideItems:[
      {title:'원데이 클래스',text:'한 작품을 완성하며 재료와 기법을 가볍게 경험하고 싶은 분께 어울립니다.'},
      {title:'정규 강의',text:'기초부터 응용까지 순서대로 배우며 표현과 완성도를 높이고 싶은 분께 적합합니다.'},
      {title:'기관·단체 수업',text:'참여자의 연령, 인원, 시간과 목적을 확인해 알맞은 난이도와 작품으로 조정합니다.'},
    ],
    items: [
      {name:'전통매듭',description:'전통 매듭 기법을 익히며 노리개, 장식소품, 생활소품으로 응용하는 공예 프로그램입니다.'},
      {name:'칠보공예',description:'금속 위에 유약을 올리고 소성하여 빛과 색이 살아 있는 작품을 만드는 공예 프로그램입니다.'},
      {name:'액세서리 수공예',description:'다양한 소재와 부자재를 활용해 나만의 액세서리를 완성하는 생활공예 프로그램입니다.'},
      {name:'원데이 클래스',description:'짧은 시간 안에 한 작품을 완성하며 공예의 즐거움을 가볍게 경험하는 수업입니다.'},
      {name:'정규 강의',description:'기초부터 응용까지 단계적으로 배우며 자신만의 표현과 완성도를 높이는 과정입니다.'},
    ],
  },
  group: {
    eyebrow: 'GROUP CLASS',
    title: '예술이 찾아가는\n더 넓은 시간',
    intro: '기관의 대상과 목적, 인원과 시간에 맞춰 가장 알맞은 문화예술 경험을 제안합니다.',
    summary:[
      {label:'대상',value:'학교 · 복지기관 · 기업 · 단체'},
      {label:'구성',value:'대상 · 인원 · 시간 · 예산 맞춤'},
      {label:'분야',value:'공예 · 감성예술 · AI 활용'},
    ],
    ctaType:'group',
    ctaTitle:'기관 목적에 맞는 프로그램을 함께 구성해보세요.',
    guideTitle:'문의할 때 알려주시면 좋아요',
    guideIntro:'프로그램이 정해지지 않아도 괜찮습니다. 아래 내용을 알려주시면 상황에 맞는 방향을 정리하기 쉽습니다.',
    guideItems:[
      {title:'참여 대상',text:'연령대와 참여자의 특성, 교육 또는 체험 목적을 알려주세요.'},
      {title:'인원과 시간',text:'예상 참여 인원과 가능한 수업 시간을 알려주시면 난이도와 진행 방식을 조정할 수 있습니다.'},
      {title:'장소와 예산 범위',text:'진행 장소와 준비 가능한 환경, 예산 범위를 함께 알려주시면 프로그램 제안에 도움이 됩니다.'},
    ],
    items: [
      {name:'복지기관',description:'참여자의 신체적·정서적 특성을 고려한 편안한 공예와 감성예술 활동을 제안합니다.'},
      {name:'학교',description:'연령과 교육 목표에 맞춰 창의성과 집중력을 키우는 체험형 예술 수업을 운영합니다.'},
      {name:'기업',description:'구성원의 휴식과 소통을 돕는 워크숍형 문화예술 프로그램으로 구성합니다.'},
      {name:'지역단체',description:'지역 구성원이 함께 만들고 교류할 수 있는 참여형 예술 프로그램을 운영합니다.'},
      {name:'평생학습기관',description:'배움의 지속성과 성취를 고려한 단계별 생활예술 교육을 제안합니다.'},
      {name:'문화센터',description:'다양한 연령이 일상 가까이에서 즐길 수 있는 정기·특강 프로그램을 구성합니다.'},
    ],
  },
  healing: {
    eyebrow: 'HEALING ART',
    title: '예술로 마음을 돌보는\n감성의 시간',
    intro: '차분한 예술 활동과 자기이해의 시간을 통해 일상에 작은 쉼과 새로운 시선을 더합니다.',
    summary:[
      {label:'추천',value:'개인 · 소그룹 · 기관 프로그램'},
      {label:'방식',value:'체험 · 정규 · 맞춤 진행'},
      {label:'분야',value:'타로 · 캘리그라피 · 어반스케치'},
    ],
    ctaType:'healing',
    ctaTitle:'나에게 맞는 감성예술 프로그램을 찾아보세요.',
    guideTitle:'결이 다른 세 가지 감성예술',
    guideIntro:'마음을 바라보는 방식도, 표현하는 방식도 다릅니다. 지금 끌리는 매체부터 시작해보세요.',
    guideItems:[
      {title:'타로',text:'카드의 그림과 상징을 보고 이야기를 풀어가며 생각과 감정을 정리합니다.'},
      {title:'캘리그라피',text:'좋아하는 문장을 손글씨로 표현하며 속도를 늦추고 나만의 글씨를 만들어갑니다.'},
      {title:'어반스케치',text:'카페, 거리, 건물과 여행지처럼 일상의 풍경을 선과 색으로 기록합니다.'},
    ],
    items: [
      {name:'타로 리딩 · 타로 교육',description:'카드의 이미지와 상징을 통해 자신의 마음을 차분히 바라보고, 그림과 이야기로 의미를 풀어가는 시간입니다.'},
      {name:'캘리그라피',description:'좋아하는 문장을 손글씨로 표현하며 호흡과 마음을 가다듬는 생활예술 프로그램입니다.'},
      {name:'어반스케치',description:'카페, 거리, 건물과 여행지 등 일상의 풍경을 나만의 선과 색으로 기록하는 생활예술입니다.'},
      {name:'감성 · 힐링 프로그램',description:'색과 선, 손의 움직임을 통해 감정을 표현하고 편안한 쉼을 경험하는 예술 활동입니다.'},
    ],
  },
  ai: {
    eyebrow: 'AI PRACTICAL CLASS',
    title: '전통과 기술이 만나는\n새로운 가능성',
    intro: '기술을 자랑하기보다 배워서 바로 내 일에 사용하는 AI 교육을 지향합니다.',
    summary:[
      {label:'대상',value:'공방 · 소상공인 · 강사 · 창작자'},
      {label:'방식',value:'실습 중심 · 현업 적용'},
      {label:'결과',value:'이미지 · 글 · 홍보 · 강의자료'},
    ],
    ctaType:'ai',
    ctaTitle:'내 일에 바로 쓰는 AI 활용을 시작해보세요.',
    guideTitle:'배우고 끝나지 않도록, 실제 작업까지',
    guideIntro:'하나의 기능을 많이 아는 것보다 내 사업과 수업에 필요한 결과물을 직접 만드는 데 초점을 둡니다.',
    guideItems:[
      {title:'보이는 콘텐츠',text:'작품 홍보 이미지, 포스터, 카드뉴스와 상세페이지에 필요한 비주얼을 만듭니다.'},
      {title:'읽히는 콘텐츠',text:'블로그, SNS, 소개문구처럼 채널과 고객에 맞는 글을 기획하고 다듬습니다.'},
      {title:'반복해서 쓰는 업무',text:'강의자료, 수업안, 라이브 방송 구성처럼 자주 반복되는 작업을 더 효율적으로 준비합니다.'},
    ],
    items: [
      {name:'AI 이미지 만들기',description:'공방 운영자, 강사, 소상공인이 필요한 이미지를 직접 만들고 수정하는 실전 교육입니다.'},
      {name:'작품 홍보 이미지',description:'작품의 매력을 살린 포스터, 카드뉴스와 홍보 비주얼을 쉽고 빠르게 제작합니다.'},
      {name:'블로그 글 작성',description:'내 브랜드의 말투와 정보를 담은 읽기 좋은 블로그 콘텐츠를 만드는 방법을 익힙니다.'},
      {name:'SNS · 릴스 콘텐츠',description:'게시물과 짧은 영상에 활용할 문구, 구성, 아이디어를 실습 중심으로 다룹니다.'},
      {name:'상세페이지',description:'상품과 프로그램의 장점을 고객의 질문 순서에 맞춰 설득력 있게 보여주는 구조를 배웁니다.'},
      {name:'강의자료',description:'수업안, 활동지와 발표자료를 AI로 효율적으로 기획하고 다듬는 방법을 익힙니다.'},
      {name:'AI 마케팅 활용',description:'고객과 채널에 맞는 홍보 메시지와 콘텐츠 계획을 실무 중심으로 세웁니다.'},
      {name:'라이브 방송 활용',description:'방송 주제, 진행 구성과 소개 문구를 AI와 함께 준비하고 반복 활용하는 방법을 익힙니다.'},
    ],
  },
};

export function StandardPage({ data }: { data: PageData }) {
  const isAbout = data.eyebrow === 'ABOUT HARIN';
  const href = data.ctaType ? `/contact?type=${data.ctaType}` : '/contact';
  return <>
    <section className="page-hero"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title.split('\n').map((line, i) => <span key={line}>{line}{i === 0 && <br/>}</span>)}</h1><p className="lead">{data.intro}</p></section>
    {data.summary && <section className="page-summary" aria-label="프로그램 요약">{data.summary.map(item=><div key={item.label}><span>{item.label}</span><b>{item.value}</b></div>)}</section>}
    <section className="page-content">
      <div className="content-heading"><p className="eyebrow">PROGRAM GUIDE</p><h2>{isAbout ? '하린문화예술을 소개합니다' : '프로그램 안내'}</h2><p>{isAbout ? '브랜드의 방향과 활동 분야를 한눈에 살펴보세요.' : '관심 있는 분야를 살펴보고 나에게 맞는 수업과 진행 방식을 찾아보세요.'}</p></div>
      <div className={`program-grid ${isAbout ? 'about-grid' : ''}`}>{data.items.map((item, i) => <article className="program" key={item.name}><span className="program-no">0{i + 1}</span><h3>{item.name}</h3><p>{item.description}</p></article>)}</div>

      {data.guideItems && <section className="guide-panel"><div className="guide-copy"><p className="eyebrow">DETAIL GUIDE</p><h2>{data.guideTitle}</h2><p>{data.guideIntro}</p></div><div className="guide-list">{data.guideItems.map(item=><article key={item.title}><CheckCircle2 size={19}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>}

      {data.eyebrow === 'GROUP CLASS' && <div className="process"><p className="eyebrow">PROCESS</p><h2>출강은 이렇게 준비합니다</h2><div className="process-steps"><span>문의 접수</span><i>→</i><span>대상·인원 확인</span><i>→</i><span>프로그램 제안</span><i>→</i><span>일정 조율</span><i>→</i><span>수업 진행</span></div></div>}

      <div className="page-cta"><div><h3>{data.ctaTitle ?? '프로그램이 궁금하신가요?'}</h3><p>일정, 대상, 인원과 원하는 방향을 남겨주시면 필요한 내용을 확인해 함께 정리합니다.</p></div><Link href={href} className="button">문의하기 <ArrowRight size={16}/></Link></div>
    </section>
  </>;
}
