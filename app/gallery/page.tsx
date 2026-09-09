import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GalleryCollection, type GalleryItem } from './gallery-collection';

export const metadata={title:'갤러리',description:'하린문화예술의 공예 작품, 수업 현장, 출강, 캘리그라피와 어반스케치 활동 기록'};
export const dynamic='force-static';

const folderConfig=[
  {folder:'knot',category:'전통매듭',label:'전통매듭 작품',alt:'하린문화예술 전통매듭 실제 작품'},
  {folder:'enamel',category:'칠보공예',label:'칠보공예 작품',alt:'하린문화예술 칠보공예 실제 작품'},
  {folder:'class',category:'출강·수업',label:'출강·수업 현장',alt:'하린문화예술 기관 및 단체 수업 실제 현장'},
  {folder:'urban',category:'어반스케치',label:'어반스케치 작품',alt:'하린문화예술 어반스케치 실제 작품'},
] as const;

const legacyItems=[
  {file:'knot-03.webp',category:'전통매듭',label:'전통매듭 작품',alt:'하린문화예술 전통매듭 실제 작품'},
  {file:'enamel-02.webp',category:'칠보공예',label:'칠보공예 작품',alt:'하린문화예술 칠보공예 실제 작품'},
  {file:'class-01.webp',category:'출강·수업',label:'출강·수업 현장',alt:'하린문화예술 기관 단체 출강 실제 현장'},
  {file:'class-02.webp',category:'출강·수업',label:'공예 수업 현장',alt:'하린문화예술 공예 수업 실제 현장'},
  {file:'urban-01.webp',category:'어반스케치',label:'어반스케치 작품',alt:'하린문화예술 어반스케치 실제 작품'},
] as const;

function getGalleryItems():GalleryItem[]{
  const root=path.join(process.cwd(),'public','images','real');
  const supported=/\.(jpe?g|png|webp|avif)$/i;
  const items:GalleryItem[]=[];

  for(const config of folderConfig){
    const dir=path.join(root,config.folder);
    if(!fs.existsSync(dir)) continue;
    const files=fs.readdirSync(dir,{withFileTypes:true})
      .filter(entry=>entry.isFile()&&supported.test(entry.name)&&!entry.name.startsWith('.'))
      .map(entry=>entry.name)
      .sort((a,b)=>a.localeCompare(b,'ko',{numeric:true}));

    files.forEach(file=>items.push({
      category:config.category,
      label:config.label,
      src:`/images/real/${config.folder}/${encodeURIComponent(file)}`,
      alt:config.alt,
    }));
  }

  for(const item of legacyItems){
    const fullPath=path.join(root,item.file);
    if(fs.existsSync(fullPath)) items.push({
      category:item.category,
      label:item.label,
      src:`/images/real/${item.file}`,
      alt:item.alt,
    });
  }

  return items;
}

export default function Page(){
  const items=getGalleryItems();
  return <>
    <section className="page-hero"><p className="eyebrow">GALLERY</p><h1>손끝에서 피어난<br/>우리의 순간들</h1><p className="lead">작품과 수업, 출강과 전시의 기록을 실제 자료가 준비되는 순서대로 모아갑니다.</p></section>
    <section className="page-content">
      <div className="content-heading"><p className="eyebrow">HARIN MOMENTS</p><h2>분야별 기록</h2><p>카테고리를 눌러 보고 싶은 활동을 골라볼 수 있습니다.</p></div>
      <GalleryCollection items={items}/>
      <div className="page-cta"><div><h3>이런 프로그램을 우리 기관에서도 진행하고 싶으신가요?</h3><p>관심 분야와 대상, 인원, 일정을 알려주시면 출강 프로그램 상담으로 연결됩니다.</p></div><Link href="/contact?type=group" className="button">출강 문의 <ArrowRight size={16}/></Link></div>
    </section>
  </>;
}
