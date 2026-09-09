'use client';

import { useState } from 'react';
import { posts } from './data';

const categories=['전체','수업 후기','공예 이야기','강의 소식','AI 활용','문화예술 이야기'];

export function BlogList(){
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?posts:posts.filter(post=>post.category===category);
  return <>
    <div className="filters" role="group" aria-label="블로그 카테고리">{categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div>
    <div className="blog-list">{visible.map(post=><article key={post.title}><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><small>{post.status}</small></article>)}</div>
  </>;
}
