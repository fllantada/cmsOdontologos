
'use client'
import { CitasScreen } from "./citas/Cita.Screen";
import { UserContext, useUser } from '@auth0/nextjs-auth0/client';
import { useAuthStore } from './Auth/store/auth'
import { useState  } from "react"
import axios from "axios";


export default function Home() {
  const { user }: UserContext = useUser();
  const [usuario, setUsuario] = useState({
    email: user?.email || '',
    nickname: user?.nickname || '',
  });


  const addUser = useAuthStore( state => state.addUser ) 

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    addUser(usuario); // agrego al estado el usuario agregado
    const res = await axios.post("http://localhost:3001/api/auth/login", usuario); // mando al back el usuario registrado
    return res
  };



  return (

    <div onSubmit={handleSubmit}>  
    <h1>HOLA {user?.name}</h1>
      {user && (<CitasScreen />) }   
    </div>
  )
}
