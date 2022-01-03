import React ,{ useState}from 'react'
import Titulo from './Titulo';



function Item(props) {
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
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger" key={"buttonSub"+props.valor.name} onClick={()=> validarCount()}>-</button>
                </div>
                <div className="col">
                    <Titulo texto={props.valor.name}/>
                </div><div className="col">
                    <Titulo texto={count}/>
                </div>
                <div className="col">
                    <button className="btn btn-success" key={"buttonSub"+props.valor.name} onClick={()=> validarStock()}>+</button>
                </div>
            </div>
            
        </div>
    )
}

export default Item


