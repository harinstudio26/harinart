import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../data';

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const p=products.find(x=>x.slug===slug);return p?{title:`${p.name} | 작품샵`,description:p.description}:{title:'작품을 찾을 수 없습니다'}}

export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params;const p=products.find(x=>x.slug===slug);if(!p)notFound();const index=products.findIndex(x=>x.slug===slug);
  return <section className="page-content product-detail"><div className="product-detail-image"><div className={`product-visual visual-${index+1}`}><span>{p.category}</span><small>ARTWORK PHOTO<br/>COMING SOON</small></div></div><div><p className="eyebrow">{p.category}</p><h1>{p.name}</h1><p className="body">{p.description}</p><dl><dt>가격</dt><dd>{p.price}</dd><dt>판매상태</dt><dd>{p.status}</dd></dl><p className="notice">실제 작품명, 가격과 상세 사진은 준비되는 대로 업데이트됩니다. 현재는 구매 또는 주문제작 문의가 가능합니다.</p><Link className="button" href={`/contact?type=product&product=${p.slug}`}>구매 문의하기</Link></div></section>
}
