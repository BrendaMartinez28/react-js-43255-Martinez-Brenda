import { useState, useEffect } from "react"

const Categorias = () => {
    const[categoria, setCategoria] = useState("");

    useEffect( ()=> {
        document.title = `Categoria ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <div>
        <h2>Catergoria de productos</h2>
        <button onClick={()=> handleClick("Perifericos")}>Perifericos</button>
        <button onClick={()=> handleClick("Placas de video")}>Placas de video</button>
        <button onClick={()=> handleClick("Sillas gamer")}>Sillas gamer </button>
    </div>
  )
}

export default Categorias 