import React from 'react'
import Titulo from './Titulo';

export default class Item extends React.Component {
    render(){
        return (
            <div>
                <Titulo texto={this.props.valor}/>
            </div>
        )
    
    }
}

