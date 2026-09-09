'use client';

import { FormEvent, useMemo, useState } from 'react';
import styles from './admin.module.css';

const categories=['전통매듭','칠보공예','액세서리','그림·회화','캘리그라피','어반스케치'];
const statuses=['판매중','품절','주문제작','등록준비'];

export function AdminPanel(){
  const [password,setPassword]=useState('');
  const [category,setCategory]=useState(categories[0]);
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [status,setStatus]=useState(statuses[0]);
  const [description,setDescription]=useState('');
  const [image,setImage]=useState<File|null>(null);
  const [message,setMessage]=useState('');
  const [busy,setBusy]=useState(false);

  const preview=useMemo(()=>image?URL.createObjectURL(image):'', [image]);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setMessage('');
    if(!image){setMessage('작품 사진을 선택해주세요.');return;}
    setBusy(true);
    try{
      const form=new FormData();
      form.append('password',password);
      form.append('category',category);
      form.append('name',name);
      form.append('price',price);
      form.append('status',status);
      form.append('description',description);
      form.append('image',image);
      const res=await fetch('/api/admin/products',{method:'POST',body:form});
      const data=await res.json();
      setMessage(data.message||'처리가 완료되었습니다.');
      if(res.ok){
        setName('');setPrice('');setDescription('');setImage(null);
        const file=document.getElementById('admin-image') as HTMLInputElement|null;
        if(file)file.value='';
      }
    }catch{
      setMessage('등록 요청 중 오류가 발생했습니다.');
    }finally{setBusy(false);}
  }

  return <main className={styles.wrap}>
    <section className={styles.hero}>
      <p className={styles.eyebrow}>HARIN ADMIN</p>
      <h1>작품샵 관리자</h1>
      <p>사진, 작품명, 가격, 판매상태를 입력하면 GitHub에 저장되고 Vercel이 자동으로 다시 배포합니다. 코드를 직접 수정하지 않아도 됩니다.</p>
    </section>

    <div className={styles.panel}>
      <form className={styles.card} onSubmit={submit}>
        <h2>새 작품 등록</h2>
        <div className={styles.grid}>
          <div className={`${styles.field} ${styles.full}`}><label htmlFor="admin-password">관리자 비밀번호</label><input id="admin-password" type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password" required/><span className={styles.hint}>Vercel에 설정한 관리자 비밀번호를 입력합니다.</span></div>
          <div className={styles.field}><label htmlFor="admin-category">카테고리</label><select id="admin-category" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(x=><option key={x}>{x}</option>)}</select></div>
          <div className={styles.field}><label htmlFor="admin-status">판매상태</label><select id="admin-status" value={status} onChange={e=>setStatus(e.target.value)}>{statuses.map(x=><option key={x}>{x}</option>)}</select></div>
          <div className={`${styles.field} ${styles.full}`}><label htmlFor="admin-name">작품명</label><input id="admin-name" value={name} onChange={e=>setName(e.target.value)} placeholder="예: 전통매듭 브로치" required/></div>
          <div className={`${styles.field} ${styles.full}`}><label htmlFor="admin-price">가격</label><input id="admin-price" value={price} onChange={e=>setPrice(e.target.value)} placeholder="예: 25,000원 / 가격문의 / 주문제작" required/></div>
          <div className={`${styles.field} ${styles.full}`}><label htmlFor="admin-description">작품 설명</label><textarea id="admin-description" value={description} onChange={e=>setDescription(e.target.value)} placeholder="재료, 크기, 특징, 주문제작 안내 등을 적어주세요."/></div>
          <div className={`${styles.field} ${styles.full}`}><label htmlFor="admin-image">작품 사진</label><input id="admin-image" type="file" accept="image/jpeg,image/png,image/webp" onChange={e=>setImage(e.target.files?.[0]||null)} required/><span className={styles.hint}>JPG, PNG, WebP · 최대 8MB. 원본이 선명할수록 좋습니다.</span></div>
        </div>
        <button className={styles.submit} type="submit" disabled={busy}>{busy?'등록 중입니다…':'작품 등록하기'}</button>
        {message&&<div className={styles.message}>{message}</div>}
      </form>

      <aside className={styles.card}>
        <h2>등록 미리보기</h2>
        <div className={styles.preview}>{preview?<img src={preview} alt="선택한 작품 미리보기"/>:<span>사진을 선택하면 여기에 표시됩니다.</span>}</div>
        <div className={styles.summary}><small>{category}</small><h3>{name||'작품명'}</h3><p>{description||'작품 설명이 여기에 표시됩니다.'}</p><dl><dt>가격</dt><dd>{price||'가격'}</dd><dt>상태</dt><dd>{status}</dd></dl></div>
      </aside>
    </div>

    <div className={styles.notice}><b>처음 한 번만 설정이 필요합니다.</b>이 관리자 화면이 실제 GitHub에 작품을 저장하려면 Vercel 환경변수에 관리자 비밀번호와 GitHub 쓰기 토큰을 등록해야 합니다. 설정 후에는 이 페이지에서 계속 직접 등록하실 수 있습니다.</div>
  </main>;
}
