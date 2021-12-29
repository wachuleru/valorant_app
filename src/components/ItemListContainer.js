import React from 'react'
import Item from './Item';
import Titulo from './Titulo';
export default class ItemListContainer extends React.Component {
    constructor (props){
        super(props);
        this.state= {
            agentes: ['Sova','Sage','Skye','KillJoy','Raze']
        };
    }

    render() {
        console.log(this.state.agentes);
        const items=this.state.agentes.map(t  =>(
            <Item valor={t} />
        ));
        console.log(items);
        return (
            <div>
                <Titulo texto="Lista de agentes"/>
                <ul>{items}</ul>
            </div>
        )
    }
}
