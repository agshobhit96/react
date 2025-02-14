import { useDispatch, useSelector } from 'react-redux';
import ResMenuItemDetail from './ResMenuItemDetail';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const itemCards = useSelector((store) => store.cart.items);
    console.log(itemCards);

    clearCartEvt = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart-container">
            <button style={{ position: 'absolute', right: '25%', top: '275px'}}
            onClick={clearCartEvt}>Clear Cart</button>
            <h1>CART</h1>
            <br></br>
            <h3>Items in Cart</h3>
            {
                itemCards.length === 0 ? ( <h4>No items in cart</h4>)
                :
                itemCards.map((item) => (
                    <ResMenuItemDetail key={item.card?.info?.id} item={item} />
                ))

                
            }
        </div>
    );
};

export default Cart;