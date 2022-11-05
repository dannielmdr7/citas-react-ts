import { Formulario, Header, ListadoPacientes } from './components';

function App() {
  return (
    <div className='container mx-auto mt-4' >
      <Header />
      <div className='grid md:grid-cols-12' >
      <Formulario />
      <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
