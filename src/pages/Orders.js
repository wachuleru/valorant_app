import React,{useEffect, useState} from 'react'
import OrderDetailList  from '../components/OrderDetailList'
import { Link } from 'react-router-dom';
import Titulo from '../components/Titulo'
import {getOrderById} from '../firebase/index'
export default function Orders() {
    
    const [orden,setOrden]=useState([])
    const [id,setId]=useState('')
    
    function buscar(){
        setId(document.getElementById('orden').value)
        /* console.log("orden:",id); */
    }

    useEffect(() => {
        async function fn(){
            try{

                const order = await getOrderById(id);
                //setOrden(order)
                /* console.log("ordern",order); */
                setOrden(order);
            }catch(error){
                console.log("error al obtener orden",error);
            }
        }
        fn();
       
        
    }, [id])
    
    return (
        <React.Fragment>
            <Titulo texto="Buscar Orden" />
            <div className='container mb-3'>
                <div className="row g-3 d-flex justify-content-center">
                    
                    <div className="col-5">
                        <input  className="form-control" type="text" id="orden" name="orden" placeholder="N° orden "/>
                    </div>
                    <div className="col-2">
                        <button className="form-control btn btn-primary"  onClick={buscar} >Buscar</button>
                    </div>
                </div>
            </div>
            
            {orden.length===0?<React.Fragment><Titulo  texto="Sin informacion"/> <Link className="btn btn-primary" to="/">Volver al Inicio</Link></React.Fragment>:(orden.items.length===0? <React.Fragment><Titulo texto="No hay productos en el carrito"/> <Link className="btn btn-primary" to="/">Volver al Inicio</Link></React.Fragment>:<OrderDetailList cart={orden}/>)}
        </React.Fragment>
    )
}
