import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getUsers, getAposts, getService} from "./Redux/Actions";
//CSS
import  "./Assets/CSS/Dashboard.css"
//Components
import Navbar from "./Components/Navbar/Navbar.jsx"

const Dashboard=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAposts());
    dispatch(getService());
  },[dispatch]);

  const allUsers = useSelector(state => state.users);
  const allAdposts = useSelector(state => state.adposts);
  const allService = useSelector(state => state.services);

  const [infServer,setInfServer]=useState([])

  const setStates = (e, selector) => {
    e.preventDefault()
    setInfServer(selector)
  }

  const deleteUser = async (id)=>{
    axios.delete(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
    .then(() => {
      window.alert("Usuario eliminado con éxito");
      // Después de eliminar el usuario, actualiza los datos de la tabla
      dispatch(getUsers());
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const confirmDelete = (id) => {
    const confirmMessage = "¿Realmente deseas eliminar?";
    const confirmed = window.confirm(confirmMessage);
    if (confirmed) {
      deleteUser(id);
    }
  };

  return (
    <div>
      <Navbar/>
      <button className="dashboard-btn" onClick={ e => setStates(e, allUsers)} >USUARIOS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allAdposts)} >ADPOSTS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allService)} >SERVICES</button>

      {infServer.length > 0 && (
  <table className="dashboard-table">
    <thead>
      <tr>
        {infServer[0].name ? (
          <>
            <th>ID</th>
            <th>Name</th>
            <th>Info</th>
          </>
        ) : (
          <>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
            <th>Dirección</th>
            <th>Contraseña</th>
            <th>Eliminado</th>
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
            <td>{item.description || item.image}</td>
            <td>
              <button onClick={() => confirmDelete(item.id)}>X</button>
            </td>
          </tr>
        ) : (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.cellnumber}</td>
            <td>{item.address}</td>
            <td>{item.password}</td>
            <td>{item.deleted}</td>
            <td>
              <button onClick={() => confirmDelete(item.id)}>X</button>
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
