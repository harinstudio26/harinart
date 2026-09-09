const base='https://harinart.vercel.app';
export default function sitemap(){return['','about','craft','group-class','healing-art','ai-class','shop','gallery','blog','contact'].map(path=>({url:path?`${base}/${path}`:base,lastModified:new Date(),changeFrequency:path==='blog'?'weekly':'monthly' as const,priority:path===''?1:path==='contact'||path==='shop'?0.9:0.8}))}
