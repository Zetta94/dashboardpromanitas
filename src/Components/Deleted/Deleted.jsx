//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import {getDeletedAdpost, 
        getDeletedUsers, 
        getDeletedContract} 
from '../../Redux/Actions';
//CSS
import  '../../Assets/CSS/Dashboard.css';
//Components
import Navbar from '../Navbar/Navbar';

const Deleted =()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeletedAdpost());
    dispatch(getDeletedUsers());
    dispatch(getDeletedContract());

  },[dispatch]);

  const allDeletedUsers = useSelector(state=> state.deletedUsers);
  const allDeletedAdposts = useSelector(state=> state.deletedAdposts);
  const allDeletedContracts = useSelector(state=> state.deletedContracts);
  
  
  const [infServer,setInfServer]=useState([])

  const setStates = (e, selector) => {
    e.preventDefault()
    setInfServer(selector)
  };

  return (
    <div>
      <Navbar/>
      <button className="dashboard-btn" onClick={ e => setStates(e, allDeletedUsers)} >USUARIOS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allDeletedAdposts)} >ADPOSTS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allDeletedContracts)} >CONTRACTS</button>

      {infServer.length > 0 && (
      <table className="dashboard-table">
        <thead>
          <tr>
            {infServer[0]?.name ? (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Info</th>
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
              </>
            ) : (
              <>
                <th>ID</th>
                <th>Fecha de inicio</th>
                <th>Fecha de cierre</th>
                <th>Precio</th>
                <th>Detalles</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {infServer.map((item) =>
            item.name ? (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ) : item.username ? (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.cellnumber}</td>
                <td>{item.address}</td>
                <td>{item.password}</td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.commencementDate.slice(0, 10)}</td>
                <td>{item.terminationDate.slice(0, 10)}</td>
                <td>{item.payment} USD</td>
                <td>{item.detail}</td>
              </tr>
            )
          )}

        </tbody>
      </table>
      )}

    </div>
  );
}

export default Deleted;
