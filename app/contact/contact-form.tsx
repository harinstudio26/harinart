'use client';

import { SubmitEvent, useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

const inquiryTypes = ['수강·체험 문의','출강·단체수업','AI 활용교육','타로·감성예술','작품 구매','주문제작','협업 문의','기타'];
const faqs = [
  ['원데이 클래스 신청이 가능한가요?', '운영 일정과 참여 가능 여부를 확인한 뒤 안내할 수 있습니다. 관심 공예와 희망 일정을 함께 남겨주세요.'],
  ['기관 출강이 가능한가요?', '학교, 복지기관, 기업, 문화센터 등 기관의 목적과 대상에 맞춰 프로그램을 구성할 수 있습니다.'],
  ['단체 인원에 맞춰 프로그램 변경이 가능한가요?', '인원, 연령, 시간과 예산 범위를 확인해 재료와 난이도, 진행 방식을 조정합니다.'],
  ['작품 주문제작이 가능한가요?', '작품 종류에 따라 가능 여부가 달라질 수 있습니다. 원하는 종류와 수량, 일정을 남겨주시면 확인이 필요합니다.'],
  ['AI 활용교육도 기관 출강이 가능한가요?', '참여자의 수준과 기관 환경을 확인해 AI 기초, 이미지, 글, 홍보 콘텐츠 등 필요한 주제로 구성할 수 있습니다.'],
];

type ContactResult = {ok?:boolean;message?:string;error?:string;field?:string};

export function ContactForm({initialType, initialInterest}:{initialType:string;initialInterest:string}) {
  const [message,setMessage]=useState('');
  const [pending,setPending]=useState(false);
  const [success,setSuccess]=useState(false);
  const [errors,setErrors]=useState<Record<string,string>>({});
  const busy=useRef(false);

  async function handleSubmit(event:SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if(busy.current||success)return;
    busy.current=true;setPending(true);setMessage('');setErrors({});
    try {
      let response:Response;
      try {response=await fetch('/api/contact',{method:'POST',body:new FormData(event.currentTarget)});}
      catch {throw Error('네트워크 연결을 확인한 뒤 다시 시도해 주세요.');}
      const result=await response.json().catch(()=>null) as ContactResult|null;
      if(!result)throw Error('문의 접수 결과를 확인하지 못했습니다. 다시 시도해 주세요.');
      if(!response.ok){if(result.field&&result.error)setErrors({[result.field]:result.error});throw Error(result.error||'문의가 접수되지 않았습니다. 다시 시도해 주세요.');}
      if(result.ok!==true)throw Error('문의 접수 결과를 확인하지 못했습니다. 다시 시도해 주세요.');
      setMessage(result.message||'문의가 정상적으로 접수되었습니다.');setSuccess(true);event.currentTarget.reset();
    }catch(error){setMessage(error instanceof Error?error.message:'문의가 접수되지 않았습니다. 다시 시도해 주세요.');}
    finally{busy.current=false;setPending(false);}
  }

  return <>
    <section className="contact-section">
      <div className="contact-intro">
        <p className="eyebrow">SEND A MESSAGE</p>
        <h2>어떤 도움이<br/>필요하신가요?</h2>
        <p>원하는 분야가 정확히 정해지지 않아도 괜찮습니다. 현재 상황과 궁금한 점을 기준으로 필요한 내용을 정리해보세요.</p>
        <div className="contact-note"><span>01</span><p><b>필수 항목을 확인해 주세요.</b><br/>이름, 연락처, 문의 유형과 문의 내용은 상담을 위해 필요한 항목입니다.</p></div>
        <div className="contact-note"><span>02</span><p><b>문의 내용은 운영자만 확인합니다.</b><br/>접수 결과는 이 화면에서 안내합니다. 연락처와 문의 내용은 방문자에게 공개되지 않습니다.</p></div>
      </div>
      <form className="contact-form contact-form-card" onSubmit={handleSubmit}>
        <p className="form-banner full"><b>문의 접수 안내</b><span>작성하신 내용은 상담을 위해 비공개로 접수됩니다. 별표(*)는 필수 항목입니다.</span></p>
        <label>이름 <b>*</b><input name="name" required maxLength={60} autoComplete="name" placeholder="성함을 입력해주세요" aria-invalid={!!errors.name}/>{errors.name&&<small>{errors.name}</small>}</label>
        <label>연락처 <b>*</b><input name="phone" type="tel" required maxLength={30} autoComplete="tel" placeholder="010-0000-0000" aria-invalid={!!errors.phone}/>{errors.phone&&<small>{errors.phone}</small>}</label>
        <label>이메일<input name="email" type="email" maxLength={254} autoComplete="email" placeholder="example@email.com" aria-invalid={!!errors.email}/>{errors.email&&<small>{errors.email}</small>}</label>
        <label>문의 유형 <b>*</b><span className="select-wrap"><select name="type" required defaultValue={initialType}>{inquiryTypes.map(type=><option key={type}>{type}</option>)}</select><ChevronDown size={17}/></span></label>
        <label className="full">관심 프로그램 또는 작품<input name="interest" maxLength={150} defaultValue={initialInterest} placeholder="예: 전통매듭 원데이 클래스 또는 작품 종류"/></label>
        <label>희망 일정<input name="date" type="date"/></label>
        <label>예상 인원<input name="headcount" type="number" min="1" max="99999" placeholder="예: 10"/></label>
        <label className="full">문의 내용 <b>*</b><textarea name="message" rows={7} required maxLength={20000} placeholder="궁금한 점과 원하는 방향을 자세히 남겨주세요" aria-invalid={!!errors.message}/>{errors.message&&<small>{errors.message}</small>}</label>
        <label className="privacy full"><input name="privacy" type="checkbox" required/><span><b>*</b> 개인정보 수집·이용에 동의합니다.<small>문의 상담을 위해 입력한 정보를 수집하며 상담 목적으로만 이용합니다.</small></span></label>
        <button className="button contact-submit full" type="submit" disabled={pending||success}>{pending?'접수 중입니다…':success?'접수 완료':'문의 접수하기'} <ArrowRight size={17}/></button>
        {message&&<p className="form-status full" role={success?'status':'alert'}>{message}</p>}
      </form>
    </section>
    <section className="contact-process">
      <div className="contact-section-title"><p className="eyebrow">HOW IT WORKS</p><h2>상담은 이런 순서로 이어집니다</h2></div>
      <ol>{['문의 내용 확인','대상·목적 파악','상담 연락','일정·구성 조율','확정'].map((step,index)=><li key={step}><span>{String(index+1).padStart(2,'0')}</span><b>{step}</b>{index<4&&<ArrowRight aria-hidden="true"/>}</li>)}</ol>
    </section>
    <section className="contact-faq">
      <div className="contact-section-title"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>자주 묻는 질문</h2></div>
      <div>{faqs.map(([question,answer])=><details key={question}><summary><span>{question}</span><Check size={18}/></summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
