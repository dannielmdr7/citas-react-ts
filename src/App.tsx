import { Formulario, Header, ListadoPacientes } from './components';
import { useState, useEffect } from 'react';
import { PacienteInterface } from './interfaces';

function App() {
  const [pacientes, setPacientes] = useState<PacienteInterface[]>([]);
  const [paciente, setPaciente] = useState<PacienteInterface>({ email: '', fecha: '', id: '', nombre: '', propietario: '', sintomas: '' });
  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLocal = localStorage.getItem('pacientes');
      if (pacientesLocal) {
        const pacientesGuardados = JSON.parse(pacientesLocal);
        setPacientes(pacientesGuardados);
      }
    }
    obtenerLs()
  }, [])


  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, 50);
  }, [pacientes])

  const eliminarPaciente = (id: string) => {
    const pacientesFilter = pacientes.filter(pacienteState => pacienteState.id !== id);
    setPacientes(pacientesFilter);
  }
  return (
    <div className='container mx-auto mt-4' >
      <Header />
      <div className='grid md:grid-cols-12' >
        <Formulario setPacientes={setPacientes} setPaciente={setPaciente} pacientes={pacientes} paciente={paciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
