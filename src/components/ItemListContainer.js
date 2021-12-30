import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import Item from './Item';
import Titulo from './Titulo';

function ItemListContainer() {
    const [count, setCount]=useState(0);
    const agentes= ['Sova','Sage','Skye','KillJoy','Raze'];
    const items=agentes.map(t  =>(
        <div className="container" key={"divContainer"+t}>
            <div className="row" key={"divrow"+t}>
                <div className="col" key={"divcol1"+t}>
                    <button className="btn btn-danger" key={"buttonSub"+t} onClick={()=> setCount(count-1)}>-</button>
                </div>
                <div className="col">
                    <Item valor={t} key={t} />
                </div>
                <div className="col">
                    <Titulo texto={count}/>
                </div>
                <div className="col">
                    <button className="btn btn-success" key={"buttonAdd"+t} onClick={()=> setCount(count+1)}>+</button> 
                </div>
            </div>
            
            
            
        </div> 
    ));
    return (
        <div>
            <Titulo texto="Lista de agentes"/>
            <ul>  {items} </ul>
        </div>
    )
}
 
export default ItemListContainer