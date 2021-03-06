import React from 'react'
import Item from './Item'

export function ItemList({agents}) {
    /* console.log("agentes firebase",agents); */
    return (
        <div className="row">
            {   
                
                agents.map(agent =>{
                    /* console.log(agent.displayName); */
                    return <Item agent={agent} key={agent.displayName} />
                })
            }
        </div>
    )
}

