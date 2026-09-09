'use client';

import { useMemo, useState } from 'react';

export type GalleryItem={
  category:string;
  label:string;
  src:string;
  alt:string;
};

const categoryOrder=['전통매듭','칠보공예','출강·수업','어반스케치'];

export function GalleryCollection({items}:{items:GalleryItem[]}){
  const categories=useMemo(()=>['전체',...categoryOrder.filter(name=>items.some(item=>item.category===name))],[items]);
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?items:items.filter(item=>item.category===category);

  return <>
    <div className="filters" role="group" aria-label="갤러리 카테고리">
      {categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}
    </div>
    {visible.length>0?<div className="gallery-grid gallery-page-grid">{visible.map((item,i)=><figure className={`gallery-item g${i%6}`} key={item.src}><div className="gallery-photo"><img src={item.src} alt={item.alt} loading="lazy"/><small>실제 기록</small></div><span>{item.category}</span><b>{item.label}</b></figure>)}</div>:<p className="empty-state">등록된 사진이 아직 없습니다.</p>}
  </>;
}
