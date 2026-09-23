import { Breadcrumbs } from '../breadcrumbs';
import { pageMetadata } from '../seo';
import{StandardPage,pageData}from'../components';export const metadata = pageMetadata("/about","하린문화예술 소개","하린문화예술의 브랜드 이야기와 활동 분야, 운영 철학을 소개합니다. 손으로 만드는 즐거움과 참여자의 속도를 존중하는 문화예술 교육을 지향합니다.");export default function Page(){return <><Breadcrumbs items={[{"name": "소개", "path": "/about"}]}/><StandardPage data={pageData.about}/></>}
