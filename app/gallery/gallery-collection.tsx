'use client';

import { useState } from 'react';

const categories=['전체','공예 작품','수업 현장','출강','어반스케치'];
const items=[
  {category:'공예 작품',label:'전통매듭 작품',src:'/images/real/knot-03.webp',alt:'하린문화예술 전통매듭 실제 작품'},
  {category:'공예 작품',label:'칠보공예 작품',src:'/images/real/enamel-02.webp',alt:'하린문화예술 칠보공예 실제 작품'},
  {category:'수업 현장',label:'성인 공예 수업 현장',src:'/images/real/class-02.webp',alt:'하린문화예술 성인 공예 수업 현장'},
  {category:'출강',label:'기관·단체 출강 현장',src:'/images/real/class-01.webp',alt:'하린문화예술 기관 단체 출강 현장'},
  {category:'어반스케치',label:'어반스케치 작품',src:'/images/real/urban-01.webp',alt:'하린문화예술 어반스케치 실제 작품'},
];

export function GalleryCollection(){
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?items:items.filter(item=>item.category===category);
  return <>
    <div className="filters" role="group" aria-label="갤러리 카테고리">
      {categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}
    </div>
    <div className="gallery-grid gallery-page-grid">{visible.map((item,i)=><figure className={`gallery-item g${i}`} key={`${item.category}-${item.label}`}><div className="gallery-photo"><img src={item.src} alt={item.alt}/><small>실제 기록</small></div><span>{item.category}</span><b>{item.label}</b></figure>)}</div>
  </>;
}
