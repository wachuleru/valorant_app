import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

import {getProductsById} from '../firebase/index.js'
import Titulo from './Titulo';
export default function ItemDetailContainer() {

    const [agent,setAgent]=useState(null);
    const {id}=useParams();
    /* console.log("productid",id); */

    
    /* console.log("agente actual fb", agent); */

    useEffect(() => {
        async function fn(){
            try{

                const product = await getProductsById(id);
                setAgent(product);
                /* console.log("agente desde firebase",agent);
                console.log("producto itemdetailconainer",product); */
            }catch(error){
                setAgent(null)
                /* console.log("agente desde firebase",agent);
                console.log("error al obtener agente",error); */
            }
        }
        fn();
       
    }, [id])
    return (
        <div className="container">
            {agent ===null?<Titulo texto="No existe este agente"/>:<ItemDetail agent={agent}/> }
        </div>
    )
}
