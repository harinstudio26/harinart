import Link from 'next/link';
import { ArrowRight, Bot, Building2, Gem, Heart, Palette, PenTool, Sparkles } from 'lucide-react';
import { products } from './shop/data';

const services = [
  {name:'전통매듭',desc:'전통의 멋, 일상 속 예술',href:'/craft',no:'01',Icon:Sparkles},
  {name:'칠보공예',desc:'빛으로 피어나는 색의 예술',href:'/craft',no:'02',Icon:Palette},
  {name:'액세서리 수공예',desc:'나만의 특별한 감성',href:'/craft',no:'03',Icon:Gem},
  {name:'타로 리딩',desc:'마음을 읽는 시간',href:'/healing-art',no:'04',Icon:Heart},
  {name:'캘리그라피 · 어반스케치',desc:'글과 그림으로 기록하는 일상',href:'/healing-art',no:'05',Icon:PenTool},
  {name:'AI 활용 교육',desc:'예술과 일에 새로운 가능성을',href:'/ai-class',no:'06',Icon:Bot},
];

const homePosts = [
  ['수업 후기','작은 매듭 하나에서 시작된 따뜻한 하루','처음 매듭을 배우는 순간부터 완성의 기쁨까지, 수업 현장의 이야기를 전합니다.'],
  ['공예 이야기','칠보의 빛과 색을 오래 간직하는 방법','재료와 색, 소성 과정이 만나 완성되는 칠보공예의 매력을 소개합니다.'],
  ['AI 활용','공방 홍보, AI와 함께 더 가볍게 시작하기','작품 사진과 글, SNS 콘텐츠를 AI와 함께 만드는 실용적인 방법을 나눕니다.'],
];

