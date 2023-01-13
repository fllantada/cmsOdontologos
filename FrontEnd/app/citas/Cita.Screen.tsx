"use client";

import { Cita } from "./domain/Cita.entity";
import getMockCitas from "./infraestructura/servicios/getMockCitas";
import CardCita from "./componentes/CardCita";

export const CitasScreen: React.FC = () => {
  let citas: Cita[] = getMockCitas();

  return (
    <div>
      {citas.map((cita: Cita) => {
        return <CardCita cita={cita} />;
      })}
    </div>
  );
};
