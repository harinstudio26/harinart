import Link from 'next/link';
import { ArrowRight, Bot, Building2, Gem, Heart, Palette, PenTool, ShoppingBag, Sparkles, Users } from 'lucide-react';
import { products } from './shop/data';

const services = [
  {name:'전통매듭',desc:'전통의 멋을 생활 속 작품으로',href:'/craft',no:'01',Icon:Sparkles},
  {name:'칠보공예',desc:'빛과 색으로 완성하는 공예',href:'/craft',no:'02',Icon:Palette},
  {name:'액세서리 수공예',desc:'손으로 만드는 나만의 감성',href:'/craft',no:'03',Icon:Gem},
  {name:'타로 리딩 · 교육',desc:'이미지와 이야기로 마음을 읽는 시간',href:'/healing-art',no:'04',Icon:Heart},
  {name:'캘리그라피 · 어반스케치',desc:'글과 그림으로 기록하는 일상',href:'/healing-art',no:'05',Icon:PenTool},
  {name:'AI 활용 교육',desc:'내 일에 바로 쓰는 실용적인 AI',href:'/ai-class',no:'06',Icon:Bot},
];

const purposeCards = [
  {eyebrow:'PERSONAL CLASS',title:'취미와 배움을 위한 개인 수업',desc:'공예를 처음 시작하거나 꾸준히 배우고 싶은 분을 위한 원데이·정규 프로그램입니다.',href:'/craft',Icon:Heart},
  {eyebrow:'GROUP PROGRAM',title:'학교·기관·단체 출강',desc:'대상, 인원, 시간과 목적을 확인해 공예·감성예술·AI 프로그램을 맞춤 구성합니다.',href:'/group-class',Icon:Users},
  {eyebrow:'ART SHOP',title:'손으로 만든 작품과 그림',desc:'전통매듭, 칠보, 액세서리와 그림 작품을 소개하고 작품·주문제작 문의로 연결합니다.',href:'/shop',Icon:ShoppingBag},
  {eyebrow:'AI PRACTICAL',title:'창작과 홍보를 위한 AI 활용',desc:'공방, 소상공인, 강사와 창작자가 이미지·글·홍보 콘텐츠를 직접 만드는 실전 교육입니다.',href:'/ai-class',Icon:Bot},
];

const homePosts = [
  ['수업 후기','수업 현장 이야기','실제 수업 후기와 참여 과정은 확인된 기록부터 차근차근 소개합니다.'],
  ['공예 이야기','손으로 만드는 공예의 과정','전통매듭과 칠보, 액세서리 공예의 재료와 만드는 즐거움을 전합니다.'],
  ['AI 활용','작품과 수업을 알리는 AI 활용','공방과 강사의 홍보에 바로 적용할 수 있는 이미지·글·콘텐츠 활용법을 다룹니다.'],
];

const realMoments=[
  {label:'전통매듭',src:'/images/real/knot-03.webp',alt:'하린문화예술 전통매듭 실제 작품'},
  {label:'칠보공예',src:'/images/real/enamel-02.webp',alt:'하린문화예술 칠보공예 실제 작품'},
  {label:'출강 현장',src:'/images/real/class-01.webp',alt:'하린문화예술 기관 단체 출강 현장'},
  {label:'수업 현장',src:'/images/real/class-02.webp',alt:'하린문화예술 성인 공예 수업 현장'},
  {label:'어반스케치',src:'/images/real/urban-01.webp',alt:'하린문화예술 어반스케치 실제 작품'},
];

