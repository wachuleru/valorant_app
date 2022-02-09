import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';
export default function CartWidget() {
    const cart = useCart();
    const cantidad= cart.tamano();
    
    console.log("tamaño cantidad",cantidad);
    /* const items=cart.items; */
    return (
        <div className="text-white">
            {cantidad===0?null:<Link className="btn btn-primary" to="/cart">{cantidad}<i className="fas fa-shopping-cart "></i></Link>}
        </div>
    )
}
