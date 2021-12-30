import React ,{ useState}from 'react'
import Titulo from './Titulo';



function Item(props) {
    const [count, setCount]=useState(0);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger" key={"buttonSub"+props.valor} onClick={()=> setCount(count-1)}>-</button>
                </div>
                <div className="col">
                    <Titulo texto={props.valor}/>
                </div><div className="col">
                    <Titulo texto={count}/>
                </div>
                <div className="col">
                    <button className="btn btn-success" key={"buttonSub"+props.valor} onClick={()=> setCount(count+1)}>+</button>
                </div>
            </div>
            
        </div>
    )
}

export default Item


