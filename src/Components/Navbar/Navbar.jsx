import React from 'react';
import { Link } from 'react-router-dom';
//Logo
import img from '../../Assets/Images/icon.png'
//CSS
import "../Navbar/Navbar.css"

const Navbar=()=> {
    return (
        <div>
            <nav >
                <img src={img} alt="Logo" />
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Eliminados">Eliminados</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default Navbar;