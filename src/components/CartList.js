import React from "react";

import { useCart } from '../hooks/useCart';
import CartItem from "./CartItem";

export function CartList(){
    const cart=useCart()
    console.log("cartlist items", cart.items);
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
            <tbody>
            {cart.items.map(item =>{
                console.log(item.displayName)
                return <CartItem key={item.uuid} item={item}/>
            })}
            </tbody>
            </table>
        </div>
    )
}