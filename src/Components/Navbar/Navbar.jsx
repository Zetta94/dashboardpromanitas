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
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/deleted">ELIMINADOS</Link>
                    </li>
                    <li>
                        <Link to="/about">NOSOTROS</Link>
                    </li>                   
                </ul>
            </nav>
        </div>
    );
  }
  
  export default Navbar;