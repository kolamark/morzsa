import {getDb} from '../../../db';
import {entries} from '../../../db/schema';
import {eq,asc} from 'drizzle-orm';
export const dynamic='force-dynamic';
const origin='https://kolamark.github.io';
const cors={'Access-Control-Allow-Origin':origin,'Vary':'Origin','Cache-Control':'no-store'};
export async function GET(){try{const rows=await getDb().select().from(entries).where(eq(entries.visible,true)).orderBy(asc(entries.position),asc(entries.id));return Response.json(rows.map(r=>({...r,data:JSON.parse(r.data)})),{headers:cors})}catch{return Response.json([],{headers:cors})}}
