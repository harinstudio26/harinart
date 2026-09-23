'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { BlogPost } from './data';

export function BlogList({ posts }: { posts: BlogPost[] }){
  const categories=['전체',...new Set(posts.map(post => post.category))];
  const [category,setCategory]=useState('전체');
  const visible=category==='전체'?posts:posts.filter(post=>post.category===category);
  return <>
    <fieldset className="filters" style={{border:0,padding:0,minWidth:0}} aria-label="블로그 카테고리">{categories.map(item=><button type="button" className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</fieldset>
    <div className="blog-list">{visible.length===0&&<output>글을 준비하고 있습니다.</output>}{visible.map(post=><article className={post.href?'blog-clickable-card':undefined} key={post.title}>{post.image&&<Image src={post.image} alt={post.imageAlt??post.title} width={post.aiImage?1440:600} height={post.aiImage?960:450} sizes="(max-width: 760px) calc(100vw - 92px), 380px" style={{width:'100%',height:'auto',marginBottom:16}}/>}<span>{post.category}</span><h3>{post.href?<Link href={post.href}>{post.title}</Link>:post.title}</h3><p>{post.excerpt}</p>{post.aiImage&&<p className="blog-ai-label">AI로 제작한 이해를 돕기 위한 이미지</p>}{post.href&&<span className="blog-read-label" aria-hidden="true">글 읽기 →</span>}<small>{post.status}</small></article>)}</div>
  </>;
}
