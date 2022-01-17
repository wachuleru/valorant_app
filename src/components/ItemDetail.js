import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';

export default function ItemDetail({agent}) {
    console.log(agent);
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className='card' style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                    <div className='card-header bg-dark text-danger'>
                        {agent.displayName}
                    </div>
                    <img src={agent.fullPortrait} className="card-img-top" alt="" />
                    <p style={{backgroundColor:'white'}}>{agent.description}</p>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}
