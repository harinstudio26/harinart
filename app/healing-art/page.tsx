import{StandardPage,pageData}from'../components';
export const metadata={title:'감성예술'};
export default function Page(){return <>
  <StandardPage data={pageData.healing}/>
  <section className="real-photo-section">
    <div className="real-photo-heading"><div><p className="eyebrow">URBAN SKETCH</p><h2>실제 어반스케치 작품</h2></div><p>거리와 건물, 일상의 풍경을 펜과 수채로 기록한 실제 작품입니다. 작품 제목은 확인된 정보가 있을 때 추가합니다.</p></div>
    <div className="real-photo-grid">
      <figure className="real-photo-card"><img src="/images/real/urban-01.webp" alt="하린문화예술 어반스케치 실제 작품"/><figcaption>어반스케치 작품</figcaption></figure>
    </div>
  </section>
</>}
