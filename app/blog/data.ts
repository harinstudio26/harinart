export type BlogPost = { category: string; title: string; excerpt: string; status: string; href?: string; image?: string; imageAlt?: string };

export const posts: BlogPost[]=[
  {category:'수공예',title:'원석 헤어핀, 작은 장식에 담은 색과 손작업 이야기',excerpt:'꽃과 원석, 새 모양 자개가 만난 세 가지 헤어핀. 유정아트공방의 작품 사진으로 색 조합과 손작업의 매력을 만나보세요.',status:'작품 기록 · 원문 2018.06.21',href:'/blog/gemstone-hairpins',image:'/images/blog/gemstone-hairpin-1.jpg',imageAlt:'꽃과 원석, 자개로 장식한 수공예 헤어핀 세 작품'},
  {category:'수업 후기',title:'수업 현장 이야기',excerpt:'실제 수업 후기와 참여 과정은 확인된 기록부터 차근차근 소개합니다.',status:'콘텐츠 준비 중'},
  {category:'공예 이야기',title:'손으로 만드는 공예의 과정',excerpt:'전통매듭, 칠보와 액세서리 공예의 재료와 만드는 즐거움을 정리합니다.',status:'콘텐츠 준비 중'},
  {category:'강의 소식',title:'기관·단체 프로그램 소식',excerpt:'학교, 복지기관, 기업과 단체에서 진행하는 프로그램 소식을 실제 일정 기준으로 전합니다.',status:'콘텐츠 준비 중'},
  {category:'AI 활용',title:'창작과 홍보를 위한 AI 활용',excerpt:'이미지, 블로그, SNS와 강의자료 등 실제 업무에 쓰는 AI 활용법을 다룹니다.',status:'콘텐츠 준비 중'},
  {category:'문화예술 이야기',title:'일상 속 예술 이야기',excerpt:'공예와 그림, 글씨가 일상에 머무는 방식과 창작의 이야기를 나눕니다.',status:'콘텐츠 준비 중'},
];
