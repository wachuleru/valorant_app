import React,{useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

import {getFirestore} from '../firebase'
export default function ItemDetailContainer() {

    const [agent,setAgent]=React.useState([]);
    const {id}=useParams();
    console.log("productid",id);

    
    async function getProductsById(id){
        const firestore=getFirestore();
        const doc = await firestore.collection('products').doc(id).get();

        if(!doc.exists){
            return null;
        }

        
        console.log("doc",doc.data());
        setAgent(doc.data())
        return doc
    }


    useEffect(() => {
       getProductsById(id)
        /* fetch('https://valorant-api.com/v1/agents/'+id+'?language=es-MX').then(response =>{
           
            return response.json()
        }).then(data =>{
            let res= {data};
            let dataAgents=res.data.data;
            console.log(dataAgents);
            setAgent(dataAgents);

        }) */
    }, [id])
    return (
        <div className="container">
            {agent !==[]?<ItemDetail agent={agent}/> :null}
        </div>
    )
}
