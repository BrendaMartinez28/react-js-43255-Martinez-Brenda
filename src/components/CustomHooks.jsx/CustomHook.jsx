import { useContador } from "./useContador";
import { useFetch } from "./useFetch";


const CustomHooks = () => {
    const { contador, aumentarContador, disminuirContador } = useContador(1, 10)
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            <h2>CustomHooks: Contador</h2>
            <button onClick={disminuirContador}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarContador}> + </button>
            <button>Agregar al carrito</button>

            <hr />

            <h2>Fetch de Datos randoms: </h2>
            {data && data.map((usuario) => <p key={usuario.id}> {usuario.name} </p>)}

            </div>

            )
            }

            export default CustomHooks