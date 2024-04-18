import { ClerkProvider } from "@clerk/nextjs"

import '../globals.css'

export const metadata={
    title:'Threads',
    description:'A next.js 13 Threads application'

}
export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={` bg-dark-1`}>
                    {children}
                </body>

            </html>
        </ClerkProvider>
    )
}