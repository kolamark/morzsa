import {requireChatGPTUser} from '../chatgpt-auth';
import AdminClient from './ui';
export const dynamic='force-dynamic';
export default async function Admin(){const user=await requireChatGPTUser('/admin');if(user.email.toLowerCase()!=='kolarovszki.mark@gmail.com')return <main className="admin"><h1>Nincs hozzáférés</h1></main>;return <AdminClient/>}
