import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
export  const NavBar = ()=> {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger" to="/">Valorant App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
               {/*  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Agentes
                        </a> */}
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Agentes</a></li>
                            <li><a className="dropdown-item" href="#">Mapas</a></li>
                        </ul> */}
                    {/* </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mapas
                        </a> */}
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Agentes</a></li>
                            <li><a className="dropdown-item" href="#">Mapas</a></li>
                        </ul> */}
                   {/*  </li>
                </ul>
                </div> */}
                <CartWidget/>
            </div>
        </nav>
    )
    
}

export default NavBar;
