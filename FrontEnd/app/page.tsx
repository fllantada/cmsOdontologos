'use client'
import Citas from './componentes/citas/citas'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuthStore } from './store/auth'
import { useState  } from "react";
import axios from "axios";


export default function Home() {
  const { user }: any = useUser();
  const [usuario, setUsuario] = useState({
    email: user?.email,
    nickname: user?.nickname,
  });


  const setProfile: any = useAuthStore( state => state.setPerfil ) 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/auth/login", usuario);
    setProfile(user);
  };


  return (

    <div onSubmit={handleSubmit}>  
    <h1>HOLA {user?.name}</h1>
      {user && (<Citas />) }   
    </div>

  )
}
