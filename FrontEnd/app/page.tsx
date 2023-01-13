'use client'
import Citas from './componentes/citas/citas'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuthStore } from './store/auth'


export default function Home() {
  const { user } = useUser();

  const setProfile = useAuthStore( state => state.setPerfil ) 

const handleSubmit = ( e: any) => {
  e.preventDefault();
  setProfile( user.name )
}

  return (
<form onChange={(e) => handleSubmit(e)}>
    <div >
      {user && (<Citas />) }
    </div>
</form>
  )
}
