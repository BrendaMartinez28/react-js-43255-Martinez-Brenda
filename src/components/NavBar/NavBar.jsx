import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <h2>PERITASTECH</h2>
            <nav>
                <ul>
                    <li>PC ARMADAS</li>
                    <li>PLACAS DE VIDEO</li>
                    <li>SILLAS GAMER</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}
export default NavBar