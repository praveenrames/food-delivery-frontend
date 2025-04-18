import './Cart.css'
import { StoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr></hr>
                <br></br>
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div className="cart-items-item" key={item._id}>
                            <img src={url+'/images/'+item.image} alt='' />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price * cartItems[item._id]}</p>
                            <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>

                        </div>

                     );
                    }

                    return null;
                })}
            </div>
            <hr />
            <div className="card-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>

                        </div>
                    <button onClick={() => navigate('/Order')}>Proceed To Checkout</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If You have a promo code,Enter it here</p>
                    <div className="cart-promocode-input">
                    <input type='text' placeholder="Promo Code"/>
                    <button>Submit</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart