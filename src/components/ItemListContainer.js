import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Titulo from './Titulo';

import {getAllProducts,getCategoryProducts} from '../firebase/index'
function ItemListContainer() {
    const [agentes,setAgentes]=useState([]);
    const [isLoading,setIsLoading]=useState(true)
    let categoria=""
    const {idCategory} =useParams();
    
    /* async function getAllProducts(){
        const firestore=getFirestore();
        const snapshot = await firestore.collection('products').get();
        const products = snapshot.docs.map((doc) => doc.data());
        console.log("firebase",products);
        setAgentes(products)
        return products
    }

    async function getCategoryProducts(){
        const firestore=getFirestore();
        const snapshot = await firestore
        .collection('products')
        .where('role.uuid','==',idCategory).get();
        
        const products = snapshot.docs.map((doc) => doc.data());
        console.log("firebase categoria filtrada",products);
        setAgentes(products)
        return products
    } */

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
        async function fn(){
            setIsLoading(true)
            try{
                if(idCategory){
                    const products= await getCategoryProducts(idCategory);
                    setAgentes(products );
                }else{
                    const prod= await getAllProducts();
                    setAgentes(prod);
                }
            }catch(error){
                console.log("error al cargar productos",error);
            } finally{
                setIsLoading(false)
            }
        }
        
        fn();
        
    }, [idCategory])
    

  
    return (
        <div className="container">
            
            {idCategory? <Titulo texto={`Lista de agentes tipo: ${(idCategory==='1b47567f-8f7b-444b-aae3-b0c634622d10'?'Iniciadores':(idCategory==='dbe8757e-9e92-4ed4-b39f-9dfc589691d4'?'Duelistas': (idCategory==='5fc02f99-4091-4486-a531-98459a3e95e9'?'Centinelas':'Controladores' )) )}`} />:<Titulo texto="Lista de agentes"/>}
            {agentes!==[] ?<ItemList agents={agentes}/> : null}
        </div>
    )
}
 
export default ItemListContainer