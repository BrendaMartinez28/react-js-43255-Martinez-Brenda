import { Link, NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>PERITASTECH</h1>
            </Link>
            <nav>
                <ul>
                    <li>  <NavLink to={"/"}>Home </NavLink> </li>
                    <li> <NavLink to={"/placas de video"}>Placas de video</NavLink>   </li>
                    <li>  <NavLink to={"/ procesadores"}>Procesadores</NavLink>  </li>
                    <li> <NavLink to={"/sillas gamer"}>Sillas Gamer </NavLink>  </li>
                </ul>
            </nav>


        </header>
    )
}

export default Menu