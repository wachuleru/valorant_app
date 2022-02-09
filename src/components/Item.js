import React ,{ useContext, useState}from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
function Item({agent}) {
    
    
    
    return (
        
        <div className="col-md-3 mt-2">
            
            <div className="card" style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                
                <div className='card-header bg-dark text-danger'>
                    {agent.displayName}
                </div>
                <p className='text-center' style={{ background: 'rgba(0,0,0,0.7)', color:'white', position:'relative', top:'2px', left:'30px', width:'40%'}}>Precio: $ {agent.precio}</p>
                <p className='text-center' style={{ background: 'rgba(0,0,0,0.7)', color:'white',position:'relative', top:'-6px', left:'30px', width:'40%'}}>Stock: {agent.stock}</p>
                <img src={agent.fullPortrait} className="card-img-top" alt="" />
                
                <div className="card-body">
                    
                    <Link className="btn btn-primary" to={`/item/${agent.uuid}`}>Mas Detalles</Link>
                    <ItemCount agente={agent} precio={agent.precio} stock={agent.stock}/>
                </div>
            </div>

            {/* <div className="col">
                <button className="btn btn-danger" key={"buttonSub"+agent.name} onClick={()=> validarCount()}>-</button>
            </div>
            <div className="col">
                <Titulo texto={agent.name}/>
            </div>
            <div className="col">
                <Titulo texto={"Precio: "+agent.precio}/>
            </div>
            <div className="col">
                <Titulo texto={"Agregados a carrito: "+ count}/>
            </div>
            <div className="col">
                <button className="btn btn-success" key={"buttonSub"+agent.name} onClick={()=> validarStock()}>+</button>
            </div> */}
        </div>
      
    )
}

export default Item


