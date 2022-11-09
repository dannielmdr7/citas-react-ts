import { Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from 'react';
import { PacienteInterface } from '../interfaces';
import { Error } from './Error';

interface Props {
  setPacientes: Dispatch<SetStateAction<PacienteInterface[]>>
  setPaciente: Dispatch<SetStateAction<PacienteInterface>>
  pacientes: PacienteInterface[];
  paciente: PacienteInterface;

}

export const Formulario = ({ setPacientes, setPaciente, pacientes, paciente }: Props) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('')

  useEffect(() => {
    if (paciente.id !== "") {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  // Validación de errores en formulario
  const [error, setError] = useState(false)
  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return
    }
    setError(false);
    const newPaciente: PacienteInterface = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: ''
    }
    if (paciente.id) {
      newPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? newPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({ email: '', fecha: '', id: '', nombre: '', propietario: '', sintomas: '' });

    } else {
      newPaciente.id = Math.random().toString(36);
      setPacientes([...pacientes, newPaciente]);
    }

    // Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  return (
    <div className="col-span-6 lg:col-span-4">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="font-lg mt-2 text-center mb-2">Añade pacientes y
        <span className="text-indigo-600 mx-2 font-bold">
          Administralos
        </span>
      </p>
      <form className="bg-white shadow-md rounded-lg px-2 py-4 mt-4" onSubmit={handelSubmit} >
        {error && <Error mensaje='Hay un campo vacio en el formulario' />}
        <div className="mb-2" >
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-2" >
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">
            Nombre del propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-2" >
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2" >
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-2" >
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
          className="bg-indigo-600 hover:bg-indigo-700 transition-all cursor-pointer w-full p-3 text-white font-bold text-center" />
      </form>
    </div>
  );
};
