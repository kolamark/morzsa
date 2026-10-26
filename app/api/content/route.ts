import {getDb} from '../../../db';
import {entries} from '../../../db/schema';
import {eq,asc} from 'drizzle-orm';
export const dynamic='force-dynamic';
export async function GET(){try{const rows=await getDb().select().from(entries).where(eq(entries.visible,true)).orderBy(asc(entries.position),asc(entries.id));return Response.json(rows.map(r=>({...r,data:JSON.parse(r.data)})))}catch{return Response.json([], {status:200})}}
