import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getUsers, 
        getAposts, 
        getService, 
        getContract, 
        getDeletedAdpost, 
        getDeletedUsers, 
        getDeletedContract} 
from "./Redux/Actions";
//CSS
import  "./Assets/CSS/Dashboard.css";
//Components
import Navbar from "./Components/Navbar/Navbar.jsx";


const Dashboard=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAposts());
    dispatch(getService());
    dispatch(getContract());
    dispatch(getDeletedAdpost());
    dispatch(getDeletedUsers());
    dispatch(getDeletedContract());
  },[dispatch]);

  const allUsers = useSelector(state => state.users);
  const allDeletedUsers = useSelector(state=> state.deletedUsers);
  const allAdposts = useSelector(state => state.adposts);
  const allDeletedAdposts = useSelector(state=> state.deletedAdposts);
  const allService = useSelector(state => state.services);
  const allContracts = useSelector(state => state.contracts);
  const allDeletedContracts = useSelector(state=> state.deletedContracts);
  
  
  const [infServer,setInfServer]=useState([])

  const setStates = (e, selector) => {
    e.preventDefault()
    setInfServer(selector)
  };

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
  
  const deleteAdpost = async (id)=>{
    axios.delete(`https://promanitasapi.onrender.com/api/v1/adposts/${id}`)
    .then(() => {
      window.alert("Posteo eliminado con éxito");
      dispatch(getAposts());
      dispatch(getDeletedAdpost());
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const deleteContract = async (id)=>{
    axios.delete(`https://promanitasapi.onrender.com/api/v1/contract/${id}`)
    .then(() => {
      window.alert("Contrato eliminado con éxito");
      dispatch(getContract());
      dispatch(getDeletedContract());
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
    if (confirmed && selector === 'adpost') {
      deleteAdpost(id);
    }
    if (confirmed && selector === 'contract') {
      deleteContract(id);
    }
  };

  return (
    <div>
      <Navbar/>
      <button className="dashboard-btn" onClick={ e => setStates(e, allUsers)} >USUARIOS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allAdposts)} >ADPOSTS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allService)} >SERVICES</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allContracts)} >CONTRACTS</button>
       
      <div className="divbox">
        <h1 className="h1box">Usuarios activos: {allUsers.length}</h1>
        <h1 className="h1box">Usuarios eliminados: {allDeletedUsers.length}</h1>
        <h1 className="h1box">Posteos activos: {allAdposts.length}</h1>
        <h1 className="h1box">Posteos eliminados: {allDeletedAdposts.length}</h1>
        <h1 className="h1box">Contratos activos: {allContracts.length}</h1>
        <h1 className="h1box">Contratos eliminados: {allDeletedContracts.length}</h1>
      </div>


      {infServer.length > 0 && (
      <table className="dashboard-table">
        <thead>
          <tr>
            {infServer[0]?.name ? (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Info</th>
                {infServer[0]?.description? <th>Eliminar</th> : null }
              </>
            ) : infServer[0]?.username ?(
              <>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Contraseña</th>
                <th>Eliminar</th>
              </>
            ) : (
              <>
                <th>ID</th>
                <th>Fecha de inicio</th>
                <th>Fecha de cierre</th>
                <th>Precio</th>
                <th>Detalles</th>
                <th>Eliminar</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {infServer.map((item) =>
            item.name ?(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description || item.image}</td>
                <td>
                  { !item.description ? null
                    :  <button onClick={() => confirmDelete(item.id,'adpost')}>❎</button>
                    }
                </td>
              </tr>
            ) 
            : item.username ? (
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
              </tr>
            ) : (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.commencementDate}</td>
                <td>{item.terminationDate}</td>
                <td>{item.payment} USD</td>
                <td>{item.detail}</td>
                <td>
                  <button onClick={() => confirmDelete(item.id,'contract')}>❎</button>
                </td>
              </tr>
            )
          )}

        </tbody>
      </table>
      )}

    </div>
  );
}

export default Dashboard;
