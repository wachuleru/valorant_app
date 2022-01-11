import React ,{ useState}from 'react'
import Titulo from './Titulo';



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
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <img src={agent.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{agent.name}</h5>
                    <a  className="btn btn-primary">Mas Detalles</a>
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


