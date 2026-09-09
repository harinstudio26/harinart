export type ProductStatus='판매중'|'품절'|'주문제작';
export type Product={slug:string;category:string;name:string;description:string;price:string;status:ProductStatus};
export const products:Product[]=[
  {slug:'traditional-knot-01',category:'전통매듭',name:'[상품명 입력 예정]',description:'전통의 아름다움을 일상 가까이에서 만나는 수공예 작품',price:'[가격 입력 예정]',status:'판매중'},
  {slug:'cloisonne-01',category:'칠보공예',name:'[상품명 입력 예정]',description:'빛과 색이 섬세하게 어우러진 칠보공예 작품',price:'[가격 입력 예정]',status:'주문제작'},
  {slug:'accessory-01',category:'액세서리',name:'[상품명 입력 예정]',description:'다양한 소재를 손으로 엮어 완성한 특별한 액세서리',price:'[가격 입력 예정]',status:'판매중'},
  {slug:'painting-01',category:'그림·회화',name:'[상품명 입력 예정]',description:'공간에 따뜻한 감성을 더하는 그림 작품',price:'[가격 입력 예정]',status:'품절'},
  {slug:'calligraphy-01',category:'캘리그라피',name:'[상품명 입력 예정]',description:'마음을 담은 문장을 손글씨로 표현한 작품',price:'[가격 입력 예정]',status:'주문제작'},
  {slug:'urban-sketch-01',category:'어반스케치',name:'[상품명 입력 예정]',description:'일상의 풍경을 선과 색으로 기록한 드로잉 작품',price:'[가격 입력 예정]',status:'판매중'},
];
