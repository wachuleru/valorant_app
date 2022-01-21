import React, { useState } from 'react';

export default function ItemCount({agente, precio, stock}) {
    const [cantidad,setCantidad]=useState(1);
    function subCantidad(e){
        e.preventDefault();
        e.stopPropagation();
        if(cantidad===1 ){
            setCantidad(cantidad);
            console.log("se mantiene en 1 si le quiero restar mas");
        }else{
            setCantidad(cantidad-1);
        }
        console.log(precio,stock);
    }

    function addCantidad(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("cantidad vs stock",(cantidad===stock));
       if(cantidad === stock){
            setCantidad(cantidad);
            console.log("Se mantiene cantidad en el limite del stock si se quiere sumar mas");
        }else{
            setCantidad(cantidad+1);
        }
    }

    function addCart(){
        console.log("Se agrega al carrito "+agente.displayName+" una cantidad de "+cantidad+ " ("+precio+") Total: "+(cantidad*precio));
    }
  return <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={subCantidad}>-</button>
                <input type="text" className="btn  btn-disable bg-light" value={cantidad} readOnly/>
                <button type="button" className="btn btn-success" onClick={addCantidad}>+</button>
            </div>
            <br></br>
            <button type="button" className='btn btn-primary' onClick={addCart}>Agregar al Carrito</button>
        </div>;
}
