'use client';

import { useState } from 'react';

const categories=['전체','공예 작품','수업 현장','출강','전시·행사','캘리그라피','어반스케치'];
const items=[
  {category:'공예 작품',label:'공예 작품 기록'},
  {category:'수업 현장',label:'수업 현장 기록'},
  {category:'출강',label:'기관 출강 기록'},
  {category:'전시·행사',label:'전시·행사 기록'},
  {category:'캘리그라피',label:'캘리그라피 작품 기록'},
  {category:'어반스케치',label:'어반스케치 작품 기록'},
  {category:'공예 작품',label:'공예 작품 기록'},
  {category:'수업 현장',label:'수업 현장 기록'},
  {category:'출강',label:'기관 출강 기록'},
];

export function GalleryCollection(){
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?items:items.filter(item=>item.category===category);
  return <>
    <div className="filters" role="group" aria-label="갤러리 카테고리">
      {categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}
    </div>
    <div className="gallery-grid gallery-page-grid">{visible.map((item,i)=><figure className={`gallery-item g${i}`} key={`${item.category}-${i}`}><div className="gallery-visual"><small>PHOTO ARCHIVE</small><b>{item.label}</b><em>실제 사진 등록 준비 중</em></div><span>{item.category}</span></figure>)}</div>
  </>;
}
