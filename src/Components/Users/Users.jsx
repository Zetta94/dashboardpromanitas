import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getUsers, getDeletedUsers } from "../../Redux/Actions";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Users = () => {
    //DISPATCH
    const dispatch = useDispatch();


    //REDUCER REDUX
    useEffect(() => {
      dispatch(getUsers());
      dispatch(getDeletedUsers());
    },[dispatch]);
  
    //REDUX STATES
    const allUsers = useSelector(state => state.users);
    const allDeletedUsers = useSelector(state=> state.deletedUsers);

    //DELETE USER
    const deleteUser = async (id)=>{
        axios.delete(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
            .then(() => {
                window.alert("Usuario eliminado con éxito");
                dispatch(getUsers());
                dispatch(getDeletedUsers());
            })
            .catch((error) => {
                console.log(error);
            });
      };

      const confirmDelete = (id,selector) => {
        const confirmMessage = "¿Realmente deseas eliminar?";
        const confirmed = window.confirm(confirmMessage);
        if (confirmed && selector === 'user') {
          deleteUser(id);
        }
      };

      
    return(
        <div>
            <Navbar/>
            <h1>USUARIOS</h1>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Contraseña</th>
                        <th>Eliminar</th>
                        <th>Editar</th>                    
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers?.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.cellnumber}</td>
                                <td>{item.address}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button onClick={() => confirmDelete(item.id,'user')}>❎</button>
                                </td>
                                <td>
                                    <Link to={`/formusers/${item.id}`}>Editar</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;