const inquiryTypes=new Set(['수강·체험 문의','출강·단체수업','AI 활용교육','타로·감성예술','작품 구매','주문제작','협업 문의','기타']);

class ContactError extends Error {
  constructor(message:string,public status=400,public field?:string){super(message);}
}

function value(data:FormData,name:string,label:string,max:number,required=false) {
  const raw=data.get(name);
  if(typeof raw!=='string')throw new ContactError(`${label}을(를) 확인해 주세요.`,400,name);
  const result=raw.trim();
  if(required&&!result)throw new ContactError(`${label}을(를) 입력해 주세요.`,400,name);
  if(result.length>max)throw new ContactError(`${label}이(가) 너무 깁니다.`,400,name);
  return result;
}

function json(body:unknown,status=200){return Response.json(body,{status,headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});}

export async function POST(request:Request) {
  try {
    const expectedOrigin=process.env.SITE_ORIGIN?.replace(/\/$/,'')||new URL(request.url).origin;
    if(request.headers.get('origin')!==expectedOrigin)throw new ContactError('페이지를 새로고침한 뒤 다시 시도해 주세요.',403);
    const length=Number(request.headers.get('content-length'));
    if(length&&length>100_000)throw new ContactError('입력 내용이 너무 큽니다.',413);
    const data=await request.formData();
    const name=value(data,'name','이름',60,true);
    const phone=value(data,'phone','연락처',30,true);
    const email=value(data,'email','이메일',254);
    const inquiryType=value(data,'type','문의 유형',30,true);
    const program=value(data,'interest','관심 프로그램 또는 작품',150);
    const preferredDate=value(data,'date','희망 날짜',10);
    const participants=value(data,'headcount','예상 인원',5);
    const message=value(data,'message','문의 내용',20_000,true);
    if(data.get('privacy')!=='on')throw new ContactError('개인정보 수집·이용에 동의해 주세요.',400,'privacy');
    if(!/^[0-9+()\-\s]{8,30}$/.test(phone))throw new ContactError('연락 가능한 전화번호를 입력해 주세요.',400,'phone');
    if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw new ContactError('이메일 주소를 확인해 주세요.',400,'email');
    if(!inquiryTypes.has(inquiryType))throw new ContactError('문의 유형을 선택해 주세요.',400,'type');
    if(preferredDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)||Number.isNaN(Date.parse(preferredDate))))throw new ContactError('희망 날짜를 확인해 주세요.',400,'date');
    if(participants&&!/^[1-9]\d{0,4}$/.test(participants))throw new ContactError('예상 인원을 1~99,999 사이의 정수로 입력해 주세요.',400,'headcount');

    const endpoint=process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const secret=process.env.GOOGLE_SHEETS_API_SECRET;
    if(!endpoint||!secret)throw new ContactError('문의 접수 연결을 준비 중입니다. 잠시 후 다시 이용해 주세요.',503);
    if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint))throw new ContactError('문의 접수 연결 설정을 확인 중입니다.',503);

    let response:Response;
    try {
      response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret,name,phone,email,inquiryType,program,preferredDate,participants,message,consent:true}),cache:'no-store',redirect:'follow',signal:AbortSignal.timeout(25_000)});
    }catch{
      throw new ContactError('접수 결과를 확인하지 못했습니다. 입력 내용을 유지한 채 잠시 후 다시 시도해 주세요.',503);
    }
    const result=await response.json().catch(()=>null) as {ok?:boolean}|null;
    if(!response.ok||result?.ok!==true)throw new ContactError('문의가 저장되지 않았습니다. 잠시 후 다시 시도해 주세요.',502);
    return json({ok:true,message:'문의가 정상적으로 접수되었습니다.'},201);
  }catch(error){
    const known=error instanceof ContactError;
    return json({ok:false,error:known?error.message:'요청을 처리하지 못했습니다. 다시 시도해 주세요.',field:known?error.field:undefined},known?error.status:500);
  }
}
