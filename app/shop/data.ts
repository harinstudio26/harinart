import rawProducts from './products.json';

export type ProductStatus='판매중'|'품절'|'주문제작'|'등록준비';
export type Product={
  slug:string;
  category:string;
  name:string;
  description:string;
  price:string;
  status:ProductStatus;
  image?:string;
};

export const products=rawProducts as Product[];
