import React ,{useEffect} from 'react'
import CartWidget from './CartWidget';
import { Link ,NavLink} from 'react-router-dom';

export  const NavBar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger" to="/">Valorant App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/category" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/category/1b47567f-8f7b-444b-aae3-b0c634622d10">Iniciador</Link></li>
                            <li><Link className="dropdown-item" to="/category/dbe8757e-9e92-4ed4-b39f-9dfc589691d4">Duelista</Link></li>
                            <li><Link className="dropdown-item" to="/category/5fc02f99-4091-4486-a531-98459a3e95e9">Centinela</Link></li>
                            <li><Link className="dropdown-item" to="/category/4ee40330-ecdd-4f2f-98a8-eb1243428373">Controlador</Link></li>
                        </ul>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mapas
                        </a> */}
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Agentes</a></li>
                            <li><a className="dropdown-item" href="#">Mapas</a></li>
                        </ul> */}
                    {/* </li> */}
                </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
    
}

export default NavBar;
