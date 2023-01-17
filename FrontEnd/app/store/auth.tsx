import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Perfil {
  email: string;
  role: "admin" | "user" | "guest";
}

type State = {
  usuario: Perfil;
};

type Actions = {
  setPerfil: (usuario: Perfil) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      usuario: {} as Perfil,
      setPerfil: (usuario: Perfil) => set((state) => ({ ...state, usuario })),
    }),
    {
      name: "auth",
    }
  )
);
