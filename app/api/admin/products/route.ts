import { NextResponse } from 'next/server';

export const runtime='nodejs';

const API='https://api.github.com';
const REPO=process.env.GITHUB_REPO || 'harinstudio26/harinart';
const BRANCH=process.env.GITHUB_BRANCH || 'main';
const PRODUCTS_PATH='app/shop/products.json';

const ghHeaders=(token:string)=>({
  Authorization:`Bearer ${token}`,
  Accept:'application/vnd.github+json',
  'X-GitHub-Api-Version':'2022-11-28',
  'Content-Type':'application/json',
});

async function gh(url:string,token:string,init?:RequestInit){
  const res=await fetch(`${API}${url}`,{...init,headers:{...ghHeaders(token),...(init?.headers||{})},cache:'no-store'});
  if(!res.ok){
    const text=await res.text();
    throw new Error(`GitHub API ${res.status}: ${text}`);
  }
  return res.json();
}

function extensionFrom(file:File){
  const map:Record<string,string>={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'};
  return map[file.type] || '';
}

function cleanText(value:FormDataEntryValue|null,max=500){
  return typeof value==='string'?value.trim().slice(0,max):'';
}

async function readProducts(token:string){
  const info=await gh(`/repos/${REPO}/contents/${PRODUCTS_PATH}?ref=${BRANCH}`,token);
  const decoded=Buffer.from(info.content,'base64').toString('utf8');
  return JSON.parse(decoded) as Array<Record<string,unknown>>;
}

async function commitProduct(token:string,product:Record<string,unknown>,image:File){
  const ref=await gh(`/repos/${REPO}/git/ref/heads/${BRANCH}`,token);
  const parentSha=ref.object.sha as string;
  const parentCommit=await gh(`/repos/${REPO}/git/commits/${parentSha}`,token);
  const baseTree=parentCommit.tree.sha as string;
  const products=await readProducts(token);
  products.unshift(product);

  const imageBase64=Buffer.from(await image.arrayBuffer()).toString('base64');
  const imageBlob=await gh(`/repos/${REPO}/git/blobs`,token,{method:'POST',body:JSON.stringify({content:imageBase64,encoding:'base64'})});
  const dataBlob=await gh(`/repos/${REPO}/git/blobs`,token,{method:'POST',body:JSON.stringify({content:JSON.stringify(products,null,2)+'\n',encoding:'utf-8'})});

  const tree=await gh(`/repos/${REPO}/git/trees`,token,{method:'POST',body:JSON.stringify({
    base_tree:baseTree,
    tree:[
      {path:String(product.image).replace(/^\//,''),mode:'100644',type:'blob',sha:imageBlob.sha},
      {path:PRODUCTS_PATH,mode:'100644',type:'blob',sha:dataBlob.sha},
    ],
  })});

  const commit=await gh(`/repos/${REPO}/git/commits`,token,{method:'POST',body:JSON.stringify({
    message:`작품 등록: ${product.name}`,
    tree:tree.sha,
    parents:[parentSha],
  })});

  await gh(`/repos/${REPO}/git/refs/heads/${BRANCH}`,token,{method:'PATCH',body:JSON.stringify({sha:commit.sha,force:false})});
  return commit.sha as string;
}

export async function POST(request:Request){
  try{
    const token=process.env.GITHUB_TOKEN;
    const adminPassword=process.env.ADMIN_PASSWORD;
    if(!token || !adminPassword){
      return NextResponse.json({ok:false,message:'관리자 연결 설정이 아직 완료되지 않았습니다.'},{status:503});
    }

    const form=await request.formData();
    const password=cleanText(form.get('password'),200);
    if(password!==adminPassword){
      return NextResponse.json({ok:false,message:'관리자 비밀번호가 올바르지 않습니다.'},{status:401});
    }

    const image=form.get('image');
    if(!(image instanceof File) || image.size===0){
      return NextResponse.json({ok:false,message:'작품 사진을 선택해주세요.'},{status:400});
    }
    if(image.size>8*1024*1024){
      return NextResponse.json({ok:false,message:'사진은 8MB 이하로 올려주세요.'},{status:400});
    }
    const ext=extensionFrom(image);
    if(!ext){
      return NextResponse.json({ok:false,message:'JPG, PNG, WebP 사진만 등록할 수 있습니다.'},{status:400});
    }

    const category=cleanText(form.get('category'),50);
    const name=cleanText(form.get('name'),120);
    const price=cleanText(form.get('price'),60);
    const status=cleanText(form.get('status'),30);
    const description=cleanText(form.get('description'),700);
    if(!category || !name || !price || !status){
      return NextResponse.json({ok:false,message:'카테고리, 작품명, 가격, 판매상태를 확인해주세요.'},{status:400});
    }

    const slug=`work-${Date.now()}`;
    const imagePath=`/images/products/${slug}.${ext}`;
    const product={slug,category,name,description:description||'하린문화예술 작품입니다.',price,status,image:imagePath};
    const commitSha=await commitProduct(token,product,image);

    return NextResponse.json({ok:true,message:'작품 등록이 완료되었습니다. Vercel 자동 배포 후 작품샵에 표시됩니다.',slug,commitSha});
  }catch(error){
    console.error(error);
    return NextResponse.json({ok:false,message:'등록 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'},{status:500});
  }
}
