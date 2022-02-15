import React from 'react';

function Titulo(props) {
    return (
        <div>
          
            <h2 className="mt-2 mb-2">{props.texto}</h2>
             
        </div>
    )
}

export default Titulo


/* export default class Titulo extends React.Component {
    constructor (props){
        super(props)
        
    }

    render() {
        
        return (
            
        )
    }
}
 */
