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
                        <Link to="/board">INICIO</Link>
                    </li>
                    <li>
                        <Link to='/users'>USUARIOS</Link>
                    </li>
                    <li>
                        <Link to='/adposts' >POSTEOS</Link>
                    </li>
                    <li>
                        <Link to='/contracts'>CONTRATOS</Link>
                    </li>
                    <li>
                        <Link to='/services'>SERVICIOS</Link>
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