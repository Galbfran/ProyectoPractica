
import './App.css';
// COMPONENTES
import NavBar from  './componentes/NavBar/NavBar.jsx'
import Header from './componentes/Header/Header.jsx'
import InicioCliente from './componentes/InicioCliente/InicioCliente';
import Fotter from './componentes/Footer/Footer';
import Productos from './componentes/Productos/Productos';
import Detail from './componentes/Detail/Detail';
import About from './componentes/About/About';


//FUNCIONES




//HOOKS 
import { Route , Routes , useLocation , useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {

  const location = useLocation();
  const [access , setAccess] = useState(false);
  const navigate = useNavigate()
  const username = 'francogalbiati@gmail.com'
  const password = '123asdf'

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() =>{
    !access && navigate('/')
  },[])

  return (
  <section className='cuerpo'>
    {location.pathname === '/' ? <InicioCliente login={login}/> : <NavBar />}
    <Header/> 
    <Routes>
      <Route path='home' element={<Productos/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/detail/:detailId" element={<Detail/>}/>
    </Routes>
    <Fotter/>
  </section>
  );
}

export default App;
