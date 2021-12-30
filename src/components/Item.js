import React from 'react'
import Titulo from './Titulo';



function Item(props) {
    return (
        <div>
                <Titulo texto={props.valor}/>
            </div>
    )
}

export default Item


