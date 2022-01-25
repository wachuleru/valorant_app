import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';
export default function CartWidget() {
    const cart = useCart();
    /* const items=cart.items; */
    return (
        <div className="text-white">
            {cart.length===0?null:<Link className="btn btn-primary" to="/cart">{cart.length}<i className="fas fa-shopping-cart "></i></Link>}
        </div>
    )
}
