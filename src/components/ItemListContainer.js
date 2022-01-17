import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Titulo from './Titulo';

function ItemListContainer() {
    const [agentes,setAgentes]=useState([]);
    let categoria=""
    const {idCategory} =useParams();
    

    useEffect(() => {
        if(idCategory){
            console.log("categoria",idCategory);
            switch (idCategory) {
                case '1b47567f-8f7b-444b-aae3-b0c634622d10':
                    categoria= 'Iniciador';
                    break;
                case 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4':
                    categoria='Duelista';
                    break;
                case '5fc02f99-4091-4486-a531-98459a3e95e9':
                    categoria='Centinela';
                    break;
                case '4ee40330-ecdd-4f2f-98a8-eb1243428373':
                    categoria='Controlador';
                    break;
            
                default:
                    categoria='';
                    break;
            }
        }
    }, [idCategory])
    console.log(categoria);
    //console.log("ke",idCategory);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?language=es-MX').then(response =>{
           
            return response.json()
        }).then(data =>{
            let res= {data};
            let dataAgents=res.data.data;
            console.log(dataAgents);
            dataAgents=dataAgents.filter(agente =>agente.uuid!== 'ded3520f-4264-bfed-162d-b080e2abccf9');
            if(idCategory){
                dataAgents=dataAgents.filter(dataAgent => dataAgent.role.uuid===idCategory)
            }
            setAgentes(dataAgents);

        })
    }, [idCategory])
    

  
    return (
        <div className="container">
            
            {idCategory? <Titulo texto={`Lista de agentes tipo: ${(idCategory=='1b47567f-8f7b-444b-aae3-b0c634622d10'?'Iniciadores':(idCategory=='dbe8757e-9e92-4ed4-b39f-9dfc589691d4'?'Duelistas': (idCategory=='5fc02f99-4091-4486-a531-98459a3e95e9'?'Centinelas':'Controladores' )) )}`} />:<Titulo texto="Lista de agentes"/>}
            {agentes!==[] ?<ItemList agents={agentes}/> : null}
        </div>
    )
}
 
export default ItemListContainer