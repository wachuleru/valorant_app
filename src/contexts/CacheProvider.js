import React, { useState } from 'react';
import { CartContext } from './cartContext';
export default function CacheProvider({defaultValue=[], children}) {
    const [cache, setCache]=useState(defaultValue);

    function getFromCache(id){
        return  cache.find(obj =>obj.id===id);
    }

    function isInCache(id){
        return id===undefined? undefined: getFromCache(id)!== undefined;
    }

    function addToCache(obj){
        if(isInCache(obj && obj.id)){
            console.log('ya existe');
            return ;
        }
        /* setCart([...cache,obj]) */
    }
  return <CartContext.CacheProvider value={{cache, addToCache, isInCache,cacheSize: cache.length}}>

  </CartContext.CacheProvider>;
}


