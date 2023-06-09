import cart from './assets/cart.png'
import './CartWidget.css'


const CartWidget = () => {

    return (
        <div>
            <img className='imgCarrito' src={cart} alt="cart-wdiget" />
            <strong>10</strong>
        </div>
    )

}
export default CartWidget