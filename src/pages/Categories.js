import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link className="btn btn-danger btn-block">Agentes</Link>
                </div>
                <div className="col">
                    <Link className="btn btn-info btn-block">Mapas</Link>
                </div>
            </div>
        </div>
    )
}