export default function Home(){return <>
  <section className="hero">
    <div className="hero-copy">
      <p className="eyebrow">HARIN CULTURE & ARTS</p>
      <h1><span>손끝의 예술,</span><span><em>마음에 닿는 시간</em></span></h1>
      <p className="lead">전통매듭과 칠보공예, 액세서리 수공예부터 타로, 캘리그라피, 어반스케치, AI 활용 교육까지. 배우고 만들고 나누는 문화예술을 한곳에서 만나보세요.</p>
      <div className="hero-actions"><Link className="button" href="/craft">프로그램 둘러보기 <ArrowRight size={17}/></Link><Link className="button secondary" href="/contact?type=group">출강·단체 문의</Link></div>
      <div className="hero-tags" aria-label="주요 분야"><span>개인·원데이</span><span>정규 강의</span><span>기관 출강</span><span>작품 판매</span><span>AI 실전교육</span></div>
    </div>
    <div className="hero-image"><img src="/images/hero.png" alt="따뜻한 자연광 아래 전통매듭을 만드는 손"/><p>예술이 사람을 잇고,<br/>일상을 더 아름답게</p></div>
  </section>

  <section className="proof-strip" aria-label="하린문화예술 주요 영역"><span>TRADITIONAL CRAFT</span><i/> <span>HEALING ART</span><i/> <span>GROUP CLASS</span><i/> <span>AI PRACTICAL</span></section>

  <section className="section">
    <div className="section-head"><div><p className="eyebrow">WHAT WE DO</p><h2>하린문화예술의 주요 서비스</h2></div><p>손으로 만드는 기쁨부터 새로운 기술을 배우는 즐거움까지, 목적에 맞는 문화예술 프로그램을 찾아보세요.</p></div>
    <div className="service-grid">{services.map(({name,desc,href,no,Icon})=><Link href={href} className="service-card" key={name}><span>{no}</span><div className={'card-art art-'+no}><Icon size={34}/></div><h3>{name}</h3><p>{desc}</p><b>자세히 보기 <ArrowRight size={14}/></b></Link>)}</div>
  </section>

  <section className="soft section">
    <div className="section-head"><div><p className="eyebrow">CHOOSE YOUR WAY</p><h2>지금 필요한 방식으로 시작하세요</h2></div><p>개인 수업, 기관 출강, 작품 구매, AI 활용교육까지 방문 목적에 따라 바로 이동할 수 있습니다.</p></div>
    <div className="purpose-grid">{purposeCards.map(({eyebrow,title,desc,href,Icon})=><Link href={href} className="purpose-card" key={title}><Icon size={24}/><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{desc}</p><span>바로가기 <ArrowRight size={15}/></span></Link>)}</div>
  </section>

  <section className="section split">
    <div className="story-image real"><img src="/images/real/knot-03.webp" alt="하린문화예술에서 제작한 전통매듭 장식 작품"/></div>
    <div><p className="eyebrow">ABOUT HARIN</p><h2>예술, 사람, 배움이 만나는<br/>따뜻한 문화예술 플랫폼</h2><p className="body">하린문화예술은 전통과 현대를 잇는 공예와 감성예술, 교육을 통해 사람과 일상을 연결합니다. 한 번의 체험부터 꾸준한 배움, 기관 출강과 실용적인 AI 활용까지 각자의 목적에 맞는 방식으로 예술을 경험할 수 있도록 구성합니다.</p><div className="values"><span><Palette size={18}/>공예의 가치</span><span><Heart size={18}/>치유와 감성</span><span><Sparkles size={18}/>배움과 나눔</span><span><Bot size={18}/>실생활의 가능성</span></div><Link className="text-link" href="/about">하린문화예술 이야기 보기 <ArrowRight size={16}/></Link></div>
  </section>

  <section className="section"><div className="feature"><div><p className="eyebrow light">GROUP PROGRAM</p><h2>예술이 필요한 곳으로<br/>찾아갑니다.</h2><p>학교, 복지기관, 기업, 평생학습기관, 지역단체와 문화센터의 대상과 목적에 맞춰 프로그램을 제안합니다.</p><div className="actions"><Link className="button cream" href="/group-class">출강 프로그램 보기</Link><Link className="button outline" href="/contact?type=group">출강 문의하기</Link></div></div><div className="feature-photo"><img src="/images/real/class-01.webp" alt="하린문화예술 기관 단체 출강 실제 현장"/></div></div></section>

  <section className="section ai"><div><p className="eyebrow">AI × CULTURE & ARTS</p><h2>전통과 기술이 만나는<br/><em>새로운 가능성</em></h2></div><div><p className="body">공방 운영자, 소상공인, 강사와 창작자가 AI를 활용해 자신의 작품과 서비스를 더 잘 보여줄 수 있도록 돕습니다. 어렵게 배우는 기술보다 바로 내 일에 적용하는 방법에 집중합니다.</p><div className="chips">{['AI 이미지','블로그 콘텐츠','SNS · 숏폼','상세페이지','강의자료','라이브 방송'].map(x=><span key={x}>{x}</span>)}</div><Link className="button" href="/ai-class">AI 활용 교육 알아보기 <ArrowRight size={17}/></Link></div></section>

  <section className="shop-home section"><div className="section-head"><div><p className="eyebrow">HARIN ART SHOP</p><h2>손으로 만든 작품을 만나보세요</h2></div><p>공예품과 그림은 실제 작품 사진, 작품명, 가격 등 확인된 정보부터 순차적으로 등록합니다.</p></div><div className="product-grid">{products.slice(0,6).map((product,i)=><Link href={`/shop/${product.slug}`} className="product-card" key={product.slug}><div className={`product-image product-visual visual-${i+1}`}><span>{product.category}</span><small>ARTWORK<br/>REGISTRATION</small></div><span>{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div><b>{product.price}</b><i>{product.status}</i></div></Link>)}</div><div className="center"><Link className="button" href="/shop">작품샵 보기 <ArrowRight size={17}/></Link></div></section>

  <section className="soft section"><div className="section-head"><div><p className="eyebrow">OUR MOMENTS</p><h2>실제 작품과 수업의 순간</h2></div><Link className="text-link" href="/gallery">갤러리 전체보기 <ArrowRight size={16}/></Link></div><div className="home-photo-gallery">{realMoments.map(item=><Link href="/gallery" key={item.label}><figure><img src={item.src} alt={item.alt}/><span>{item.label}</span></figure></Link>)}</div></section>

  <section className="section"><div className="section-head"><div><p className="eyebrow">JOURNAL</p><h2>예술과 일상이 만나는 이야기</h2></div><Link className="text-link" href="/blog">블로그 전체보기 <ArrowRight size={16}/></Link></div><div className="posts">{homePosts.map(p=><Link href="/blog" key={p[1]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></Link>)}</div></section>

  <section className="section journey"><div className="section-head"><div><p className="eyebrow">HOW TO START</p><h2>처음 문의하셔도 어렵지 않아요</h2></div><p>원하는 프로그램이 정확히 정해지지 않아도 괜찮습니다. 목적과 상황을 알려주시면 필요한 방향을 정리할 수 있습니다.</p></div><div className="step-grid"><article><span>01</span><h3>관심 분야 선택</h3><p>공예, 감성예술, 기관 출강, AI 활용교육 또는 작품 중 관심 분야를 살펴봅니다.</p></article><article><span>02</span><h3>상황과 일정 전달</h3><p>개인 수업은 관심 과정과 일정, 기관은 대상·인원·시간·목적을 알려주세요.</p></article><article><span>03</span><h3>상담 후 방향 조율</h3><p>확인된 내용에 맞춰 프로그램과 진행 방향을 함께 정리합니다.</p></article></div></section>

  <section className="final-cta"><p className="eyebrow light">BEGIN YOUR ART JOURNEY</p><h2>예술이 있는,<br/>더 따뜻한 일상을 함께 만들어가요.</h2><p>수업, 출강, 작품, AI 활용교육에 관한 궁금한 점을 편하게 남겨주세요.</p><div className="actions"><Link className="button cream" href="/contact?type=class">수강 문의</Link><Link className="button outline" href="/contact?type=group">출강 문의</Link></div></section>
</>}
