import React from 'react'
export default class Titulo extends React.Component {
    /* constructor (props){
        super(props)
        
    }
 */
    render() {
        
        return (
            <>
                <h2>{this.props.texto}</h2>
            </>
        )
    }
}

