import React, { useContext } from 'react';
import { cartContext } from '../../App';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Cart = () => {
    const cart = useContext(cartContext);
    const history = useHistory();
    console.log(cart)
    let totalPrice = 0;

    for(const item of cart){
        totalPrice = totalPrice + item.price;
    }
   

    const handleReload =() =>{  
        history.push('/')
    }

    return (
        <div className="row container cart">
            <div className="col-md-9">
                <div className="row row-cols-md-2 g-2 mt-4">
                {
                cart.map(cartItem => <CartItem key= {cartItem.key} course={cartItem}></CartItem>)
                }
                </div>
            </div>
            <div className="col-md-3 mt-5 me-auto cart-area">
                <h3>Course Ordered: {cart.length}</h3>
                <br />
                <h4>Total Price : ${totalPrice.toFixed(2)} </h4>
                <br />
                <button onClick={handleReload} className="btn btn-danger mt-5"><FontAwesomeIcon icon={faShoppingCart}/> Check Out</button>
            </div>
        </div>
    );
};

export default Cart;