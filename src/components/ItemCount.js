import React, { useState } from 'react';

import { useCart } from '../hooks/useCart'
export default function ItemCount({agente, precio, stock}) {
    const cart = useCart()
    /* const cartItem=cart.getItem(agente.uuid); */
    const [cantidad,setCantidad]=useState(0);
    
    
    function onAddToCart() {
        /* console.log(agente.displayName, cantidad, precio, stock); */
        cart.addItem({ ...agente,precio, cantidad })
        /* console.log("items",cart.items); */
    }
    
    function addCantidad(){
        if(cantidad <stock){
            setCantidad(cantidad + 1);
        }
        /* console.log(cantidad); */
    }

    function subCantidad(){
        if(cantidad >0){
            setCantidad(cantidad -1);
        }
        /* console.log(cantidad); */
    }

  return <div>
            <div className="btn-group" role="group" style={{maxWidth:"70%"}}>
                <button type="button" className="btn btn-sm btn-danger" onClick={subCantidad} style={{maxWidth:"20%"}}>-</button>
                <input type="number" className="btn  btn-sm btn-disable bg-light" value={cantidad} style={{maxWidth:"60%"}} readOnly/>
                <button type="button" className="btn btn-sm btn-success" onClick={addCantidad} style={{maxWidth:"20%"}}>+</button>
            </div>
            <br></br>
            <button type="button" className='btn btn-primary mt-1' onClick={onAddToCart} disabled={stock ===0}>Agregar al Carrito</button>
        </div>;
}
