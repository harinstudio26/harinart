'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

const inquiryTypes = ['수강·체험 문의','출강·단체수업','AI 활용교육','타로·감성예술','작품 구매','주문제작','협업 문의','기타'];
const faqs = [
  ['원데이 클래스 신청이 가능한가요?', '네. 운영 일정과 잔여 인원을 확인한 뒤 참여 가능한 수업을 안내드립니다.'],
  ['기관 출강이 가능한가요?', '네. 학교, 복지기관, 기업, 문화센터 등 기관의 목적과 대상에 맞춰 출강합니다.'],
  ['단체 인원에 맞춰 프로그램 변경이 가능한가요?', '네. 인원, 연령, 시간과 예산을 확인해 재료와 난이도, 진행 방식을 조정합니다.'],
  ['작품 주문제작이 가능한가요?', '작품별로 가능합니다. 원하는 종류와 수량, 일정 등을 남겨주시면 가능 여부를 확인해 안내드립니다.'],
  ['AI 활용교육도 기관 출강이 가능한가요?', '네. 참여자의 수준과 기관 환경에 맞춰 AI 기초부터 홍보 콘텐츠 제작까지 구성할 수 있습니다.'],
];

export function ContactForm({initialType, initialInterest}:{initialType:string;initialInterest:string}) {
  const [message, setMessage] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: 실제 이메일 또는 문의 접수 API가 준비되면 이 위치에서 폼 데이터를 전송합니다.
    setMessage('현재 온라인 전송 기능은 연결 준비 중입니다. 입력하신 내용은 전송되거나 저장되지 않았습니다.');
  }

  return <>
    <section className="contact-section">
      <div className="contact-intro">
        <p className="eyebrow">SEND A MESSAGE</p>
        <h2>어떤 도움이<br/>필요하신가요?</h2>
        <p>문의 내용을 자세히 남겨주시면 확인 후 상담 방향을 안내해 드립니다.</p>
        <div className="contact-note"><span>01</span><p><b>필수 항목을 작성해 주세요.</b><br/>표시가 있는 항목은 상담을 위해 꼭 필요합니다.</p></div>
        <div className="contact-note"><span>02</span><p><b>현재는 UI 준비 단계입니다.</b><br/>실제 전송 기능이 연결되기 전까지 입력 내용은 저장되지 않습니다.</p></div>
      </div>
      <form className="contact-form contact-form-card" onSubmit={handleSubmit}>
        <label>이름 <b>*</b><input name="name" required autoComplete="name" placeholder="성함을 입력해주세요"/></label>
        <label>연락처 <b>*</b><input name="phone" required autoComplete="tel" placeholder="010-0000-0000"/></label>
        <label>이메일<input name="email" type="email" autoComplete="email" placeholder="example@email.com"/></label>
        <label>문의 유형 <b>*</b><span className="select-wrap"><select name="type" required defaultValue={initialType}>{inquiryTypes.map(type=><option key={type}>{type}</option>)}</select><ChevronDown size={17}/></span></label>
        <label className="full">관심 프로그램 또는 작품<input name="interest" defaultValue={initialInterest} placeholder="예: 전통매듭 원데이 클래스 또는 작품명"/></label>
        <label>희망 일정<input name="date" type="date"/></label>
        <label>예상 인원<input name="headcount" type="number" min="1" placeholder="예: 10"/></label>
        <label className="full">문의 내용 <b>*</b><textarea name="message" rows={7} required placeholder="문의하실 내용을 자세히 남겨주세요"/></label>
        <label className="privacy full"><input name="privacy" type="checkbox" required/><span><b>*</b> 개인정보 수집·이용에 동의합니다.<small>문의 상담을 위해 이름, 연락처와 작성 내용을 수집하며 상담 완료 후 관련 기준에 따라 처리합니다.</small></span></label>
        <button className="button contact-submit full" type="submit">문의 보내기 <ArrowRight size={17}/></button>
        {message && <p className="form-status full" role="status">{message}</p>}
      </form>
    </section>
    <section className="contact-process">
      <div className="contact-section-title"><p className="eyebrow">HOW IT WORKS</p><h2>문의 절차</h2></div>
      <ol>{['문의 접수','내용 확인','상담 연락','일정 조율','확정'].map((step,index)=><li key={step}><span>{String(index+1).padStart(2,'0')}</span><b>{step}</b>{index<4&&<ArrowRight aria-hidden="true"/>}</li>)}</ol>
    </section>
    <section className="contact-faq">
      <div className="contact-section-title"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>자주 묻는 질문</h2></div>
      <div>{faqs.map(([question,answer])=><details key={question}><summary><span>{question}</span><Check size={18}/></summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
