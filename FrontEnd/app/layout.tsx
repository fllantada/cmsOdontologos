// import Navegation from './componentes/navegation';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import SearchAppBar from './navBar/componentes/navBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
    <html lang="en">
      <head />
      <body>
       <SearchAppBar/> 
        {children}
        </body>
    </html>
    </UserProvider>
  )
}
