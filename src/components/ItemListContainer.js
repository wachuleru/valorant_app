import React, { useState, useEffect} from 'react'

import { ItemList } from './ItemList';
import Titulo from './Titulo';

function ItemListContainer() {
    const [agentes,setAgentes]=useState([]);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?language=es-MX').then(response =>{
           
            return response.json()
        }).then(data =>{
            let res= {data};
            let dataAgents=res.data.data;
            console.log(dataAgents);
            dataAgents=dataAgents.filter(agente =>agente.uuid!== 'ded3520f-4264-bfed-162d-b080e2abccf9');
            setAgentes(dataAgents);

        })
    }, [])
    

  
    return (
        <div className="container">
            <Titulo texto="Lista de agentes"/>
            {agentes!==[] ?<ItemList agents={agentes}/> : null}
        </div>
    )
}
 
export default ItemListContainer