import { create } from "zustand";
import { persist } from "zustand/middleware";

//Contexto Auth
// store  --> este estore
// services --> getMockPerfilService (email:String) --> Promise<Perfil>

export interface Perfil {
  email: string;
  role: "admin" | "user" | "guest";
} //se importa de entidades

type State = {
  usuario: Perfil;
};

type Actions = {
  setPerfil: (usuario: Perfil) => void;
  getPerfil: (email: string) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      usuario: {} as Perfil,
      setPerfil: (usuario: Perfil) => set((state) => ({ ...state, usuario })),

      getPerfil: (email: string) => {
        //logica para setear un perfil desde getMockPerfilService
      }, //consumir un servicio  en carpeta services que llame a una api y devuelva PErfil
    }),

    {
      name: "auth",
    }
  )
);

//
