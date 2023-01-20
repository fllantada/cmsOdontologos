import { create } from "zustand";
import { persist } from "zustand/middleware";
import {AddUser} from '../domain/AddUser.entity'
import getMockPerfilService from '../services/getMockPerfilService'

//Contexto Auth
// store  --> este estore
// services --> getMockPerfilService (email:String) --> Promise<Perfil>

type State = {
  usuario: AddUser;
};

type Actions = {
  addUser: (usuario: AddUser) => void;
  getPerfil: (email: string) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      usuario: {} as AddUser,
      addUser: (usuario: AddUser) => set((state) => ({ ...state, usuario })),

      getPerfil: () =>{
        
        set((state) => ({ ...state, getMockPerfilService })) } 
        //logica para setear un perfil desde getMockPerfilService
       //consumir un servicio  en carpeta services que llame a una api y devuelva PErfil
    }),

    {
      name: "auth", // es el nombre del local storage
    }
  )
);

//