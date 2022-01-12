import React, {Component, useState, useEffect} from 'react'

import { ItemList } from './ItemList';
import Titulo from './Titulo';

function ItemListContainer() {
   /*  const [agents,setAgents]=useState([]); */
    const [agentes,setAgentes]=useState([]);
    /* const agentes= [
        {name:'Sova',stock:10, precio:3990, img:"https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png"},
        {name:'Sage',stock:10, precio:3990, img:"https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png"},
        {name:'Skye',stock:10, precio:3990, img:"https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png"},
        {name:'KillJoy',stock:10, precio:3990, img:"https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png"},
        {name:'Raze',stock:10, precio:3990, img:"https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png"}]; */
    /* const myPromise= new Promise((resolve,reject)=>{
        setTimeout(() => {
            let agentsData=[{"name":"Sova","stock":10,"precio":3990,"img":"https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png"},{"name":"Sage","stock":10,"precio":3990,"img":"https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png"},{"name":"Skye","stock":10,"precio":3990,"img":"https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png"},{"name":"KillJoy","stock":10,"precio":3990,"img":"https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png"},{"name":"Raze","stock":10,"precio":3990,"img":"https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png"}];
            resolve(agentsData);
        }, 3000);
    });

    useEffect(() => {
        myPromise.then(agents=>{
            setAgents(agents)
        },[]);
        
    }, []); */

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?language=es-MX').then(response =>{
            //console.log(response);
            return response.json()
        }).then(data =>{
            let res= {data};
            let dataAgents=res.data.data;
            dataAgents=dataAgents.filter(agente =>agente.uuid!== 'ded3520f-4264-bfed-162d-b080e2abccf9');
            setAgentes(dataAgents);

        })
    }, [])
    
    /*  const items=agentes.map(t  =>(
        
        
        <Item valor={t} key={t.name} />
               
    ));
*/
  
    return (
        <div className="container">
            <Titulo texto="Lista de agentes"/>
            {agentes!==[] ?<ItemList agents={agentes}/> : null}
        </div>
    )
}
 
export default ItemListContainer