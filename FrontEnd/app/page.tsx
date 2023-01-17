"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { CitasScreen } from "./citas/Cita.Screen";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      {(user) && <CitasScreen />}
      {console.log(user)}
    </>
  );
}
