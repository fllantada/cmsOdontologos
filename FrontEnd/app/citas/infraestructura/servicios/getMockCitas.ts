import jsonData from "./mocker_citas.json";
import { Cita } from "../../domain/Cita.entity";

export default function getMockCitas(): Cita[] {
  const citas: Cita[] = jsonData as Cita[];

  return citas;
}
