import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {
  return (
    <div className="col-span-6 lg:col-span-8 overflow-scroll md:h-screen " >
      <h2 className="font-black text-3xl text-center w-full " >ListadoPacientes </h2>
      <p className="text-xl mt-2 mb-2 text-center" >Administra tus
        <span className="text-indigo-600 font-bold  mx-1" >
          pacientes y citas
        </span>
      </p>
      <Paciente />
    </div>

  );
};
