import React ,{ useContext, useState}from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { PriceStock } from './PriceStock';
function Item({agent}) {
    
    
    
    return (
        
        <div className="col-md-3 mt-2">
            
            <div className="card" style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                
                <div className='card-header bg-dark text-danger'>
                    {agent.displayName}
                </div>
                <PriceStock stock={agent.stock} precio={agent.precio}/>
                <img src={agent.fullPortrait} className="card-img-top" alt="" />
                
                <div className="card-body">
                    
                    <Link className="btn btn-primary" to={`/item/${agent.uuid}`}>Mas Detalles</Link>
                    <ItemCount agente={agent} precio={agent.precio} stock={agent.stock}/>
                </div>
            </div>

            
        </div>
      
    )
}

export default Item


