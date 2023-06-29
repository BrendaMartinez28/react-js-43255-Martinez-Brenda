
import './App.css';
import './components/CartWidget/CartWidget.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import Categorias from './components/Categorias/Categorias';

function App() {
  return (
    <div className="App">
   
    <h1 style={{color:"blueviolet"}}>BIENVENIDOS A PERITASTECH</h1>
  
    <NavBar/> 
    <Categorias/> 
    <Contador stock={10} inicial={1}/>
    <ItemListContainer greeting={'LO ULTIMO EN TECNOLOGIA'}/>
   
    </div>
     
  );
}

export default App;
