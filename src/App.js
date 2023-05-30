
import './App.css';
import NavBar from  './componentes/NavBar.jsx'
import Header from './componentes/Header.jsx'
import InicioCliente from './componentes/InicioCliente';
import Fotter from './componentes/Footer';
import Productos from './componentes/Productos';



function App() {
  return (
  <section>
    <NavBar/>
    <Header/>
    <InicioCliente/>
    <Productos/>
    <Fotter/>
  </section>
  );
}

export default App;
