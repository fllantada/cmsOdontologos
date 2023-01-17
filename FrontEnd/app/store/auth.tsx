import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {

  perfil: string;

};

type Actions = {
  setPerfil: (perfil: string) => void;

};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      perfil: '',
      setPerfil: (perfil: string) => set((state) => ({ perfil })),
 
    }),
    {
      name: "auth",
    }
  ));
