import { Breadcrumbs } from '../breadcrumbs';
import { pageMetadata } from '../seo';
import{StandardPage,pageData}from'../components';
export const metadata = pageMetadata("/healing-art","감성예술","타로의 그림과 상징 읽기, 캘리그라피 손글씨, 일상을 기록하는 어반스케치를 만나보세요. 개인과 소그룹, 기관을 위한 하린문화예술 감성예술 프로그램입니다.");
export default function Page(){return <><Breadcrumbs items={[{"name": "감성예술", "path": "/healing-art"}]}/>
  <StandardPage data={pageData.healing}/>
  <section className="real-photo-section">
    <div className="real-photo-heading"><div><p className="eyebrow">URBAN SKETCH</p><h2>실제 어반스케치 작품</h2></div><p>거리와 건물, 일상의 풍경을 펜과 수채로 기록한 실제 작품입니다. 작품 제목은 확인된 정보가 있을 때 추가합니다.</p></div>
    <div className="real-photo-grid">
      <figure className="real-photo-card"><img src="/images/real/urban-01.webp" alt="하린문화예술 어반스케치 실제 작품"/><figcaption>어반스케치 작품</figcaption></figure>
    </div>
  </section>
</>}
