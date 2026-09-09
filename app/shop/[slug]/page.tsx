import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { products } from '../data';

export function generateStaticParams(){return products.map(product=>({slug:product.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find(item=>item.slug===slug);
  return product?{title:`${product.name} | 작품샵`,description:product.description}:{title:'작품을 찾을 수 없습니다'};
}

export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find(item=>item.slug===slug);
  if(!product)notFound();
  return <>
    <section className="page-content product-detail">
      {product.image?<div className="product-detail-image"><img src={product.image} alt={product.name}/></div>:<div className="product-detail-image product-visual"><span>{product.category}</span><small>ARTWORK<br/>REGISTRATION</small></div>}
      <div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="body">{product.description}</p><dl><dt>가격</dt><dd>{product.price}</dd><dt>상태</dt><dd>{product.status}</dd></dl><div className="product-note"><b>작품 안내</b><p>등록된 사진과 작품 정보는 하린문화예술에서 직접 확인한 내용을 기준으로 제공합니다.</p></div><Link className="button" href={`/contact?type=custom&product=${product.slug}`}>작품·주문제작 문의 <ArrowRight size={16}/></Link></div>
    </section>
    <section className="product-back"><Link href="/shop">← 작품샵 목록으로 돌아가기</Link></section>
  </>;
}
