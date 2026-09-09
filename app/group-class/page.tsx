import{StandardPage,pageData}from'../components';
export const metadata={title:'기관 출강·단체수업'};
export default function Page(){return <>
  <StandardPage data={pageData.group}/>
  <section className="real-photo-section">
    <div className="real-photo-heading"><div><p className="eyebrow">CLASS MOMENTS</p><h2>실제 출강·단체수업 현장</h2></div><p>기관과 단체에서 참여자들이 직접 만들고 배우는 수업 현장입니다. 공개용 사진은 인물 식별이 어렵도록 얼굴을 부드럽게 처리했습니다.</p></div>
    <div className="real-photo-grid two">
      <figure className="real-photo-card"><img src="/images/real/class-01.webp" alt="하린문화예술 기관 단체수업 현장"/><figcaption>기관·단체 수업 현장</figcaption></figure>
      <figure className="real-photo-card"><img src="/images/real/class-02.webp" alt="하린문화예술 성인 공예 출강 현장"/><figcaption>성인 공예 출강 현장</figcaption></figure>
    </div>
  </section>
</>}
