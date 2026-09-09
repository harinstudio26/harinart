import{StandardPage,pageData}from'../components';
export const metadata={title:'공예 클래스'};
export default function Page(){return <>
  <StandardPage data={pageData.craft}/>
  <section className="real-photo-section">
    <div className="real-photo-heading"><div><p className="eyebrow">REAL WORKS</p><h2>실제 공예 작품</h2></div><p>하린문화예술에서 직접 제작한 전통매듭과 칠보 작품입니다. 작품명과 판매 정보는 확인된 내용부터 별도로 등록합니다.</p></div>
    <div className="real-photo-grid two">
      <figure className="real-photo-card portrait"><img src="/images/real/knot-03.webp" alt="하린문화예술 전통매듭 수술 장식 작품"/><figcaption>전통매듭 작품</figcaption></figure>
      <figure className="real-photo-card"><img src="/images/real/enamel-02.webp" alt="하린문화예술 칠보공예 부엉이 펜던트 작품"/><figcaption>칠보공예 작품</figcaption></figure>
    </div>
  </section>
</>}
