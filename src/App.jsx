
import './App.css';
import './components/CartWidget/CartWidget.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <h1 style={{color:"blueviolet"}}>BIENVENIDOS A PERITASTECH</h1>
    <NavBar/>
    <ItemListContainer greeting={'LO ULTIMO EN TECNOLOGIA'}/>
    </div>
    
  );
}

export default App;
