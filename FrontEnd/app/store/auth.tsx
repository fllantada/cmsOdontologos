import create from "zustand";
import { persist } from "zustand/middleware";

export interface Profile {
  name: string;
  email: string;
}

type State = {

  perfil: Profile;

};

type Actions = {
  setPerfil: (perfil: Profile) => void;

};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      perfil: '',
      setPerfil: (perfil: Profile) => set((state) => ({ perfil })),
 
    }),
    {
      name: "auth",
    }
  ));
