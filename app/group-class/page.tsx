import { pageMetadata } from '../seo';
import{StandardPage,pageData}from'../components';
export const metadata = pageMetadata("/group-class","기관 출강·단체수업","학교·복지기관·기업·지역단체·평생학습기관·문화센터를 위한 문화예술 출강 안내. 참여 대상, 인원, 시간과 예산에 맞춰 공예·감성예술 프로그램을 구성합니다.");
export default function Page(){return <StandardPage data={pageData.group}/>}
