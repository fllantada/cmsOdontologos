import { User } from '../domain/Perfil.entity'
import axios from "axios";

export default async function getMockPerfilService():Promise<User>{
 
const perfil: User = await axios.get("http://localhost:3001/api/auth/perfil");

  return(perfil) ;
}

// pido del back los datos de perfil del usuario