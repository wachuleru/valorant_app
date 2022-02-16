import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Titulo from './Titulo';

import {getAllProducts,getCategoryProducts} from '../firebase/index'
import { Spinner } from './Spinner';
function ItemListContainer() {
    const [agentes,setAgentes]=useState([]);
    const [isLoading,setIsLoading]=useState(true)
    let categoria=""
    const {idCategory} =useParams();
    

    useEffect(() => {
        if(idCategory){
            /* console.log("categoria",idCategory); */
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
            
            {idCategory? <Titulo texto={`Lista de agentes tipo: ${(idCategory==='1b47567f-8f7b-444b-aae3-b0c634622d10'?'Iniciadores':(idCategory==='dbe8757e-9e92-4ed4-b39f-9dfc589691d4'?'Duelistas': (idCategory==='5fc02f99-4091-4486-a531-98459a3e95e9'?'Centinelas':(idCategory==='4ee40330-ecdd-4f2f-98a8-eb1243428373'?'Controladores':'Categoria no encontrada' ) )) )}`} />:<Titulo texto="Lista de agentes"/>}
            {!isLoading ?<ItemList agents={agentes}/> : <Spinner/>}
        </div>
    )
}
 
export default ItemListContainer