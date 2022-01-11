import React from 'react'
import Item from './Item'

export function ItemList({agents}) {
    return (
        <div className="row">
            {
                agents.map(agent =>{
                    console.log(agent.name);
                    return <Item agent={agent} key={agent.name} />
                })
            }
        </div>
    )
}

