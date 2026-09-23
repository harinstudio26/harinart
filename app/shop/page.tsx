import { pageMetadata } from '../seo';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ShopCatalog } from './shop-catalog';

export const metadata = pageMetadata("/shop","작품샵","하린문화예술의 전통매듭·칠보·액세서리와 그림 작품을 살펴보세요. 작품별 소개와 구매·주문제작 상담을 안내합니다.");

export default function Shop(){return <>
  <section className="page-hero"><p className="eyebrow">HARIN ART SHOP</p><h1>손으로 만든 작품을<br/>일상 가까이</h1><p className="lead">전통매듭, 칠보, 액세서리와 그림 작품을 카테고리별로 살펴보세요.</p><a href="https://smartstore.naver.com/yjgongbang" className="button" target="_blank" rel="noopener noreferrer" style={{marginTop:24}}>네이버 스마트스토어 바로가기 ↗</a><p className="notice" style={{marginTop:12}}>새 창에서 상품과 구매 정보를 확인하실 수 있습니다.</p></section>
  <section className="page-content">
    <div className="shop-intro"><div><p className="eyebrow">ARTWORK NOTICE</p><h2>확인된 작품 정보부터 등록합니다</h2></div><p>현재 작품 정보는 등록 준비 중입니다. 실제 사진, 작품명, 재료, 크기와 가격은 확인된 내용만 업데이트하며 임의의 상품 정보는 표시하지 않습니다.</p></div>
    <ShopCatalog/>
    <div className="page-cta"><div><h3>작품이나 주문제작이 궁금하신가요?</h3><p>원하는 종류, 수량과 일정을 남겨주시면 가능한 범위를 확인해 안내할 수 있습니다.</p></div><Link href="/contact?type=custom" className="button">작품·주문제작 문의 <ArrowRight size={16}/></Link></div>
  </section>
</>}
