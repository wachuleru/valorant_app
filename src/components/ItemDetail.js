import React from 'react'
import ItemCount from './ItemCount';
import Titulo from './Titulo'
/* import { Fragment } from 'react/cjs/react.production.min'; */

export default function ItemDetail({agent}) {
    console.log(agent);
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className='card' style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                    <div className='card-header bg-dark text-danger'>
                        {agent.displayName}
                    </div>
                    <img src={agent.fullPortrait} className="card-img-top" alt="" />
                    <p style={{backgroundColor:'white'}}>{agent.description}</p>
                </div>
            </div>
            <div className="col-md-3">
                { agent.stock ===0? <Titulo texto="Sin Stock"/> :<><Titulo texto="Cantidad:"/><ItemCount agente={agent} precio={agent.precio} stock={agent.stock}/></>
                    
                       
                    
                }

                
            </div>
        </div>
    )
}
