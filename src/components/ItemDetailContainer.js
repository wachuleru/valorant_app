import React from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer({agente}) {

    const [agent,setAgent]=React.useState([]);
    const myPromise= new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            resolve(agente);
        }, 3000);
    });

    React.useEffect(() => {
        myPromise.then(agent=>{
            setAgent(agent)
        },[]);
        
    }, []);
    return (
        <div>
            {agent !==[]?<ItemDetail agent={agent}/> :null}
        </div>
    )
}
