import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.css';

const title = '원석 헤어핀, 작은 장식에 담은 색과 손작업 이야기';
const description = '유정아트공방의 원석 헤어핀 세 작품을 통해 색 조합, 자개와 금속 장식, 와이어 작업의 매력을 만나보세요.';
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: 'https://harinart.vercel.app/blog/gemstone-hairpins' },
  openGraph: { title, description, type: 'article', url: 'https://harinart.vercel.app/blog/gemstone-hairpins', images: [{ url: '/images/blog/gemstone-hairpin-1.jpg', width: 600, height: 450, alt: '유정아트공방에서 만든 원석 헤어핀 세 작품' }] },
};

function Photo({ number, alt, caption, priority = false }: { number: number; alt: string; caption: string; priority?: boolean }) {
  return <figure className={styles.figure}><Image src={`/images/blog/gemstone-hairpin-${number}.jpg`} alt={alt} width={600} height={450} priority={priority} sizes="(max-width: 640px) calc(100vw - 40px), 600px" /><figcaption>{caption}</figcaption></figure>;
}

export default function Page() {
  return <article className={styles.article}>
    <nav aria-label="현재 위치" className={styles.breadcrumb}><Link href="/blog">블로그</Link><span aria-hidden="true"> / </span><span>수공예</span></nav>
    <header className={styles.header}>
      <p className={styles.category}>수공예 · 작품 이야기</p>
      <h1>{title}</h1>
      <p className={styles.intro}>작은 집게핀 위에 꽃과 원석, 자개를 하나씩 올리면 서로 다른 표정의 액세서리가 됩니다. 유정아트공방 시절 만든 세 가지 헤어핀에서 손으로 만드는 즐거움을 다시 꺼내봅니다.</p>
      <p className={styles.meta}>글·사진: 유정아트공방 · 하린문화예술<br/>원문 기록: <time dateTime="2018-06-21">2018년 6월 21일</time> · 홈페이지 재구성: <time dateTime="2026-09-22">2026년 9월 22일</time></p>
    </header>
    <Photo number={1} priority alt="검정 집게핀 위에 꽃, 원석, 새 모양 자개를 장식한 세 가지 수공예 헤어핀" caption="같은 검정 집게핀도 재료와 배치에 따라 서로 다른 분위기를 보여줍니다." />

    <section><h2>하나의 바탕, 세 가지 분위기</h2>
      <p>이번 작품들은 검정 집게핀을 바탕으로 만들었습니다. 바탕이 단정하면 장식의 색과 형태가 더 또렷하게 드러납니다. 꽃 장식으로 시선을 모으거나, 작은 칩을 모아 색을 더하거나, 새 모양 자개로 이야기를 담는 식이지요.</p>
      <p>사진을 보실 때는 재료의 종류뿐 아니라 어디에 큰 장식을 두었는지, 작은 장식이 그 주변을 어떻게 채우는지도 살펴보세요. 같은 재료라도 배치에 따라 완성된 인상이 달라집니다.</p>
    </section>

    <section><h2>01. 브라운과 퍼플, 차분한 색의 조화</h2>
      <p>첫 번째는 브라운 계열의 길쭉한 장식과 퍼플 꽃 장식을 조합한 헤어핀입니다. 옅은 색의 꽃과 금속 장식이 함께 놓여, 검정 바탕 위에서도 부드러운 분위기를 만듭니다.</p>
      <Photo number={2} alt="브라운 계열 장식과 보라색 꽃, 옅은 색 꽃을 배치한 검정 집게핀" caption="크기와 높이가 다른 꽃 장식이 시선을 자연스럽게 이어줍니다." />
      <p>색을 고르는 일이 어렵다면 이 작품처럼 중심이 되는 색 두 가지부터 정해보세요. 큰 장식과 작은 장식을 나누어 배치하면 여러 재료를 사용해도 중심이 흐트러지지 않습니다.</p>
    </section>

    <section><h2>02. 원석 칩과 꽃 장식, 선물을 생각하는 마음</h2>
      <p>두 번째 작품은 원문에서 트루말린과 차보라이트 칩을 사용한 것으로 소개한 헤어핀입니다. 가운데의 연한 분홍 꽃을 중심으로 붉은색과 초록색의 작은 장식, 진주빛 구슬이 어우러집니다.</p>
      <Photo number={3} alt="연분홍 꽃을 중심으로 붉은색과 초록색 장식, 진주빛 구슬이 어우러진 헤어핀" caption="작은 칩과 구슬을 모아 꽃 주변에 색과 리듬을 더했습니다." />
      <p>당시 이 작품은 선물용으로 선택되었습니다. 수공예 액세서리를 선물로 고를 때는 받는 분이 평소 즐겨 입는 옷의 색이나 좋아하는 장식의 크기를 떠올려보면 좋습니다. 화려함의 정도보다 그 사람에게 자연스럽게 어울리는지가 더 좋은 기준이 될 수 있습니다.</p>
    </section>

    <section><h2>03. 새 모양 자개와 금속 장식이 만났을 때</h2>
      <p>세 번째 작품에는 새 모양 자개, 금속 펜던트, 원석과 비즈 와이어를 사용했습니다. 새 장식 옆의 붉은 구슬, 가운데의 둥근 장식, 아래쪽의 원석이 길쭉한 핀을 따라 이어집니다.</p>
      <Photo number={4} alt="새 모양 자개와 둥근 진주빛 장식, 금속 펜던트와 원석을 조합한 헤어핀" caption="서로 다른 재료의 표면과 모양을 한 작품 안에서 만나볼 수 있습니다." />
      <p>작은 장식을 연결하는 와이어 작업에는 손이 많이 갑니다. 눈에 보이는 앞면뿐 아니라 연결 부위와 마감까지 살펴야 하기 때문입니다. 완성된 장식의 화려함 뒤에는 재료 하나하나를 다루는 시간이 담겨 있습니다.</p>
    </section>

    <section><h2>수공예는 사람과 만나는 일</h2>
      <p>2018년의 원문에는 플리마켓에서 작품을 소개하고, 구매하시는 분들의 반응을 만나던 이야기가 담겨 있습니다. 선물할 사람을 떠올리며 작품을 고르는 마음, 완성품을 보고 만족해주시는 모습은 만드는 사람에게도 오래 남습니다.</p>
      <p>그 기록 속 “수공예는 소통”이라는 말은 지금 다시 보아도 이 작품들과 잘 어울립니다. 손으로 만든 작은 물건이 취향을 나누는 계기가 되고, 누군가의 일상으로 이어지는 것. 그것이 수공예를 계속하게 하는 즐거움입니다.</p>
    </section>

    <aside className={styles.note}><h2>작품 기록 안내</h2><p>이 글은 유정아트공방의 2018년 네이버 블로그 글과 당시 사진 4장을 바탕으로 하린문화예술 홈페이지에 맞게 재구성했습니다. 색 조합과 작품 감상에 도움이 되는 설명을 덧붙였습니다. 사진 속 작품의 현재 판매 여부나 동일한 수업 개설을 안내하는 글은 아닙니다.</p><a href="https://blog.naver.com/yoojeongart/221303882637" target="_blank" rel="noopener noreferrer">네이버 원문 보기 ↗</a></aside>
    <div className={styles.cta}><h2>나만의 수공예 작품을 만들어보고 싶으신가요?</h2><p>원하시는 공예 분야와 참여 인원, 희망 일정을 알려주시면 진행 가능한 프로그램을 안내해드립니다.</p><Link href="/contact" className="button">수공예 수업 문의</Link></div>
    <Link href="/blog" className={styles.back}>← 블로그 목록으로</Link>
  </article>;
}
