
import './App.css';
import Categorias from './components/Categorias/Categorias';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>

      <NavBar/>
        <Categorias />
        <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>


        </Routes>

      </BrowserRouter>
      <div>
        <hr />
      </div>
    </>

  );
}

export default App;
