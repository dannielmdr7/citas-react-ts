
import { Dispatch, SetStateAction, useEffect } from 'react';
import { PacienteInterface } from "../interfaces";
import { Paciente } from "./Paciente";

interface Props {
  pacientes: PacienteInterface[]
  setPaciente: Dispatch<SetStateAction<PacienteInterface>>
  eliminarPaciente:(id:string) =>void
}

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }: Props) => {
  return (
    <div className="col-span-6 lg:col-span-8 overflow-scroll md:h-screen " >
      {
        pacientes.length > 0 ? (
          <div>
            <h2 className="font-black text-3xl text-center w-full " >ListadoPacientes </h2>
            <p className="text-xl mt-2 mb-2 text-center" >Administra tus
              <span className="text-indigo-600 font-bold  mx-1" >
                pacientes y citas
              </span>
            </p>
          </div>
        )
          :
          (
            <div>
              <h2 className="font-black text-3xl text-center w-full " >No hay pacientes </h2>
              <p className="text-xl mt-2 mb-2 text-center" >Comineza agregando pacientes
                <span className="text-indigo-600 font-bold  mx-1" >
                  y aparecerán en este lugar
                </span>
              </p>
            </div>
          )
      }

      {
        pacientes.map(paciente => {
          return (<Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}  />)
        })
      }
    </div>

  );
};
