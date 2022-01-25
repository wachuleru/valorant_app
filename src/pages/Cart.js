import React from 'react'
import { CartList } from '../components/CartList'
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import Titulo from '../components/Titulo'

export default function Cart() {
    const cart=useCart();
    return (
        <React.Fragment>
            <Titulo texto="Carrito"/>
           {cart.length===0? <React.Fragment><Titulo texto="No hay productos en el carrito"/> <Link className="btn btn-primary" to="/">Volver al Inicio</Link></React.Fragment>:<CartList />}
        </React.Fragment>
    )
}
