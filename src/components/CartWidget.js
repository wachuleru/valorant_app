import React from 'react'
import { Link } from 'react-router-dom'
export default function CartWidget() {
    return (
        <div className="text-white">
            <Link className="btn btn-primary" to="/cart">4<i className="fas fa-shopping-cart "></i></Link>
        </div>
    )
}
