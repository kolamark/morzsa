import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Morzsa • Sátoraljaújhely',description:'Smash burgerek, gyrosok és street food Sátoraljaújhelyen.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="hu"><body>{children}</body></html>}
