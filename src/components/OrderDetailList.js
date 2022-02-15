
import React from "react";

import CartItem from "./CartItem";

export default function OrderDetailList({cart}){


    console.log("orderdetaillist",cart);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 ">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                        <tbody>
                        {cart.items.map(item =>{
                            console.log(item.displayName)
                            return <CartItem key={item.uuid} item={item} delete={false}/>
                        })}
                            <tr>
                                <td></td>
                                <th>TOTAL</th>
                                <td></td>
                                <td>$ {cart.total}</td>

                            </tr>
                        </tbody>

                    </table>
                </div>
                
            </div>
            
        </div>
    )
}