import React from 'react'

export default function ItemDetail({agent}) {
    let fondo="backgroundImage: url("+ agent.background +")";
    return (
        <div className="col">
            <div className='card' style={{ backgroundImage: `url(${agent.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                <div className='card-header bg-dark text-danger'>
                    {agent.displayName}
                </div>
                <img src={agent.fullPortrait} className="card-img-top" alt="" />
                <p>{agent.description}</p>
            </div>
        </div>
    )
}