export default function Home(){return <>
  <section className="hero">
    <div className="hero-copy">
      <p className="eyebrow">HARIN CULTURE & ARTS</p>
      <h1><span>손끝의 예술,</span><span><em>마음에 닿는 시간</em></span></h1>
      <p className="lead">전통매듭, 칠보공예, 액세서리 수공예부터 타로, 캘리그라피, 어반스케치, AI 활용 교육까지. 하린문화예술의 폭넓은 수업과 콘텐츠를 만나보세요.</p>
      <Link className="button" href="/craft">프로그램 둘러보기 <ArrowRight size={17}/></Link>
    </div>
    <div className="hero-image"><img src="/images/hero.png" alt="따뜻한 자연광 아래 전통매듭을 만드는 손"/><p>예술이 사람을 잇고,<br/>일상을 더 아름답게</p></div>
  </section>

  <section className="section">
    <div className="section-head"><div><p className="eyebrow">WHAT WE DO</p><h2>하린문화예술의 주요 서비스</h2></div><p>손으로 만드는 기쁨부터 새로운 기술을 배우는 즐거움까지, 일상과 배움에 꼭 맞는 예술을 만나보세요.</p></div>
    <div className="service-grid">{services.map(({name,desc,href,no,Icon})=><Link href={href} className="service-card" key={name}><span>{no}</span><div className={'card-art art-'+no}><Icon size={34}/></div><h3>{name}</h3><p>{desc}</p><b>자세히 보기 <ArrowRight size={14}/></b></Link>)}</div>
  </section>

  <section className="soft section split">
    <div className="story-image"><img src="/images/hero.png" alt="하린문화예술의 공예 작업 풍경"/></div>
    <div><p className="eyebrow">ABOUT HARIN</p><h2>예술, 사람, 배움이 만나는<br/>따뜻한 문화예술 플랫폼</h2><p className="body">하린문화예술은 전통과 현대를 잇는 다양한 예술 활동을 통해 치유와 감동, 배움의 가치를 전합니다. 작품을 만드는 데서 멈추지 않고 사람과 사람을 연결하며, 일상 속에서 예술을 경험할 수 있는 프로그램을 만들어갑니다.</p><div className="values"><span><Palette size={18}/>공예의 가치</span><span><Heart size={18}/>치유와 감성</span><span><Sparkles size={18}/>배움과 나눔</span><span><Bot size={18}/>실생활의 가능성</span></div><Link className="text-link" href="/about">하린문화예술 이야기 보기 <ArrowRight size={16}/></Link></div>
  </section>

  <section className="section"><div className="feature"><div><p className="eyebrow light">GROUP PROGRAM</p><h2>예술이 필요한 곳으로<br/>찾아갑니다.</h2><p>학교, 복지기관, 기업, 평생학습기관, 지역단체와 문화센터를 위한 맞춤형 문화예술 프로그램을 운영합니다.</p><div className="actions"><Link className="button cream" href="/group-class">출강 프로그램 보기</Link><Link className="button outline" href="/contact?type=group">출강 문의하기</Link></div></div><Building2 size={120}/></div></section>

  <section className="section ai"><div><p className="eyebrow">AI × CULTURE & ARTS</p><h2>전통과 기술이 만나는<br/><em>새로운 가능성</em></h2></div><div><p className="body">공방 운영자, 소상공인, 강사와 창작자가 AI를 활용해 자신의 작품과 서비스를 더 많은 사람에게 알릴 수 있도록 돕습니다. 어렵게 배우는 기술보다 바로 내 일에 적용하는 방법에 집중합니다.</p><div className="chips">{['AI 이미지','블로그 콘텐츠','SNS · 숏폼','상세페이지','강의자료','라이브 방송'].map(x=><span key={x}>{x}</span>)}</div><Link className="button" href="/ai-class">AI 활용 교육 알아보기 <ArrowRight size={17}/></Link></div></section>

  <section className="shop-home section"><div className="section-head"><div><p className="eyebrow">HARIN ART SHOP</p><h2>손으로 만든 작품을 만나보세요</h2></div><p>하린문화예술에서 직접 제작한 공예품과 그림을 소개합니다. 실제 작품 사진과 판매 정보는 준비되는 순서대로 채워갑니다.</p></div><div className="product-grid">{products.slice(0,6).map((product,i)=><Link href={`/shop/${product.slug}`} className="product-card" key={product.slug}><div className={`product-image product-visual visual-${i+1}`}><span>{product.category}</span><small>ARTWORK PHOTO<br/>COMING SOON</small></div><span>{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div><b>{product.price}</b><i>{product.status}</i></div></Link>)}</div><div className="center"><Link className="button" href="/shop">작품 보러가기 <ArrowRight size={17}/></Link></div></section>

  <section className="soft section"><div className="section-head"><div><p className="eyebrow">OUR MOMENTS</p><h2>하린의 예술이 머무는 순간</h2></div><Link className="text-link" href="/gallery">갤러리 전체보기 <ArrowRight size={16}/></Link></div><div className="gallery-grid">{['공예 작품','수업 현장','출강 현장','전시 · 행사','캘리그라피','어반스케치'].map((x,i)=><Link href="/gallery" className={'gallery-item g'+i} key={x}><div className="gallery-visual"><small>HARIN MOMENTS</small></div><span>{x}</span></Link>)}</div></section>

  <section className="section"><div className="section-head"><div><p className="eyebrow">JOURNAL</p><h2>예술과 일상이 만나는 이야기</h2></div><Link className="text-link" href="/blog">블로그 전체보기 <ArrowRight size={16}/></Link></div><div className="posts">{homePosts.map((p,i)=><Link href="/blog" key={p[1]}><span>{p[0]} · 2026.09.0{7-i}</span><h3>{p[1]}</h3><p>{p[2]}</p></Link>)}</div></section>

  <section className="final-cta"><p className="eyebrow light">BEGIN YOUR ART JOURNEY</p><h2>예술이 있는,<br/>더 따뜻한 일상을 함께 만들어가요.</h2><p>하린문화예술이 당신의 특별한 순간을 함께합니다.</p><div className="actions"><Link className="button cream" href="/contact?type=class">수강 문의</Link><Link className="button outline" href="/contact?type=group">출강 문의</Link></div></section>
</>}
