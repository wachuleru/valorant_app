import React ,{ useState}from 'react'

import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
function Item({agent}) {
    const [count, setCount]=useState(0);
    const stock=10;
    const validarStock=()=>{
        if(count <stock){
            setCount(count+1);
        }
        
    }

    const validarCount=()=>{
        if(count >0){
            setCount(count-1);
        }
    }
    let fondo="backgroundImage: url("+ agent.background +")";
    return (
        
        <div className="col-md-3 mt-2">
            <div className="card" style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                <div className='card-header bg-dark text-danger'>
                    {agent.displayName}
                </div>
                <img src={agent.fullPortrait} className="card-img-top" alt="" />
                
                <div className="card-body">
                    
                    <Link className="btn btn-primary" to={`/item/${agent.uuid}`}>Mas Detalles</Link>
                    <ItemCount agente={agent} precio={2000} stock={20}/>
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


