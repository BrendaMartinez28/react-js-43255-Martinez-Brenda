import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
          <Link to= '/'>
          <h2>PERITASTECH</h2>
          </Link>
          
            <div className="Categories">
                <NavLink to={`category/PlacasDeVideo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={`category/SillasGamer`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={`category/Procesadores`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
           
            </div>
           
            <CartWidget />
        </nav>
    )
}
export default NavBar