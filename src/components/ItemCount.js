import React, { useState,useContext } from 'react';

import { useCart } from '../hooks/useCart'
export default function ItemCount({agente, precio, stock}) {
    const cart = useCart()
    const cartItem=cart.getItem(agente.uuid);
    const [cantidad,setCantidad]=useState(0);
    
    
    function onAddToCart() {
        console.log(agente.displayName, cantidad, precio, stock);
        cart.addItem({ ...agente,precio, cantidad })
        console.log("items",cart.items);
    }
    
    function addCantidad(){
        if(cantidad <stock){
            setCantidad(cantidad + 1);
        }
        console.log(cantidad);
    }

    function subCantidad(){
        if(cantidad >0){
            setCantidad(cantidad -1);
        }
        console.log(cantidad);
    }

  return <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={subCantidad}>-</button>
                <input type="text" className="btn  btn-disable bg-light" value={cantidad} readOnly/>
                <button type="button" className="btn btn-success" onClick={addCantidad}>+</button>
            </div>
            <br></br>
            <button type="button" className='btn btn-primary' onClick={onAddToCart} disabled={stock ===0}>Agregar al Carrito</button>
        </div>;
}
