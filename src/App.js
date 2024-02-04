import { useState } from 'react'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [cadastros, setCadastros] = useState([])

  const aoNovoCadastro = (cadastro) => {
    console.log(cadastro);
    setCadastros([...cadastros, cadastro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={cadastro => aoNovoCadastro(cadastro)}/>
    </div>
  );
}

export default App;
