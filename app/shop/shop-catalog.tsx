'use client';

import Link from 'next/link';
import { useState } from 'react';
import { products } from './data';

const categories=['전체','전통매듭','칠보공예','액세서리','그림·회화','캘리그라피','어반스케치'];

export function ShopCatalog(){
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?products:products.filter(product=>product.category===category);

  return <>
    <div className="filters" role="group" aria-label="작품 카테고리">
      {categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}
    </div>
    <div className="product-grid">{visible.map((product,i)=><Link href={`/shop/${product.slug}`} className="product-card" key={product.slug}>
      {product.image?<div className="product-image"><img src={product.image} alt={product.name}/></div>:<div className={`product-image product-visual visual-${(i%6)+1}`}><span>{product.category}</span><small>ARTWORK<br/>REGISTRATION</small></div>}
      <span>{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div><b>{product.price}</b><i>{product.status}</i></div>
    </Link>)}</div>
  </>;
}
