import { FormEventHandler, useState } from 'react';
export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('')

  // Validación de errores en formulario
  const [error, setError] = useState(false)


  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return
    }
    setError(false)
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
        {error &&
          <div className=" bg-red-800 text-white text-center px-2 py-4 uppercase font-bold mb-2 rounded-md " >
            <p  > Hay un campo vacio en el formulario </p>
          </div>}
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
          value="Agregar Paciente"
          className="bg-indigo-600 hover:bg-indigo-700 transition-all cursor-pointer w-full p-3 text-white font-bold text-center" />
      </form>
    </div>
  );
};
