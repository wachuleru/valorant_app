import React from 'react'
import { Description } from './Description';
import ItemCount from './ItemCount';
import { PriceStock } from './PriceStock';
import { Rol } from './Rol';
import Titulo from './Titulo'
/* import { Fragment } from 'react/cjs/react.production.min'; */

export default function ItemDetail({agent}) {
    /* console.log(agent); */
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7">
                <div className='card' >
                    <div className='card-header bg-dark text-danger'>
                        {agent.displayName}
                    </div>
                    <div className="row  p-3">
                        <div className="col-xs-12 col-sm-6" style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                            <PriceStock precio={agent.precio} stock={agent.stock}/>
                            <img src={agent.fullPortrait} className="card-img-top" alt="" />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <Description description={agent.description} />
                        
                            {agent.role !== undefined?<Rol nombre={agent.role.displayName} descripcion={agent.role.description}/>:null}

                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="col-md-3">
                { agent.stock ===0? <Titulo texto="Sin Stock"/> :<><Titulo texto="Cantidad:"/><ItemCount agente={agent} precio={agent.precio} stock={agent.stock}/></>
                    
                       
                    
                }

                
            </div>
        </div>
    )
}
