import { Dispatch, SetStateAction } from "react";
import { PacienteInterface } from "../interfaces"

interface Props {
  paciente: PacienteInterface;
  setPaciente: Dispatch<SetStateAction<PacienteInterface>>
  eliminarPaciente:(id:string) =>void
}
export const Paciente = ({ paciente, setPaciente, eliminarPaciente }: Props) => {
  return (
    <div className=" bg-white m-2 shadow-md px-2 py-4 rounded-md " >
      <p className="font-bold mb-2 text-gray-700 uppercase " >Nombre:
        <span className="mx-1 font-normal normal-case ">{paciente.nombre} </span>
      </p>
      <p className="font-bold mb-2 text-gray-700 uppercase " >
        Propietario:
        <span className="mx-1 font-normal normal-case "> {paciente.propietario} </span>
      </p>
      <p className="font-bold mb-2 text-gray-700 uppercase " >
        Email:
        <span className="mx-1 font-normal normal-case "> {paciente.email} </span>
      </p>
      <p className="font-bold mb-2 text-gray-700 uppercase " >
        Fecha Alta:
        <span className="mx-1 font-normal normal-case "> {paciente.fecha} </span>
      </p>
      <p className="font-bold mb-2 text-gray-700 uppercase " >
        Síntomas:
        <span className="mx-1 font-normal normal-case ">
          {paciente.sintomas} </span>
      </p>
      <div className=" flex justify-between mt-4 " >
        <button
          type="button"
          className=" px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md "
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button 
          type="button" 
          className=" px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md "
          onClick={ () => eliminarPaciente(paciente.id) }
          >
            Eliminar
            </button>
      </div>

    </div>
  )
}
