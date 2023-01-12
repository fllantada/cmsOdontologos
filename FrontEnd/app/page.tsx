'use client'
import Citas from './componentes/citas/citas'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user } = useUser();

  return (

    <div >
      {user && (<Citas />) }
 {console.log(user)}
    </div>

  )
}
